<script lang="ts">
  import { defineComponent, computed, ref, onMounted, onUnmounted } from 'vue';
  import dayjs from 'dayjs';

  import "./NTimeline.css";

  interface TimelineItem {
    startTime: string;
    duration: number; // in minutes
    content: string;
    link?: string;
    icon?: string;
    color?: string;
  }

  export default defineComponent({
    name: "NTimeline",
    props: {
      startDateTime: {
        type: String,
        required: true,
      },
      endDateTime: {
        type: String,
        required: true,
      },
      minuteInterval: {
        type: Number,
        default: 1,
      },
      items: {
        type: Array as () => TimelineItem[],
        required: true,
      },
    },
    setup(props) {
      // Keep a ref for the timeline container (if you need scroll or bounding logic)
      const timelineRef = ref<HTMLElement | null>(null);

      // Current time, updated in real-time
      const now = ref(dayjs());

      // Update the `now` ref periodically
      let timer: number | undefined;
      onMounted(() => {
        // Update every minute; adjust if you need more frequent updates
        timer = window.setInterval(() => {
          now.value = dayjs();
        }, 60000);
      });
      onUnmounted(() => {
        if (timer) {
          clearInterval(timer);
        }
      });

      // Parse start/end
      const start = computed(() => dayjs(props.startDateTime));
      const end = computed(() => dayjs(props.endDateTime));

      // Total minutes from start to end
      const totalMinutes = computed(() => {
        return end.value.diff(start.value, 'minute');
      });

      // Decide how many pixels per minute
      const pxPerMinute = 2; // Adjust as desired for spacing

      // The total height of the main timeline container
      const containerHeight = computed(() => {
        return totalMinutes.value * pxPerMinute;
      });

      // Pre-map each item with position data
      const mappedItems = computed(() => {
        return props.items.map((item) => {
          const itemStart = dayjs(item.startTime);
          // Offset from the timeline's start, in minutes
          const offset = itemStart.diff(start.value, 'minute');
          return {
            ...item,
            top: offset * pxPerMinute,
            height: item.duration * pxPerMinute,
            endTime: itemStart.add(item.duration, 'minute'),
          };
        });
      });

      // Naively handle overlapping items by assigning columns
      const positionedItems = computed(() => {
        const sortedByTop = [...mappedItems.value].sort((a, b) => a.top - b.top);

        // columns array will track { end: number, col: number }
        // - 'end' is the bottom offset of the last item in that column
        // - 'col' is the column index
        const columns: { end: number; col: number }[] = [];
        let maxCol = 0;

        sortedByTop.forEach((item) => {
          let placed = false;
          for (let i = 0; i < columns.length; i++) {
            // If this item starts after that column's last item ends, place it there
            if (item.top >= columns[i].end) {
              columns[i].end = item.top + item.height;
              (item as any).column = columns[i].col;
              placed = true;
              break;
            }
          }
          if (!placed) {
            maxCol++;
            (item as any).column = maxCol;
            columns.push({
              end: item.top + item.height,
              col: maxCol,
            });
          }
        });
        return sortedByTop;
      });

      // Current time offset from start
      const currentOffset = computed(() => {
        // If now is before start, place line at the top
        if (now.value.isBefore(start.value)) {
          return 0;
        }
        // If now is after the end, place line at the bottom
        if (now.value.isAfter(end.value)) {
          return containerHeight.value;
        }
        const diffInMinutes = now.value.diff(start.value, 'minute');
        return diffInMinutes * pxPerMinute;
      });

      // Compute each timeslot label for lines
      const timeSlots = computed(() => {
        const slots = [];
        for (let i = 0; i <= totalMinutes.value; i += props.minuteInterval) {
          const minuteTime = start.value.add(i, 'minute');
          slots.push({
            offset: i * pxPerMinute,
            time: minuteTime.format('HH:mm'),
          });
        }
        return slots;
      });

      return {
        timelineRef,
        containerHeight,
        now,
        mappedItems,
        positionedItems,
        currentOffset,
        timeSlots,
      };
    },
  });
</script>

<template>
  <div class="n-timeline" :style="{ height: containerHeight + 'px' }" ref="timelineRef">
    <!-- Red line for the current time -->
    <div
      class="n-timeline-current-time-line"
      :style="{ top: currentOffset + 'px' }"
    ></div>

    <!-- Render the background lines and labels -->
    <div class="n-timeline-lines">
      <div
        v-for="slot in timeSlots"
        :key="slot.offset"
        class="n-timeline-line"
        :style="{ top: slot.offset + 'px' }"
      >
        <span class="n-timeline-time">{{ slot.time }}</span>
      </div>
    </div>

    <!-- Items container -->
    <div class="n-timeline-items">
      <div
        v-for="(item, index) in positionedItems"
        :key="index"
        class="n-timeline-item"
        :style="{
          top: item.top + 'px',
          height: item.height + 'px',
          left: (item.column * 120) + 'px', // 120px offset per column, adjust as needed
          backgroundColor: item.color || '#f0f0f0',
        }"
      >
        <!-- Optional link wrapping -->
        <template v-if="item.link">
          <a :href="item.link">
            <i v-if="item.icon" :class="item.icon" /> {{ item.content }}
          </a>
        </template>
        <template v-else>
          <i v-if="item.icon" :class="item.icon" /> {{ item.content }}
        </template>
      </div>
    </div>
  </div>
</template>
