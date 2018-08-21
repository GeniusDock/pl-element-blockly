lib = File.expand_path("../lib", __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require "prolog/blockly/version"

Gem::Specification.new do |spec|
  spec.authors       = ["Agustin Pina"]
  spec.email         = ["aguspina87@gmail.com"]

  spec.summary       = "Prolog Blockly"
  spec.homepage      = "https://github.com/GeniusDock/pl-element-blockly"
  spec.license       = "MIT"

  spec.files         = Dir["lib/**/*"] + Dir["app/**/*"] + ["Rakefile"]
  spec.test_files    = `git ls-files -- {test,spec}/*`.split("\n")

  spec.name          = "prolog-blockly"
  spec.require_paths = ["lib"]
  spec.version       = Prolog::Blockly::VERSION

  spec.add_development_dependency "bundler", "~> 1.16.a"
  spec.add_development_dependency "rake", "~> 10.0"
  spec.add_development_dependency "rspec", "~> 3.0"

  spec.required_ruby_version = '~> 2.3'
end
