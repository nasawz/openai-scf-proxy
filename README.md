**openai-scf-proxy**



OpenAI-scf-proxy 是一个开源的服务器代理，支持加密解密机制，可用于APP访问 OpenAI 的 API。这个项目是在原始的 Ice-Hazymoon/openai-scf-proxy 项目基础上进行改进和扩展的。



本代理基于 Node.js 和 Serverless 框架开发，可以运行在 AWS Lambda 和腾讯云 SCF 等无服务器平台上。我们开发这个项目的主要目的是为开发者提供一个方便且安全的 API 接口，用于访问 OpenAI 的服务。



**使用方法**



**安装**



首先，您需要执行以下命令来安装项目的依赖：



npm install



**环境变量**



接下来，您需要设置环境变量。请将 “.env.example” 文件复制一份并将 “KEY” 和 “PRIVATE_KEY” 值替换为您自己的密钥。



cp .env.example .env



\# .env 文件

OPENAI_API_KEY='your_openai_key'

PRIVATE_KEY='your_private_key'



**启动代理**



为了启动代理服务器，您需要执行以下命令：



serverless deploy



这个命令将会将这个项目部署到云端，并让它可以被使用。



**使用**



假设您的公网 IP 地址是 “123.456.789.0”，AWS Lambda API 端点是 “https://us-west-2.amazonaws.com/xxxxx”，那么您可以使用以下 URL 来访问该 API 端点：



http://123.456.789.0:3000/us-west-2.amazonaws.com/xxxxx



当您访问这个 URL 时，代理将会使用您的 “KEY” 和 “PRIVATE_KEY” 环境变量来解密请求，并转发到 Lambda API 端点。成功响应后，代理将会返回 Lambda API 的响应结果。



**开源协议**



本项目采用 MIT 开源协议。详情请查看 [LICENSE](LICENSE) 文件。



**贡献者**



• @Ice-Hazymoon (原项目作者)
• @nasawz