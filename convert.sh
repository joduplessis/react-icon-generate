#!/bin/bash

rm -rf $2
svgr $1 -d $2 --svg-props width={props.size} --svg-props height={props.size} --template ./template.js --filename-case "kebab"
