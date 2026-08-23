// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  // 1. 이미지, CSS, JS 등의 불러오기 경로를 상대 경로('./')로 변경
  base: './', 
  
  build: {
    // 2. about/index.html 대신 about.html 파일로 생성
    format: 'file'
  }
});