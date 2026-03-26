"use client";

import { useState } from "react";

export default function PostProperty() {
  const [step, setStep] = useState(1);
  const [propertyType, setPropertyType] = useState("");
  const [images, setImages] = useState([]);

  // Form data
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    city: "",
    location: "",
    type: "",
    price: "",
    area: "",
    bedrooms: "",
    bathrooms: "",
    furnished: "",
    floor: "",
    plotType: "",
    commercialType: "",
    name: "",
    phone: "",
    email: "",
    amenities: [],
  });

  // Input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Amenities toggle
  const handleAmenityChange = (amenity) => {
    setFormData((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity],
    }));
  };

  // IMAGE UPLOAD
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...previews]);
  };

  const removeImage = (index) => {
    const updated = [...images];
    updated.splice(index, 1);
    setImages(updated);
  };

  // VALIDATION PER STEP
  const validateStep = () => {
    switch (step) {
      case 1:
        return formData.title && formData.description && formData.city && formData.location;
      case 2:
        if (!formData.type || !propertyType || !formData.price || !formData.area) return false;
        if (propertyType === "house" && (!formData.bedrooms || !formData.bathrooms || !formData.furnished)) return false;
        if (propertyType === "apartment" && (!formData.bedrooms || !formData.bathrooms || !formData.floor || !formData.furnished)) return false;
        if (propertyType === "plot" && !formData.plotType) return false;
        if (propertyType === "commercial" && (!formData.commercialType || !formData.floor)) return false;
        return true;
      case 3:
        return formData.amenities.length > 0;
      case 4:
        return images.length > 0;
      case 5:
        return formData.name && formData.phone && formData.email;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (!validateStep()) {
      alert("Please fill all required fields before proceeding!");
      return;
    }
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  return (
    <div className="bg-[#F8F9FA] min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#1A2B3C]">List Your Property</h1>
          <p className="text-gray-600 mt-2">Post your property and connect with verified buyers</p>
        </div>

        {/* PROGRESS BAR */}
        <div className="mb-6">
          <p className="text-sm mb-2">Step {step} of 6</p>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div
              className="bg-[#C5A059] h-2 rounded-full transition-all"
              style={{ width: `${(step / 6) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-white p-6 rounded-2xl shadow-md">

          {/* STEP 1 */}
          {step === 1 && (
            <>
              <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Property Title"
                className="w-full mb-3 p-3 border rounded"
              />
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                className="w-full mb-3 p-3 border rounded"
              />
              <input
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="w-full mb-3 p-3 border rounded"
              />
              <input
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
                className="w-full mb-3 p-3 border rounded"
              />
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <h2 className="text-xl font-semibold mb-4">Property Details</h2>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full mb-3 p-3 border rounded"
              >
                <option value="">Type (Sale / Rent)</option>
                <option value="sale">Sale</option>
                <option value="rent">Rent</option>
              </select>

              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full mb-3 p-3 border rounded"
              >
                <option value="">Select Property Type</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="plot">Plot / Land</option>
                <option value="commercial">Commercial</option>
              </select>

              <input
                name="price"
                type="number"
                value={formData.price}
                onChange={handleChange}
                placeholder="Price"
                className="w-full mb-3 p-3 border rounded"
              />
              <input
                name="area"
                type="number"
                value={formData.area}
                onChange={handleChange}
                placeholder="Area (sq ft)"
                className="w-full mb-3 p-3 border rounded"
              />

              {/* DYNAMIC FIELDS */}
              {propertyType === "house" && (
                <>
                  <input
                    name="bedrooms"
                    type="number"
                    value={formData.bedrooms}
                    onChange={handleChange}
                    placeholder="Bedrooms"
                    className="w-full mb-3 p-3 border rounded"
                  />
                  <input
                    name="bathrooms"
                    type="number"
                    value={formData.bathrooms}
                    onChange={handleChange}
                    placeholder="Bathrooms"
                    className="w-full mb-3 p-3 border rounded"
                  />
                  <select
                    name="furnished"
                    value={formData.furnished}
                    onChange={handleChange}
                    className="w-full mb-3 p-3 border rounded"
                  >
                    <option value="">Furnished Status</option>
                    <option value="furnished">Furnished</option>
                    <option value="semi-furnished">Semi-Furnished</option>
                    <option value="unfurnished">Unfurnished</option>
                  </select>
                </>
              )}

              {propertyType === "apartment" && (
                <>
                  <input
                    name="bedrooms"
                    type="number"
                    value={formData.bedrooms}
                    onChange={handleChange}
                    placeholder="Bedrooms"
                    className="w-full mb-3 p-3 border rounded"
                  />
                  <input
                    name="bathrooms"
                    type="number"
                    value={formData.bathrooms}
                    onChange={handleChange}
                    placeholder="Bathrooms"
                    className="w-full mb-3 p-3 border rounded"
                  />
                  <input
                    name="floor"
                    type="number"
                    value={formData.floor}
                    onChange={handleChange}
                    placeholder="Floor Number"
                    className="w-full mb-3 p-3 border rounded"
                  />
                  <select
                    name="furnished"
                    value={formData.furnished}
                    onChange={handleChange}
                    className="w-full mb-3 p-3 border rounded"
                  >
                    <option value="">Furnished Status</option>
                    <option value="furnished">Furnished</option>
                    <option value="semi-furnished">Semi-Furnished</option>
                    <option value="unfurnished">Unfurnished</option>
                  </select>
                </>
              )}

              {propertyType === "plot" && (
                <select
                  name="plotType"
                  value={formData.plotType}
                  onChange={handleChange}
                  className="w-full mb-3 p-3 border rounded"
                >
                  <option value="">Plot Type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                </select>
              )}

              {propertyType === "commercial" && (
                <>
                  <select
                    name="commercialType"
                    value={formData.commercialType}
                    onChange={handleChange}
                    className="w-full mb-3 p-3 border rounded"
                  >
                    <option value="">Commercial Type</option>
                    <option value="office">Office</option>
                    <option value="shop">Shop</option>
                    <option value="warehouse">Warehouse</option>
                  </select>
                  <input
                    name="floor"
                    type="number"
                    value={formData.floor}
                    onChange={handleChange}
                    placeholder="Floors"
                    className="w-full mb-3 p-3 border rounded"
                  />
                </>
              )}
            </>
          )}

          {/* STEP 3 - AMENITIES */}
          {step === 3 && (
            <>
              <h2 className="text-xl font-semibold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 gap-3">
                {["Parking", "Garden", "Security", "Gym"].map((item) => (
                  <label key={item} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formData.amenities.includes(item)}
                      onChange={() => handleAmenityChange(item)}
                    />
                    {item}
                  </label>
                ))}
              </div>
            </>
          )}

          {/* STEP 4 - IMAGE UPLOAD */}
          {step === 4 && (
            <>
              <h2 className="text-xl font-semibold mb-4">Upload Images</h2>
              <label className="border-2 border-dashed p-6 text-center rounded cursor-pointer hover:border-[#C5A059] transition">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <p className="text-gray-500">Click or drag images to upload</p>
              </label>

              <div className="grid grid-cols-3 gap-4 mt-4">
                {images.map((img, index) => (
                  <div key={index} className="relative">
                    <img
                      src={img.url}
                      alt="preview"
                      className="w-full h-32 object-cover rounded"
                    />
                    <button
                      onClick={() => removeImage(index)}
                      className="absolute top-1 right-1 bg-black text-white text-xs px-2 py-1 rounded"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* STEP 5 - CONTACT */}
          {step === 5 && (
            <>
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full mb-3 p-3 border rounded"
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full mb-3 p-3 border rounded"
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full mb-3 p-3 border rounded"
              />
            </>
          )}

          {/* STEP 6 - REVIEW */}
          {step === 6 && (
            <>
              <h2 className="text-xl font-semibold mb-4">Review Your Property</h2>

              <div className="space-y-4 text-sm">

                <div>
                  <h3 className="font-semibold">Basic Info</h3>
                  <p><strong>Title:</strong> {formData.title}</p>
                  <p><strong>Description:</strong> {formData.description}</p>
                  <p><strong>City:</strong> {formData.city}</p>
                  <p><strong>Location:</strong> {formData.location}</p>
                </div>

                <div>
                  <h3 className="font-semibold">Details</h3>
                  <p><strong>Type:</strong> {formData.type}</p>
                  <p><strong>Property Type:</strong> {propertyType}</p>
                  <p><strong>Price:</strong> {formData.price}</p>
                  <p><strong>Area:</strong> {formData.area}</p>
                  {formData.bedrooms && <p><strong>Bedrooms:</strong> {formData.bedrooms}</p>}
                  {formData.bathrooms && <p><strong>Bathrooms:</strong> {formData.bathrooms}</p>}
                  {formData.furnished && <p><strong>Furnished:</strong> {formData.furnished}</p>}
                  {formData.floor && <p><strong>Floor:</strong> {formData.floor}</p>}
                  {formData.plotType && <p><strong>Plot Type:</strong> {formData.plotType}</p>}
                  {formData.commercialType && <p><strong>Commercial Type:</strong> {formData.commercialType}</p>}
                </div>

                <div>
                  <h3 className="font-semibold">Amenities</h3>
                  <p>{formData.amenities.join(", ")}</p>
                </div>

                <div>
                  <h3 className="font-semibold">Contact</h3>
                  <p><strong>Name:</strong> {formData.name}</p>
                  <p><strong>Phone:</strong> {formData.phone}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                </div>

                <div>
                  <h3 className="font-semibold">Images</h3>
                  <div className="grid grid-cols-3 gap-3 mt-2">
                    {images.map((img, index) => (
                      <img key={index} src={img.url} className="h-24 w-full object-cover rounded" />
                    ))}
                  </div>
                </div>

              </div>
            </>
          )}

          {/* BUTTONS */}
          <div className="flex justify-between mt-6">
            {step > 1 && (
              <button onClick={prevStep} className="px-5 py-2 border rounded">Back</button>
            )}

            {step < 6 ? (
              <button
                onClick={nextStep}
                className="ml-auto px-6 py-2 bg-[#1A2B3C] text-white rounded"
              >
                Next
              </button>
            ) : (
              <button className="ml-auto px-6 py-2 bg-[#C5A059] text-white rounded">
                Post Property
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}