require "spec_helper"

describe Prolog::Blockly do
  it { expect(File.exist? Prolog::Blockly.assets_path_for('htmls/pl-element-blockly.html')).to be true }
  it { expect(File.exist? Prolog::Blockly.assets_path_for('htmls/vendor/polymer.html')).to be true }
  it { expect(File.exist? Prolog::Blockly.assets_path_for('javascripts/vendor/webcomponents.min.js')).to be true }
end