#!/usr/bin/env rubyruby
result = `sass css/main.sass css/main.css`
raise result unless $?.to_i == 0
raise "When compiled the module should output some CSS" unless File.exists?('css/main.css')
puts "Regular compile worked successfully"