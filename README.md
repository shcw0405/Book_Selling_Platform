# 校园售书平台

这是一个用 React 和 Vue 构建的校园售书平台。该平台主要用于在校园内进行二手书籍的交易，买卖双方可以通过平台联系并线下完成交易。

## 功能特点

- 展示在售书籍列表
- 书籍详情页展示
- 按书名搜索功能
- 书籍信息包括：图片、名称、价格、卖家和联系方式

## 技术栈

- React
- Vue
- React Router
- Ant Design Vue

## 如何运行

1. 克隆仓库

   ```
   git clone https://github.com/你的用户名/booksale-app.git
   cd booksale-app
   ```

2. 安装依赖

   ```
   npm install
   ```

3. 启动开发服务器

   ```
   npm start
   ```

4. 打开浏览器访问 `http://localhost:3000`

## 部署到 GitHub Pages

1. 修改 `package.json` 中的 `homepage` 字段为你的 GitHub Pages URL。

2. 运行部署命令
   ```
   npm run deploy
   ```

## 项目结构

```
src/
  ├── components/      # 通用组件
  ├── pages/           # 页面组件
  ├── data/            # 示例数据
  ├── types/           # TypeScript类型定义
  ├── App.tsx          # 应用主组件
  └── index.tsx        # 入口文件
```

## 许可证

MIT
