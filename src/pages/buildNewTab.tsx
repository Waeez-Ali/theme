
import { useState } from "react";
import { browsers } from "@/data/themes";
import SteperOne from "@/components/buildaNewTab/stepOne";
import SteperTwo from "@/components/buildaNewTab/stepTwo";
import SteperThree from "@/components/buildaNewTab/stepThree";
import Steper from "@/components/buildaNewTab/steper";
import StepFour from "@/components/buildaNewTab/stepFour";
import LoadingModal from "@/components/buildaNewTab/loadingModal";

const BuildNewTab = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [tabData, setTabData] = useState({
    selectedBrowser: null as string | null,
    wallpapers: [] as File[],
    appIcon: null as string | null,
    cropType: "original" as "original" | "rounded" | "circle",
    title: "",
    description: ""
  });

  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    if (currentStep === 1 && tabData.selectedBrowser) {
      setCurrentStep(2);
    } else if (currentStep === 2 && tabData.wallpapers.length > 0) {
      setCurrentStep(3);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const isStepEnabled = (step: number) => {
    if (step === 1) return true;
    if (step === 2) return tabData.selectedBrowser !== null;
    if (step === 3) return tabData.wallpapers.length > 0;
    return false;
  };

  const handleSubmit = async () => {
    try {
      const wallpapersBase64 = await Promise.all(
        tabData.wallpapers.map(
          file =>
            new Promise<string>((resolve, reject) => {
              const reader = new FileReader();
              reader.onload = () => resolve(reader.result as string);
              reader.onerror = reject;
              reader.readAsDataURL(file);
            })
        )
      );

      const newEntry = {
        id: Date.now(),
        ...tabData,
        wallpapers: wallpapersBase64
      };

      const existingData = localStorage.getItem("newTabData");
      const parsed = existingData ? JSON.parse(existingData) : [];
      const updated = Array.isArray(parsed) ? [...parsed, newEntry] : [parsed, newEntry];

      localStorage.setItem("newTabData", JSON.stringify(updated));

      // 🔥 SHOW LOADING
      setLoading(true);

      // 🔥 AFTER 5 SEC → STEP 4
      setTimeout(() => {
        setLoading(false);
        setCurrentStep(4);
      }, 5000);

    } catch (err) {
      console.error(err);
      alert("Save failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="w-full">

        {currentStep === 1 && (
          <SteperOne
            browsers={browsers}
            selectedBrowser={tabData.selectedBrowser}
            setSelectedBrowser={(browser) =>
              setTabData({ ...tabData, selectedBrowser: browser })
            }
          />
        )}

        {currentStep === 2 && (
          <SteperTwo
            wallpaper={tabData.wallpapers}
            setWallpaper={(files) =>
              setTabData({ ...tabData, wallpapers: files })
            }
            handleNext={handleNext}
          />
        )}

        {currentStep === 3 && (
          <SteperThree
            selectedBrowser={tabData.selectedBrowser}
            wallpaper={tabData.wallpapers}
            appIcon={tabData.appIcon}
            setAppIcon={(icon) =>
              setTabData({ ...tabData, appIcon: icon })
            }
            cropType={tabData.cropType}
            setCropType={(type) =>
              setTabData({ ...tabData, cropType: type })
            }
            title={tabData.title}
            setTitle={(title) =>
              setTabData({ ...tabData, title })
            }
            description={tabData.description}
            setDescription={(desc) =>
              setTabData({ ...tabData, description: desc })
            }
            handleSubmit={handleSubmit}
            loading={loading}
            setLoading={setLoading}
          />
        )}

        {currentStep === 4 && <StepFour />}

        {currentStep !== 4 && (
          <Steper
            handleBack={handleBack}
            handleNext={handleNext}
            currentStep={currentStep}
            isStepEnabled={isStepEnabled}
          />
        )}

        {/* 🔥 GLOBAL LOADING MODAL */}
        {loading && <LoadingModal />}

      </div>
    </div>
  );
};

export default BuildNewTab;
