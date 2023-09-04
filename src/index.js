const images = require.context('./', true, /\.(png|jpe?g|gif|svg)$/)
images.keys().forEach(images)
