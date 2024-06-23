import { useState, useContext } from "react";
import { GenerateIconContext } from "../context/GenerateIconContext";
import { useSession } from "next-auth/react";
import { Slide, toast } from "react-toastify";

const useGenerateIconForm = () => {
  const { generateIcon, setGenerateIcon, setGeneratedIcon, setIsGenerated } =
    useContext(GenerateIconContext);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    prompt: false,
    color: false,
    style: false,
  });

  // Get the session of the current user
  const { data: session } = useSession();

  // Handle the state change of the input fields
  const handleStateChange = (event) => {
    setGenerateIcon({
      ...generateIcon,
      [event.target.name]: event.target.value,
    });
  };

  // Change the current style of the icon
  const changeCurrentStyle = (event) => {
    setGenerateIcon({
      ...generateIcon,
      style: event.target.id,
    });
  };

  // Handle the selection of the color
  const handleSelectColor = (event, classType) => {
    if (generateIcon.color !== classType.color) {
      setGenerateIcon({
        ...generateIcon,
        color: event.target.id,
      });
    }
  };

  const addNumIcons = () => {
    setGenerateIcon((prevGenerateIcon) => ({
      ...prevGenerateIcon,
      numIcons: prevGenerateIcon.numIcons + 1,
    }));
  };

  const subtractNumIcons = () => {
    setGenerateIcon((prevGenerateIcon) => ({
      ...prevGenerateIcon,
      numIcons: Math.max(prevGenerateIcon.numIcons - 1, 1),
    }));
  };

  const validateForm = () => {
    const validationErrors = [];

    if (!generateIcon.prompt.trim()) validationErrors.push("prompt");
    if (!generateIcon.color) validationErrors.push("color");
    if (!generateIcon.style) validationErrors.push("style");

    setErrors({
      prompt: validationErrors.includes("prompt"),
      color: validationErrors.includes("color"),
      style: validationErrors.includes("style"),
    });

    return validationErrors.length === 0;
  };

  const handleGenerateIcon = async () => {
    setErrors({
      prompt: false,
      color: false,
      style: false,
    });

    if (!validateForm()) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(`/api/generate/${session?.user.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(generateIcon),
      });

      if (!response.ok) {
        const errorData = await response.json();
        toast.error(`${errorData.message || "Something went wrong"}`, {
          position: "top-center",
          theme: "colored",
          autoClose: false,
          pauseOnHover: false,
          transition: Slide,
        });
        return;
      }

      const data = await response.json();
      setGeneratedIcon(data);
      setIsGenerated(true);
    } finally {
      setLoading(false);
    }
  };

  return {
    generateIcon,
    errors,
    loading,
    handleStateChange,
    changeCurrentStyle,
    handleSelectColor,
    addNumIcons,
    subtractNumIcons,
    handleGenerateIcon,
  };
};

export default useGenerateIconForm;
