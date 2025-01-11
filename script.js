// Set the raw GitHub URL of the image
const imageUrl = "https://raw.githubusercontent.com/Shriram05-GECA/Wallpaper-upgrader/images/wallpaper1.jpeg";

// Get the download button element
const downloadButton = document.getElementById("downloadButton");

// Add a click event listener to the button
downloadButton.addEventListener("click", () => {
    // Create an invisible <a> element to trigger the download
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "downloaded_image.jpg"; // Specify the downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up the element
    alert("Your download is starting!");
});
