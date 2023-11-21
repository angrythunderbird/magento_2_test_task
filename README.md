# Magento test task

## Clone markshust/docker-magento repo and replace the directory with the corresponding directory from this repository

```
mkdir magento
cd magento
git clone https://github.com/markshust/docker-magento.git
```

Replace `/app` folder with corresponding folder from this repo. Also copy the following files to the src folder:

-   .gitignore
-   grunt-config.json
-   Gruntfile.js
-   package.json

## Go to magento folder and run the build

`bin/start`

## Upgrade magento

`bin/magento setup:upgrade `

## Go to "magento.test" in your browser
