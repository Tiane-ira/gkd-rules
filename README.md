## 订阅地址

```
https://fastly.jsdelivr.net/gh/Tiane-ira/gkd-rules@latest/dist/gkd.json5
```

## 配置环境

请安装最新版 nodejs 和 pnpm 运行, 以及使用 vscode 打开项目

> [!IMPORTANT]
> 选择器需要使用 nodejs@22 的 WasmGc 来校验 Java/Kotlin 正则表达式, 确保使用 nodejs>=22

- nodejs>=**22** <https://nodejs.org/en/download>
- pnpm>=9 <https://pnpm.io/zh/installation>
- vscode <https://code.visualstudio.com>

接下来下载并初始化环境

```shell
pnpm install
```

如果因为网络问题安装失败, 将上面的 `pnpm install` 换成下面命令使用 阿里镜像源 重新安装即可

```sh
pnpm install --registry=https://registry.npmmirror.com
```

---
