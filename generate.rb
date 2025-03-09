#!/usr/bin/env ruby
require 'fileutils'
require 'optparse'

# Get the component name
name = ARGV[0]
unless name
  puts 'Error: You must provide a component name.'
  exit 1
end

# Define directory
STORIES_DIR = "./src/stories/#{name}"

# Define templates
CSS_TEMPLATE = ""

SPEC_TEMPLATE =
  <<~VUE
    import { render, fireEvent } from '@testing-library/vue';
    import { describe, expect, it } from 'vitest';
    import #{name} from "./#{name}.vue";

    describe("#{name}", () => {
        it('renders with label', () => {
            const { getByText } = render(#{name}, { props: { label: 'Click me' } });
            expect(getByText('Click me')).toBeTruthy();
        });

        it('emits click event', async () => {
            const { getByRole, emitted } = render(#{name}, { props: { label: 'Click' } });
            await fireEvent.click(getByRole('button'));
            expect(emitted()).toHaveProperty('click');
        });
    });
  VUE

STORIES_TEMPLATE =
  <<~VUE
    import #{name} from "./#{name}.vue";
    import { fn } from '@storybook/test'

    // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
    export default {
      title: "#{name}",
      component: #{name},
      tags: ['autodocs'],
      argTypes: {
        size: { control: { type: 'select' }, options: ['small', 'medium', 'large'] },
        backgroundColor: { control: 'color' }
      },
      // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
      args: { onClick: fn() }
    }

    // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
    export const Primary = {
      args: {
        primary: true,
        label: 'Button'
      }
    }

    export const Secondary = {
      args: {
        label: 'Button'
      }
    }
VUE

VUE_TEMPLATE =
  <<~VUE
  <template>
  </template>

  <script lang="ts">
    import { defineComponent, computed, inject } from 'vue';
    import "./#{name}.css";
    import { NovaUIConfigSymbol } from '../../../index';

    export default defineComponent({
      name: "#{name}",
      props: {
        label: {
          type: String,
          required: true,
        },
      },
      emits: ['click'],
      setup(props, { emit }) {
        const novaConfig = inject(NovaUIConfigSymbol, { theme: 'blue', borderRadius: '4px' });

        const onClick = () => {
          emit('click');
        };

        return {
          novaConfig,
          onClick,
        };
      },
    });
  </script>
VUE

# Determine the directory
css_path = File.join(STORIES_DIR, "#{name}.css")
spec_path = File.join(STORIES_DIR, "#{name}.spec.ts")
stories_path = File.join(STORIES_DIR, "#{name}.stories.js")
vue_path = File.join(STORIES_DIR, "#{name}.vue")

# Create directory if it doesn't exist
FileUtils.mkdir_p(STORIES_DIR)

# Check if file already exists
if File.exist?(css_path)
  puts "Error: #{name}.css already exists!"
  exit 1
end

if File.exist?(spec_path)
  puts "Error: #{name}.spec.ts already exists!"
  exit 1
end

if File.exist?(stories_path)
  puts "Error: #{name}.stories.js already exists!"
  exit 1
end

if File.exist?(vue_path)
  puts "Error: #{name}.vue already exists!"
  exit 1
end

# Generate file
File.write(css_path, CSS_TEMPLATE)
File.write(spec_path, SPEC_TEMPLATE)
File.write(stories_path, STORIES_TEMPLATE)
File.write(vue_path, VUE_TEMPLATE)

# Generate success message
puts "Generated #{name} component."
puts "  - #{css_path}"
puts "  - #{spec_path}"
puts "  - #{stories_path}"
puts "  - #{vue_path}"
puts "Done!"
puts "🚀"
