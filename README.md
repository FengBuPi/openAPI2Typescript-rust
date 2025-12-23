# openAPI2Typescript-rust
openapi格式接口文档转成typescript小工具

wasm-pack build --target nodejs --out-dir npm/pkg --release

cargo build --release --bin openapi2ts && \
mkdir -p dist/openapi2ts-macos-x86_64-v0.1.0 && \
cp target/release/openapi2ts dist/openapi2ts-macos-x86_64-v0.1.0/ && \
[ -f openapi2ts.config.json5 ] && cp openapi2ts.config.json5 dist/openapi2ts-macos-x86_64-v0.1.0/openapi2ts.config.json5.example || true && \
cd dist && tar -czf openapi2ts-macos-x86_64-v0.1.0.tar.gz openapi2ts-macos-x86_64-v0.1.0 && cd ..