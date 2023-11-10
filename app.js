function showImageAndExplanations() {
    var image = document.getElementById("shapeImage");
    image.style.display = "block";
    var toggleButton = document.getElementById("toggleExplanations");
    toggleButton.style.display = "block"; // Make the button visible
    var explanations = document.getElementById("explanations");
    explanations.classList.add("hidden"); // Hide explanations initially
    toggleButton.textContent = "Show Explanations";
}

function toggleExplanations() {
    const explanations = document.getElementById("explanations");
    const paragraphs = explanations.getElementsByTagName("p");
    const images = explanations.getElementsByTagName("img");

    if (explanations.classList.contains("hidden")) {
        explanations.classList.remove("hidden");
        document.getElementById("toggleExplanations").textContent = "Hide Explanations";

        // Add margin to paragraphs
        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.marginBottom = "10px";
        }

        // Set max width for images
        for (let i = 0; i < images.length; i++) {
            images[i].style.maxWidth = "100%"; // Adjust this value as needed
            images[i].style.height = "auto";
        }
    } else {
        explanations.classList.add("hidden");
        document.getElementById("toggleExplanations").textContent = "Show Explanations";

        // Remove margin from paragraphs
        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.marginBottom = "0";
        }
    }
}

function calculate() {
    const shapeSelect = document.getElementById("shapeSelect");
    const selectedShape = shapeSelect.value;
    const unitSelect = document.getElementById("unitSelect");
    const selectedUnit = unitSelect.value;

    if (selectedShape === "sphere") {
        document.getElementById("shapeImage").innerHTML = '<img src="https://media.geeksforgeeks.org/wp-content/uploads/20201125200917/Surface-300x216.png">';
        const radius = parseFloat(prompt("Enter the radius of the sphere:"));
        if (!isNaN(radius)) {
            const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
            const surfaceArea = 4 * Math.PI * Math.pow(radius, 2);

            document.getElementById("volume").textContent = `Volume: ${volume.toFixed(2)} ${selectedUnit}³`;
            document.getElementById("surfaceArea").textContent = `Surface Area: ${surfaceArea.toFixed(2)} ${selectedUnit}²`;

            const explanations = `
                <p><strong>Origin of the formula:</strong></p>
                <p><strong>Volume:</strong></p>
                <p>The formula for the volume of a sphere is V = (4/3)πr³, where 'r' is the radius. We can use the idea of summation/integration to prove this formula. We can first start by slicing the sphere into infinite small disks. The thickness of each of these rings will be denoted as dy:</p>
                <p><img src="https://cdn1.byjus.com/wp-content/uploads/2020/07/derivation-of-volume-of-sphere.png"></p>
                <p>Here, we notice that along the radius of one of those rings, linking it to the centroid of the sphere, and linking it back to the center of that ring, we create a right angled triangle. Using the pythagoreon theorem, we know that x²+y²=r², where r is the radius of the sphere. (Using the image denotation might cause confusion). It is also known that x²=r²-y².</p>
                <p>This becomes π∫(r²-y²)dy from r=0 to r=r, which is basically the north pole.</p>
                <p>But what we also notice is that this is only half a sphere, as there is also a negative side which a negative value of r. But this is not hard to deal with, as we can simply just multiply our integration result by 2.</p>
                <p>The definite integral of that expression will be (4/3)πr³.</p>
                <p>Essentially, we are just stacking up x height piles of rings, with thickiness of dy.</p>
                <p><strong>Surface area:</strong></p>
                <p>The formula for the surface area of a sphere is SA = 4πr², where 'r' is the radius. Since there isn't a flat surface, we can use summation/integration to prove this formula. We utilize the same idea of slicing two circular rings out, where in projection space, one starts at D, ends at C, and the other starts at E, ends at B, like this:</p>
                <p><img src="sphere_surface_area.png"></p>
                <p>To find surface area of this hemmisphere with radius R:</p>
                <p>Let O be centroid of the sphere where OA=R</p>
                <p>Consider the shaded area the two circular strips the volume of a cylinder with an infinitely small thickness, with no top or bottom. Since CB is so small, we can consider it perpendicular to BF (The F is that red line that traverses EB).</p>
                <p>Let us now find the radius of this cylinder or circular strip BCDE.
                <p>From the right angle triangle OBF, we have angle OBF = Θ</p>
                <p>So BF = RCosΘ.</p>
                <p>We know that the surface area of a cylinder is (2)(π)(r)(h)</p>
                <p>Here r = BF = RCosΘ</p>
                <p>Let us find h = CB.</p>
                <p>Consider the triangle OBC.</p>
                <p>Let the angle BOC = dΘ.</p>
                <p.Since CB is very small we can consider CB as perpendicular to OB.</p>
                <p>So OBC is a right angled triangle.</p>
                <p>Also OC = R.</p>
                <p>So BC = RSin(dΘ)</p></p>
                <p>So the surface area of the cylinder of circular strip BCDE is (2)(π)(RCosΘ)(RSin(dΘ))</p>
                <p>We know that when angle(dΘ) is very small , we have Sin(dΘ) = dΘ. So this small area dA becomes (2)(π)(RCosΘ)(RdΘ) = (2)(π)(R³)(CosΘ)(dΘ)</p>
                <p>Now to cover the full surface area of the half of the sphere we have to vary Θ from 0 to pi/2. So,</p>
                <p><img src="sphere_integrals.png"></p>
                <p>This is only half a sphere, so we multiply by 2 to get SA = 4πr²</p>
            `;
            document.getElementById("explanations").innerHTML = explanations;
        } else {
            document.getElementById("result").innerHTML = "<p>Please enter a valid radius.</p>";
        }
    } else if (selectedShape === "cube") {
        document.getElementById("shapeImage").innerHTML = '<img src="https://i.ytimg.com/vi/rqAH-E_dR0w/maxresdefault.jpg">';
        const sideLength = parseFloat(prompt("Enter the side length of the cube:"));
        if (!isNaN(sideLength)) {
            const volume = Math.pow(sideLength, 3);
            const surfaceArea = 6 * Math.pow(sideLength, 2);

            document.getElementById("volume").textContent = `Volume: ${volume.toFixed(2)} ${selectedUnit}³`;
            document.getElementById("surfaceArea").textContent = `Surface Area: ${surfaceArea.toFixed(2)} ${selectedUnit}²`;

            const explanations = `
                <p><strong>Origin of the formula:</strong></p>
                <p><strong>Volume:</strong></p>
                <img src="https://www.math.net/img/a/geometry/volume-and-surface-area/volume-of-a-cube/cubic-of-5-volume.png">
                <p>The formula for volume of a cube is V = a³, where 'a' is the length of a side. We can understand it by noticing how many cubic units of cubes can fit inside the cube. We notice that we can fit all cubic units along one side (a) and another side (a) to get a flat square. But we can stack it above each another 'a' times, which leaves us with (a)(a)(a)=a³</p>
                <p><strong>Surface area:</strong></p>
                <p>This is the net of a cube:</p>
                <img src="https://yourmaths.files.wordpress.com/2013/07/cube2a.jpg">
                <p>The formula for surface area of a cube is SA = 6a², where 'a' is the length of a side. It is basically the sum of the areas of all six faces, which are all squares (since all of its sides are 'a'). From the picture above, it is obvious that we see six congruent squares with side lengths a, that form the cube. The area of each square is a². Since we have 6, it becomes 6a².</p>
            `;
            document.getElementById("explanations").innerHTML = explanations;
        } else {
            document.getElementById("result").innerHTML = "<p>Please enter a valid side length.</p>";
        }
    } else if (selectedShape === "cylinder") {
        document.getElementById("shapeImage").innerHTML = '<img src="https://www.w3resource.com/w3r_images/python-math-image-exercise-5.svg">';
        const radius = parseFloat(prompt("Enter the radius of the cylinder:"));
        const height = parseFloat(prompt("Enter the height of the cylinder:"));
        if (!isNaN(radius) && !isNaN(height)) {
            const volume = Math.PI * Math.pow(radius, 2) * height;
            const surfaceArea = 2 * Math.PI * radius * (radius + height);

            document.getElementById("volume").textContent = `Volume: ${volume.toFixed(2)} ${selectedUnit}³`;
            document.getElementById("surfaceArea").textContent = `Surface Area: ${surfaceArea.toFixed(2)} ${selectedUnit}²`;

            const explanations = `
                <p><strong>Origin of the formula:</strong></p>
                <p><strong>Volume:</strong></p>
                <img src="https://www.ontrack-media.net/geometry/gm4l10image5.jpg"> 
                <p>The formula for the volume of a cylinder is V = πr²h, where 'r' is the radius and 'h' is the height.</p>
                <p>For the volume, we can imagine a cylinder stacked circles with infinitely small heights. Because we notice that a cylinder is practically many circles stacked on top of each other, we just need to find out how many times we do this, which is h times (h for height). Therefore the volume of a cylinder is V =  πr²h.
                <p><strong>Surface area:</strong></p>
                <p>The formula for the surface area of a cylinder is SA = 2πr(r + h), where 'r' is the radius and 'h' is the height.</p>
                <p>When we take apart the components of a cylinder, we get two circles and a rectangle, like this:</p>
                <img src="https://images.nagwa.com/figures/explainers/956104172478/4.svg">
                <p>Here, we notice that the width of the rectangle is equivalent to the circumference of the circle, and the length equivalent to the height of the cylinder. This becomes SA = 2πr²+2πr(h) which essentially becomes SA = 2πr(r+h).</p>
            `;
            document.getElementById("explanations").innerHTML = explanations;
        } else {
            document.getElementById("result").innerHTML = "<p>Please enter valid values for the radius and height.</p>";
        }
    } else if (selectedShape === "pyramid") {
        document.getElementById("shapeImage").innerHTML = '<img src="https://www.thoughtco.com/thmb/mBeg55LPVNx8yao64hn…icc()/surface-area-5-589ddb0a3df78c47588abad2.jpg">';
        const baseLength = parseFloat(prompt("Enter the base length of the pyramid:"));
        const height = parseFloat(prompt("Enter the height of the pyramid:"));
        if (!isNaN(baseLength) && !isNaN(height)) {
            const volume = (1/3) * Math.pow(baseLength, 2) * height;
            const surfaceArea = baseLength * baseLength + 2 * baseLength * Math.sqrt(Math.pow(baseLength/2, 2) + Math.pow(height, 2));

            document.getElementById("volume").textContent = `Volume: ${volume.toFixed(2)} ${selectedUnit}³`;
            document.getElementById("surfaceArea").textContent = `Surface Area: ${surfaceArea.toFixed(2)} ${selectedUnit}²`;

            const explanations = `
                <p><strong>Origin of the formula:</strong></p>
                <p><strong>Volume:</strong></p>
                <p>The formula for the volume of a pyramid is V = (1/3)Bh, where 'B' is the base area and 'h' is the height. We can visualize this as a rectangular prism with a multiple lines that exit out of it's centroid to each of it's vertices like this, where each pyramid has a base of one of the faces of the rectangular prism:</p>
                <p><img src="prism_demo.png"></p>
                <p>Here, we see that the height of the pyramid is half the width of the prism. That means that when the height of the pyramid is half the width of the prism, the volume is six times less than the volume of the prism. Since we want to find the volume of the pyramid when they have equivalent heights, that would simply be 1/3 of the prism. so V = (1/3)BH.</p>
                <p><strong>Surface area:</strong></p>
                <p>The formula for the surface area of a pyramid is SA = lw+l√((w/2)²+h²)+w√((l/2)²+h²), where l, w and h are base length, base width and pyramid height respectively. When we divide the componenets of the pyramid, we get a rectangle and four triangles:</p>
                <img src="https://homework.study.com/cimages/multimages/16/image14460765686537716010.png">
                <p>We notice that the height of each triangle is √((w/2)²+h²) (pythagoras). By adding all these areas up, we get SA = lw+l√((w/2)²+h²)+w√((l/2)²+h²</p>
            `;
            document.getElementById("explanations").innerHTML = explanations;
        } else {
            document.getElementById("result").innerHTML = "<p>Please enter valid values for the base length and height.</p>";
        }
    } else if (selectedShape === "cone") {
        document.getElementById("shapeImage").innerHTML = '<img src="https://undergroundmathematics.org/chain-rule/r7115/images/s1.png">';
        const radius = parseFloat(prompt("Enter the radius of the cone:"));
        const height = parseFloat(prompt("Enter the height of the cone:"));
        if (!isNaN(radius) && !isNaN(height)) {
            const volume = (1/3) * Math.PI * Math.pow(radius, 2) * height;
            const surfaceArea = Math.PI * radius * (radius + Math.sqrt(Math.pow(height, 2) + Math.pow(radius, 2)));

            document.getElementById("volume").textContent = `Volume: ${volume.toFixed(2)} ${selectedUnit}³`;
            document.getElementById("surfaceArea").textContent = `Surface Area: ${surfaceArea.toFixed(2)} ${selectedUnit}²`;

            const explanations = `
                <p><strong>Origin of the formula:</strong></p>
                <p><strong>Volume:</strong></p>
                <p>The formula for the volume of a cone is V = (1/3)πr²h, where 'r' is the radius and 'h' is the height. Consider the following drawing:</p>
                <p><img src="cone_surface_area.png"></p>
                <p>Assume a cone composed of infinite circular rings of decreasing (r) stacked. Their thickness can be an infinitely small differential element, say (dx).
                <p>This circle from distance x from base will have an area of [πr^2(h-x)^2]/h^2</p>
                <p>Therefore, the volume of an this infinitesimally circle will be {[πr^2(h-x)^2]/h^2}dx</p>
                <p>Adding volumes of all these strips from x=0 to x=h will require integration (Adding all parts), where we do an integral to {[πr^2(h-x)^2]/h^2}dx</p>
                <p>As we input in a calculator, the definite integral of {[πr^2(h-x)^2]/h^2}dx will be equivalent to (πr^2h)/3</p>
                <p><strong>Surface area:</strong></p>
                <p>The formula for the surface area of a cone is SA = πr(r + √(r² + h²)), where 'r' is the radius and 'h' is the height.</p>
                <p>Consider a right circular cone with radius r and slant height l.</p>
                <img src="https://cdn1.byjus.com/wp-content/uploads/2020/03/Surface-Area-Of-A-Cone-2.png">
                <p>The lateral surface of the cone can be visualized as a sector of a circle that, when unrolled, forms a sector with an arc length equal to the circumference of the base and a radius equal to the slant height of the cone.</p>
                <p>The cicumference of the base of the cone is the same as the circumference of the circle with radius r, given by 2πr.</p>
                <p>The arc length of the sector forming the lateral surface of the cone is equal to the circumference of the ase, which is 2πr.</p>
                <p>So, the lateral surface area of the cone is the area of this unrolled sector, which is equal to the circumference of the base multiplied by the slant height l:</p>
                <p>Lateral Surface Area of cone=πrl, where r is the radius of the base of the cone, and l is the slant height of the cone.</p>
                <p>the total surface area of the cone would include the base, which is circle with area of πr², so the formula becomes πrl+πr²</p>
                <p>Since slant l is practically √(r² + h²), we can substitute it. After factoring, the expression becomes SA = πr(r + √(r² + h²)).</p>
            `;
            document.getElementById("explanations").innerHTML = explanations;
        } else {
            document.getElementById("result").innerHTML = "<p>Please enter valid values for the radius and height.</p>";
        }
    }
    // Calculate and display the results
    // You'll need to implement the calculations for each shape and update the "result" div.
}