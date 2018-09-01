# Блок Install commands ( команды для развертывания проекта )

---

## Описание блока:
Содержит команды и их описание, по развертыванию проекта, его подключению, интегрированию в проекты.
Например:
* Как подключить к файлу  ++** html **++
* Как установить через консоль в виде ++** npm **++ пакета.

---

## Содержание блока:

```markdown
<a id="installation"></a>

## Установка проекта:

---


${nameProject} supports Node.js. You can install ${namePackage} globally or in your project's node_modules folder.

  1. To install the latest version on ( npm or yarn ) locally and save it in your package's package.json file:

    ```bash
    npm install --save-dev ${namePackage}
    yarn add ${namePackage} --dev
    ```

  2.  Add ${namePackage} in your project.

    ```javascript
    let ... = require(...');
    import ... from '...';
    ```

  2. Add ${namePackage} in your project.

    1. Download latest build version file
    2. Copy to your site root directory;
    3. Add line on your html file `<script src=".js"></script>`
      to tag`<head></head>`

 **[⬆ к оглавлению](#Оглавление)**
```

