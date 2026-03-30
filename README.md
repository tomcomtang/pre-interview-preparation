# Interview Notes Posts (Astro)

用 Astro 搭建的面试要点记录站点：

- 首页是文章列表
- 点击文章进入详情页：`/posts/[slug]`

文章写在 `src/content/posts/*.md`，每个文件都需要以下 frontmatter：

- `title`：标题
- `date`：日期（建议 `YYYY-MM-DD`，用于排序）
- `description`（可选）：列表摘要
- `tags`（可选）：标签数组（字符串数组）

启动：

```bash
npm install
npm run dev
```

构建：

```bash
npm run build
```
