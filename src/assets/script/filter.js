/*
 * 常用默认过滤器
 * 
 */
'use strict';

import Vue from 'vue'

import { formatDate } from "./utils.js"

Vue.filter("time", formatDate)//时间