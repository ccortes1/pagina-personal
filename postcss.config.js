module.exports = {
    plugins: [
        require('postcss-apply'),
        require('postcss-import'),
        require('postcss-custom-media')({
            preserve: false,
        }),
        require('postcss-preset-env')({
            autoprefixer: {
                grid: false,
                flexbox: false,
            },
            preserve: true, //Valor por defecto de "true".Se asemeja a customProperties
            //cambiar a false para notar el cambio
        }),
    ],
};