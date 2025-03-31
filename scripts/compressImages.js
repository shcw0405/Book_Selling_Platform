const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

// 图片源目录和输出目录
const sourceDir = path.join(__dirname, "../public/image");
const outputDir = path.join(__dirname, "../public/image/compressed");
const thumbnailDir = path.join(__dirname, "../public/image/thumbnails");

// 确保输出目录存在
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

if (!fs.existsSync(thumbnailDir)) {
  fs.mkdirSync(thumbnailDir, { recursive: true });
}

// 遍历源目录中的所有图片
fs.readdir(sourceDir, (err, files) => {
  if (err) {
    console.error("读取目录出错:", err);
    return;
  }

  // 筛选图片文件
  const imageFiles = files.filter((file) => {
    const ext = path.extname(file).toLowerCase();
    return [".jpg", ".jpeg", ".png", ".webp"].includes(ext);
  });

  // 处理每个图片
  imageFiles.forEach((file) => {
    const sourcePath = path.join(sourceDir, file);
    const outputPath = path.join(outputDir, file);
    const thumbnailPath = path.join(thumbnailDir, file);

    // 跳过目录
    if (fs.statSync(sourcePath).isDirectory()) return;

    console.log(`处理图片: ${file}`);

    // 创建压缩版本
    sharp(sourcePath)
      .resize({ width: 800 }) // 限制最大宽度
      .webp({ quality: 80 }) // 转换为WebP格式并设置质量
      .toFile(outputPath.replace(/\.(jpg|jpeg|png)$/i, ".webp"), (err) => {
        if (err) console.error(`压缩图片出错 ${file}:`, err);
        else console.log(`已创建压缩版本: ${file}`);
      });

    // 创建缩略图
    sharp(sourcePath)
      .resize({ width: 200 }) // 缩略图尺寸
      .webp({ quality: 70 }) // 转换为WebP格式并设置较低质量
      .toFile(thumbnailPath.replace(/\.(jpg|jpeg|png)$/i, ".webp"), (err) => {
        if (err) console.error(`创建缩略图出错 ${file}:`, err);
        else console.log(`已创建缩略图: ${file}`);
      });
  });
});

console.log("图片压缩任务已启动，请等待处理完成...");
