#!/bin/bash
# send received parameter to serial port ttyMCC
# -ne --> without carriage return and line feed
echo -ne  $1 > /dev/ttyMCC;
echo $1;
