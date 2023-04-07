# New MoniTracer

Aplicativo desenvolvido para controle de constantes, manuseio e testagem do robô seguidor de linha Tracer.

Será desenvolvido em React-Native...

## 📱 Geração de versão de release na Play Store

Para gerar a versão de release basta rodar:

```bash
cd android
```
```bash
./gradlew bundleRelease
```

Esses comandos irão gerar o arquivo `app-release.aab` estará disponível na pasta `android/app/build/outputs/bundle/release`. Esse arquivo pode ser usado no Google Play Console para gerar uma versão do app.
