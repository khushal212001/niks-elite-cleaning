import qrcode

# Data to encode
data = "https://niks-elite-cleaning.onrender.com/"

# Create QR code instance
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)

# Add data
qr.add_data(data)
qr.make(fit=True)

# Create an image
img = qr.make_image(fill_color="black", back_color="white")

# Save the image
img.save("qrcode_example.png")

print("QR code generated and saved as 'qrcode_example.png'.")
