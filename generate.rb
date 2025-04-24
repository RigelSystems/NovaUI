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
        label: { control: { type: 'text' } },
      },
      args: {
        label: 'Button',
      },
      parameters: {
        docs: {
          description: {
            component: "A description of the component."
          }
        }
      }
    }

    // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
    export const Default = {};
VUE

VUE_TEMPLATE =
  <<~VUE
  <script lang="ts">
    import { defineComponent, computed, inject } from 'vue';
    import '@/assets/shared.css';
    import "./#{name}.css";

    export default defineComponent({
      name: "#{name}",
      props: {},
      setup(props) {
        return {};
      },
    });
  </script>

  <template>
  </template>
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

# Function to update the NovaUI.ts plugin file
PLUGIN_FILE = './index.ts'
def update_plugin(name)
  return unless File.exist?(PLUGIN_FILE)

  import_statement = "import #{name} from './src/stories/#{name}/#{name}.vue';"
  component_registration = "app.component('#{name}', #{name});"

  content = File.read(PLUGIN_FILE)

  # Check if the import already exists
  if content.include?(import_statement)
    puts "⚠️  #{name} is already in NovaUI.ts!"
    return
  end

  # Insert the import statement before the `export interface` line
  content.sub!(/(export interface NovaUIOptions)/, "#{import_statement}\n\n\\1")

  # Insert the component registration before the closing `}`
  content.sub!(/(\/\/ Register components globally\n\s*app\.component\('NButton', NButton\);)/, "\\1\n    #{component_registration}")

  File.write(PLUGIN_FILE, content)
end

# Generate file
File.write(css_path, CSS_TEMPLATE)
File.write(spec_path, SPEC_TEMPLATE)
File.write(stories_path, STORIES_TEMPLATE)
File.write(vue_path, VUE_TEMPLATE)

update_plugin(name)

# Generate success message
puts "Generated #{name} component."
puts "  - #{css_path}"
puts "  - #{spec_path}"
puts "  - #{stories_path}"
puts "  - #{vue_path}"
puts "  - Updated index.ts"
puts "Done!"
puts "🚀"
