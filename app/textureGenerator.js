function generatePositionTexture(inputArray, textureSize, size) {

    var bounds = size;
    var bounds_half = bounds / 2;

    var textureArray = new Float32Array(textureSize * textureSize * 4);

    for (var i = 0; i < textureArray.length; i += 4) {

        if (i < inputArray.length * 4) {

            var x = Math.random() * bounds - bounds_half;
            var y = Math.random() * bounds - bounds_half;
            var z = Math.random() * bounds - bounds_half;

            textureArray[i] = x;
            textureArray[i + 1] = y;
            textureArray[i + 2] = z;
            textureArray[i + 3] = 1.0;

        } else {

            
            textureArray[i] = -1.0;
            textureArray[i + 1] = -1.0;
            textureArray[i + 2] = -1.0;
            textureArray[i + 3] = -1.0;

        }

    }

    var texture = new THREE.DataTexture(textureArray, textureSize, textureSize, THREE.RGBAFormat, THREE.FloatType);
    texture.needsUpdate = true;
    
    return texture;

}



function generateIdMappings(inputArray, textureSize) {

    var textureArray = new Float32Array(textureSize * textureSize * 4);

    var counter = 0;

    for (var i = 0; i < textureArray.length; i += 4) {

        if (i < inputArray.length * 4) {

            textureArray[i] = counter;
            textureArray[i + 1] = 0;
            textureArray[i + 2] = 0;
            textureArray[i + 3] = 0;

        } else {

            
            textureArray[i] = -1.0;
            textureArray[i + 1] = -1.0;
            textureArray[i + 2] = -1.0;
            textureArray[i + 3] = -1.0;

        }

        counter++;

    }

    var texture = new THREE.DataTexture(textureArray, textureSize, textureSize, THREE.RGBAFormat, THREE.FloatType);
    texture.needsUpdate = true;
    
    return texture;

}


function generateCircularLayout(inputArray, textureSize) {

    var increase = Math.PI * 2 / inputArray.length;
    var angle = 0;
    var radius = inputArray.length * 4 * 2;

    var textureArray = new Float32Array(textureSize * textureSize * 4);

    for (var i = 0; i < textureArray.length; i += 4) {

        if (i < inputArray.length * 4) {


            
            var x = radius * Math.cos(angle);
            var y = radius * Math.sin(angle);
            var z = 0;
            var w = 1.0;

            textureArray[i] = x;
            textureArray[i + 1] = y;
            textureArray[i + 2] = z;
            textureArray[i + 3] = w;

            angle += increase;

        } else {

            textureArray[i] = -1.0;
            textureArray[i + 1] = -1.0;
            textureArray[i + 2] = -1.0;
            textureArray[i + 3] = -1.0;

        }

    }

    var texture = new THREE.DataTexture(textureArray, textureSize, textureSize, THREE.RGBAFormat, THREE.FloatType);
    texture.needsUpdate = true;
    
    return texture;

}


function generateSphericalLayout(inputArray, textureSize) {

    
    var radius = inputArray.length * 4;

    var textureArray = new Float32Array(textureSize * textureSize * 4);

    for (var i = 0, l = inputArray.length; i < l; i++) {

        var phi = Math.acos(-1 + ( 2 * i ) / l);
        var theta = Math.sqrt(l * Math.PI) * phi;


        
        var x = radius * Math.cos(theta) * Math.sin(phi);
        var y = radius * Math.sin(theta) * Math.sin(phi);
        var z = radius * Math.cos(phi);
        var w = 1.0;

        textureArray[i * 4] = z;
        textureArray[i * 4 + 1] = y;
        textureArray[i * 4 + 2] = x;
        textureArray[i * 4 + 3] = w;

    }

    for (var i = inputArray.length * 4; i < textureArray.length; i++) {

        
        textureArray[i] = -1;

    }


    var texture = new THREE.DataTexture(textureArray, textureSize, textureSize, THREE.RGBAFormat, THREE.FloatType);
    texture.needsUpdate = true;

    return texture;

}


function generateHelixLayout(inputArray, textureSize) {

    var textureArray = new Float32Array(textureSize * textureSize * 4);

    for (var i = 0, l = inputArray.length; i < l; i++) {

        var phi = i * 0.125 + Math.PI;


        
        var x = i * 15;
        var y = 500 * Math.sin(phi);
        var z = 500 * Math.cos(phi);
        var w = 1.0;

        textureArray[i * 4] = x;
        textureArray[i * 4 + 1] = y;
        textureArray[i * 4 + 2] = z;
        textureArray[i * 4 + 3] = w;

    }

    for (var i = inputArray.length * 4; i < textureArray.length; i++) {

        
        textureArray[i] = -1;

    }


    var texture = new THREE.DataTexture(textureArray, textureSize, textureSize, THREE.RGBAFormat, THREE.FloatType);
    texture.needsUpdate = true;

    return texture;

}


function generateGridLayout(inputArray, textureSize) {

    var textureArray = new Float32Array(textureSize * textureSize * 4);

    for (var i = 0; i < inputArray.length; i++) {

        
        var x = ( ( i % 5 ) * 500 ) - 1000;
        var y = ( - ( Math.floor( i / 5 ) % 5 ) * 500 ) + 1000;
        var z = ( Math.floor( i / 25 ) ) * 500 - 1000;
        var w = 1.0;

        textureArray[i * 4] = x;
        textureArray[i * 4 + 1] = y;
        textureArray[i * 4 + 2] = z;
        textureArray[i * 4 + 3] = w;

    }

    for (var i = inputArray.length * 4; i < textureArray.length; i++) {

        
        textureArray[i] = -1;

    }


    var texture = new THREE.DataTexture(textureArray, textureSize, textureSize, THREE.RGBAFormat, THREE.FloatType);
    texture.needsUpdate = true;

    return texture;

}


function generateZeroedPositionTexture(inputArray, textureSize) {

    var textureArray = new Float32Array(textureSize * textureSize * 4);

    for (var i = 0; i < textureArray.length; i += 4) {

        if (i < inputArray.length * 4) {

            textureArray[i] = 0.0;
            textureArray[i + 1] = 0.0;
            textureArray[i + 2] = 0.0;
            textureArray[i + 3] = 0.0;

        } else {

            
            textureArray[i] = -1.0;
            textureArray[i + 1] = -1.0;
            textureArray[i + 2] = -1.0;
            textureArray[i + 3] = -1.0;

        }

    }

    var texture = new THREE.DataTexture(textureArray, textureSize, textureSize, THREE.RGBAFormat, THREE.FloatType);
    texture.needsUpdate = true;
    
    return texture;

}


function generateVelocityTexture(inputArray, textureSize) {

    var textureArray = new Float32Array(textureSize * textureSize * 4);

    for (var i = 0; i < textureArray.length; i += 4) {

        if (i < inputArray.length * 4) {

            textureArray[i] = 0.0;
            textureArray[i + 1] = 0.0;
            textureArray[i + 2] = 0.0;
            textureArray[i + 3] = 0.0;

        } else {

            
            textureArray[i] = -1.0;
            textureArray[i + 1] = -1.0;
            textureArray[i + 2] = -1.0;
            textureArray[i + 3] = -1.0;

        }

    }

    var texture = new THREE.DataTexture(textureArray, textureSize, textureSize, THREE.RGBAFormat, THREE.FloatType);
    texture.needsUpdate = true;
    
    return texture;

}


function generateNodeAttribTexture(inputArray, textureSize) {

    var textureArray = new Float32Array(textureSize * textureSize * 4);

    for (var i = 0; i < textureArray.length; i += 4) {


        if (i < inputArray.length * 4) {

            textureArray[i] = 200.0;
            textureArray[i + 1] = 0.2;
            textureArray[i + 2] = 0.0;
            textureArray[i + 3] = 0.0;

        } else {

            
            textureArray[i] = -1.0;
            textureArray[i + 1] = -1.0;
            textureArray[i + 2] = -1.0;
            textureArray[i + 3] = -1.0;

        }

    }

    var texture = new THREE.DataTexture(textureArray, textureSize, textureSize, THREE.RGBAFormat, THREE.FloatType);
    texture.needsUpdate = true;
    
    return texture;

}


function generateIndiciesTexture(inputArray, textureSize) {

    var textureArray = new Float32Array(textureSize * textureSize * 4);
    var currentPixel = 0;
    var currentCoord = 0;

    for (var i = 0; i < inputArray.length; i++) {

        

        var startPixel = currentPixel;
        var startCoord = currentCoord;

        for (var j = 0; j < inputArray[i].length; j++) {

            

            currentCoord++;

            if (currentCoord === 4) {

                

                currentPixel++;
                currentCoord = 0;

            }

        }

        
        textureArray[i * 4] = startPixel;
        textureArray[i * 4 + 1] = startCoord;
        textureArray[i * 4 + 2] = currentPixel;
        textureArray[i * 4 + 3] = currentCoord;

    }

    for (var i = inputArray.length * 4; i < textureArray.length; i++) {

        
        textureArray[i] = -1;

    }

    var texture = new THREE.DataTexture(textureArray, textureSize, textureSize, THREE.RGBAFormat, THREE.FloatType);
    texture.needsUpdate = true;
    
    return texture;

}


function generateDataTexture(inputArray, textureSize) {

    var textureArray = new Float32Array(textureSize * textureSize * 4);

    var currentIndex = 0;
    for (var i = 0; i < inputArray.length; i++) {

        for (var j = 0; j < inputArray[i].length; j++) {

            textureArray[currentIndex] = inputArray[i][j];
            currentIndex++;

        }
    }

    for (var i = currentIndex; i < textureArray.length; i++) {

        
        textureArray[i] = -1;

    }

    var texture = new THREE.DataTexture(textureArray, textureSize, textureSize, THREE.RGBAFormat, THREE.FloatType);
    texture.needsUpdate = true;
    
    return texture;

}

function generateEpochDataTexture(inputArray, textureSize) {

    var textureArray = new Float32Array(textureSize * textureSize * 4);
    

    var currentIndex = 0;
    for (var i = 0; i < inputArray.length; i++) {
        
        for (var j = 0; j < inputArray[i].length; j++) {

            
            textureArray[currentIndex] = inputArray[i][j] - epochOffset;
            currentIndex++;

        }
    }

    for (var i = currentIndex; i < textureArray.length; i++) {

        
        textureArray[i] = -1;

    }

    var texture = new THREE.DataTexture(textureArray, textureSize, textureSize, THREE.RGBAFormat, THREE.FloatType);
    texture.needsUpdate = true;
    
    return texture;

}


function indexTextureSize(num) {
    var power = 1;
    while (power * power < num) {
        power *= 2;
    }
    return power / 2 > 1 ? power : 2;

}


function dataTextureSize(num) {

    return indexTextureSize(Math.ceil(num / 4));
}



