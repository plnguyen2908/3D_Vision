const courses = [
  {
    "id": "mit",
    "name": "MIT 6.801 · Machine Vision",
    "desc": "Fall 2020 · Berthold Horn · Complete published notes, five homework sets, and quiz resources.",
    "url": "https://ocw.mit.edu/courses/6-801-machine-vision-fall-2020/",
    "items": [
      {
        "url": "https://ocw.mit.edu/courses/6-801-machine-vision-fall-2020/resources/mit6_801f20_lecturenotes/",
        "title": "lecture notes as one file (PDF - 3.5MB)",
        "type": "Notes"
      },
      {
        "url": "https://ocw.mit.edu/courses/6-801-machine-vision-fall-2020/resources/mit6_801f20_lec2/",
        "title": "Lecture 2: Image Formation, Perspective Projection, Time Derivative, Motion Field (PDF)",
        "type": "Notes"
      },
      {
        "url": "https://ocw.mit.edu/courses/6-801-machine-vision-fall-2020/resources/mit6_801f20_lec3/",
        "title": "Lecture 3: Time to Contact, Focus of Expansion, Direct Motion Vision Methods, Noise Gain (PDF)",
        "type": "Notes"
      },
      {
        "url": "https://ocw.mit.edu/courses/6-801-machine-vision-fall-2020/resources/mit6_801f20_lec4/",
        "title": "Lecture 4: Fixed Optical Flow, Optical Mouse, Constant Brightness Assumption, Closed Form Solution (PDF)",
        "type": "Notes"
      },
      {
        "url": "https://ocw.mit.edu/courses/6-801-machine-vision-fall-2020/resources/mit6_801f20_lec5/",
        "title": "Lecture 5: TTC and FOR MontiVision Demos, Vanishing Point, Use of VPs in Camera Calibration (PDF)",
        "type": "Notes"
      },
      {
        "url": "https://ocw.mit.edu/courses/6-801-machine-vision-fall-2020/resources/mit6_801f20_lec6/",
        "title": "Lecture 6: Photometric Stereo, Noise Gain, Error Amplification, Eigenvalues and Eigenvectors Review (PDF)",
        "type": "Notes"
      },
      {
        "url": "https://ocw.mit.edu/courses/6-801-machine-vision-fall-2020/resources/mit6_801f20_lec7/",
        "title": "Lecture 7: Gradient Space, Reflectance Map, Image Irradiance Equation, Gnomonic Projection (PDF)",
        "type": "Notes"
      },
      {
        "url": "https://ocw.mit.edu/courses/6-801-machine-vision-fall-2020/resources/mit6_801f20_lec8/",
        "title": "Lecture 8: Shape from Shading, Special Cases, Lunar Surface, Scanning Electron Microscope, Green’s Theorem in Photometric Stereo (PDF)",
        "type": "Notes"
      },
      {
        "url": "https://ocw.mit.edu/courses/6-801-machine-vision-fall-2020/resources/mit6_801f20_lec9/",
        "title": "Lecture 9: Shape from Shading, General Case - From First Order Nonlinear PDE to Five ODEs (PDF)",
        "type": "Notes"
      },
      {
        "url": "https://ocw.mit.edu/courses/6-801-machine-vision-fall-2020/resources/mit6_801f20_lec10/",
        "title": "Lecture 10: Characteristic Strip Expansion, Shape from Shading, Iterative Solutions (PDF)",
        "type": "Notes"
      },
      {
        "url": "https://ocw.mit.edu/courses/6-801-machine-vision-fall-2020/resources/mit6_801f20_lec11/",
        "title": "Lecture 11: Edge Detection, Subpixel Position, CORDIC, Line Detection (US 6,408,109) (PDF)",
        "type": "Notes"
      },
      {
        "url": "https://ocw.mit.edu/courses/6-801-machine-vision-fall-2020/resources/mit6_801f20_lec12/",
        "title": "Lecture 12: Blob Analysis, Binary Image Processing, Use of Green’s Theorem, Derivative and Integral as Convolutions (PDF)",
        "type": "Notes"
      },
      {
        "url": "https://ocw.mit.edu/courses/6-801-machine-vision-fall-2020/resources/mit6_801f20_lec13/",
        "title": "Lecture 13: Object Detection, Recognition and Pose Determination, PatQuick (US 7,016,539) (PDF)",
        "type": "Notes"
      },
      {
        "url": "https://ocw.mit.edu/courses/6-801-machine-vision-fall-2020/resources/mit6_801f20_lec14/",
        "title": "Lecture 14: Inspection in PatQuick, Hough Transform, Homography, Position Determination, Multi-Scale (PDF)",
        "type": "Notes"
      },
      {
        "url": "https://ocw.mit.edu/courses/6-801-machine-vision-fall-2020/resources/mit6_801f20_lec15/",
        "title": "Lecture 15: Alignment, Recognition in PatMax, Distance Field, Filtering and Sub-Sampling (US 7,065,262) (PDF)",
        "type": "Notes"
      },
      {
        "url": "https://ocw.mit.edu/courses/6-801-machine-vision-fall-2020/resources/mit6_801f20_lec16/",
        "title": "Lecture 16: Fast Convolution, Low Pass Filter Approximations, Integral Images (US 6,457,032) (PDF)",
        "type": "Notes"
      },
      {
        "url": "https://ocw.mit.edu/courses/6-801-machine-vision-fall-2020/resources/mit6_801f20_lec17/",
        "title": "Lecture 17: Photogrammetry, Orientation, Axes of Inertia, Symmetry, Absolute, Relative, Interior, and Exterior Orientation (PDF)",
        "type": "Notes"
      },
      {
        "url": "https://ocw.mit.edu/courses/6-801-machine-vision-fall-2020/resources/mit6_801f20_lec18/",
        "title": "Lecture 18: Rotation and How to Represent It, Unit Quaternions, the Space of Rotations (PDF)",
        "type": "Notes"
      },
      {
        "url": "https://ocw.mit.edu/courses/6-801-machine-vision-fall-2020/resources/mit6_801f20_lec19/",
        "title": "Lecture 19: Absolute Orientation in Closed Form, Outliers and Robustness, RANSAC (PDF)",
        "type": "Notes"
      },
      {
        "url": "https://ocw.mit.edu/courses/6-801-machine-vision-fall-2020/resources/mit6_801f20_lec20/",
        "title": "Lecture 20: Space of Rotations, Regular Tessellations, Critical Surfaces in Motion Vision and Binocular Stereo (PDF)",
        "type": "Notes"
      },
      {
        "url": "https://ocw.mit.edu/courses/6-801-machine-vision-fall-2020/resources/mit6_801f20_lec21/",
        "title": "Lecture 21: Relative Orientation, Binocular Stereo, Structure from Motion, Quadrics, Camera Calibration, Reprojection (PDF)",
        "type": "Notes"
      },
      {
        "url": "https://ocw.mit.edu/courses/6-801-machine-vision-fall-2020/resources/mit6_801f20_lec22/",
        "title": "Lecture 22: Exterior Orientation, Recovering Position and Orientation, Bundle Adjustment, Object Shape (PDF)",
        "type": "Notes"
      },
      {
        "url": "https://ocw.mit.edu/courses/6-801-machine-vision-fall-2020/resources/mit6_801f20_lec23/",
        "title": "Lecture 23: Gaussian Image and Extended Gaussian Image, Solids of Revolution, Direction Histograms, Regular Polyhedra (PDF)",
        "type": "Notes"
      },
      {
        "url": "https://ocw.mit.edu/courses/6-801-machine-vision-fall-2020/resources/mit6_801f20_hw1/",
        "title": "Homework 1 (PDF)",
        "type": "Practice"
      },
      {
        "url": "https://ocw.mit.edu/courses/6-801-machine-vision-fall-2020/resources/mit6_801f20_hw2/",
        "title": "Homework 2 (PDF)",
        "type": "Practice"
      },
      {
        "url": "https://ocw.mit.edu/courses/6-801-machine-vision-fall-2020/resources/mit6_801f20_hw3/",
        "title": "Homework 3 (PDF)",
        "type": "Practice"
      },
      {
        "url": "https://ocw.mit.edu/courses/6-801-machine-vision-fall-2020/resources/mit6_801f20_hw4/",
        "title": "Homework 4 (PDF)",
        "type": "Practice"
      },
      {
        "url": "https://ocw.mit.edu/courses/6-801-machine-vision-fall-2020/resources/mit6_801f20_hw5/",
        "title": "Homework 5 (PDF)",
        "type": "Practice"
      },
      {
        "url": "https://ocw.mit.edu/courses/6-801-machine-vision-fall-2020/resources/mit6_801f20_review1/",
        "title": "Quiz 1 Review (PDF)",
        "type": "Practice"
      },
      {
        "url": "https://ocw.mit.edu/courses/6-801-machine-vision-fall-2020/resources/mit6_801f20_review2/",
        "title": "Quiz 2 Review (PDF)",
        "type": "Practice"
      },
      {
        "url": "https://ocw.mit.edu/courses/6-801-machine-vision-fall-2020/resources/mit6_801f20_q1/",
        "title": "Take-Home Quiz 1 (PDF)",
        "type": "Practice"
      },
      {
        "url": "https://ocw.mit.edu/courses/6-801-machine-vision-fall-2020/resources/mit6_801f20_q2/",
        "title": "Take-Home Quiz 2 (PDF)",
        "type": "Practice"
      }
    ]
  },
  {
    "id": "stanford",
    "name": "Stanford CS231A · Geometry & Reconstruction",
    "desc": "Spring 2025 · Course notes, lecture slides, section reviews, and problem sets from the official syllabus.",
    "url": "https://web.stanford.edu/class/cs231a/",
    "items": [
      {
        "url": "https://web.stanford.edu/class/cs231a/course_notes/01-camera-models.pdf",
        "title": "Course Notes 1: Camera Models",
        "type": "Notes"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/course_notes/02-single-view-metrology.pdf",
        "title": "Course Notes 2: Single View Metrology",
        "type": "Notes"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/course_notes/03-epipolar-geometry.pdf",
        "title": "Course Notes 3: Epipolar Geometry",
        "type": "Notes"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/course_notes/Course_Notes_4.pdf",
        "title": "Course Notes 4: Stereo Systems",
        "type": "Notes"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/course_notes/05-active-volumetric-stereo.pdf",
        "title": "Course Notes 5: Active and Volumetric Stereo",
        "type": "Notes"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/course_notes/06-fitting-matching.pdf",
        "title": "Course Notes 6: Fitting and Matching",
        "type": "Notes"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/course_notes/07-representation-learning.pdf",
        "title": "Course Notes 7: Representations and Representation Learning",
        "type": "Notes"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/course_notes/08-monocular_depth_estimation.pdf",
        "title": "Course Notes 8: Monocular Depth Estimation and Feature Tracking",
        "type": "Notes"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/course_notes/09-optical-flow.pdf",
        "title": "Course Notes 9: Optical and Scene Flow",
        "type": "Notes"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/course_notes/10-optimal-estimation.pdf",
        "title": "Course Notes 10: Optimal Estimation",
        "type": "Notes"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/lectures_2025/lecture1_introduction_2025.pdf",
        "title": "lecture1 introduction 2025",
        "type": "Notes"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/hw_2025_spring/ps0.pdf",
        "title": "ps0",
        "type": "Practice"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/hw_2025_spring/ps0_code.zip",
        "title": "ps0 code.zip",
        "type": "Practice"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/hw_2025_spring/ps0_template.zip",
        "title": "ps0 template.zip",
        "type": "Practice"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/lectures_2025/lecture2_camera_models.pdf",
        "title": "lecture2 camera models",
        "type": "Notes"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/hw_2025_spring/ps1.pdf",
        "title": "ps1",
        "type": "Practice"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/hw_2025_spring/ps1_code.zip",
        "title": "ps1 code.zip",
        "type": "Practice"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/hw_2025_spring/ps1_template.zip",
        "title": "ps1 template.zip",
        "type": "Practice"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/section/section1.pdf",
        "title": "section1",
        "type": "Review"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/lectures_2025/lecture3_camera_calibration.pdf",
        "title": "lecture3 camera calibration",
        "type": "Notes"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/lectures_2025/lecture4_single_view_metrology_2025.pdf",
        "title": "lecture4 single view metrology 2025",
        "type": "Notes"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/section/section2.pdf",
        "title": "section2",
        "type": "Review"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/lectures_2025/lecture5_epipolar_geometry.pdf",
        "title": "lecture5 epipolar geometry",
        "type": "Notes"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/lectures_2025/lecture6_stereo_systems_Flatten.pdf",
        "title": "lecture6 stereo systems Flatten",
        "type": "Notes"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/section/section3.pdf",
        "title": "section3",
        "type": "Review"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/hw_2025_spring/ps2.pdf",
        "title": "ps2",
        "type": "Practice"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/hw_2025_spring/ps2_code.zip",
        "title": "ps2 code.zip",
        "type": "Practice"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/hw_2025_spring/ps2_template_2025.zip",
        "title": "ps2 template 2025.zip",
        "type": "Practice"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/lectures_2025/lecture7_SFM_silvio_2025.pdf",
        "title": "lecture7 SFM silvio 2025",
        "type": "Notes"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/lectures_2025/lecture8_volumetric_stereo_2025.pdf",
        "title": "lecture8 volumetric stereo 2025",
        "type": "Notes"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/section/section4.pdf",
        "title": "section4",
        "type": "Review"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/lectures_2025/lecture9_fitting_matching_2024.pdf",
        "title": "lecture9 fitting matching 2024",
        "type": "Notes"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/lectures_2025/Lecture10_LowLevelRepresentations.pdf",
        "title": "Lecture10 LowLevelRepresentations",
        "type": "Notes"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/section/section5.pdf",
        "title": "section5",
        "type": "Review"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/hw_2025_spring/ps3.pdf",
        "title": "ps3",
        "type": "Practice"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/hw_2025_spring/ps3_code.zip",
        "title": "ps3 code.zip",
        "type": "Practice"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/hw_2025_spring/ps3_template.zip",
        "title": "ps3 template.zip",
        "type": "Practice"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/lectures_2025/Lecture11_UsingRepresentationLearning.pdf",
        "title": "Lecture11 UsingRepresentationLearning",
        "type": "Notes"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/section/section6.pdf",
        "title": "section6",
        "type": "Review"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/lectures_2025/Lecture12_Flow.pdf",
        "title": "Lecture12 Flow",
        "type": "Notes"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/section/section7.pdf",
        "title": "section7",
        "type": "Review"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/lectures_2025/Lecture13_OptimalEstimation.pdf",
        "title": "Lecture13 OptimalEstimation",
        "type": "Notes"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/hw_2025_spring/ps4.pdf",
        "title": "ps4",
        "type": "Practice"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/hw_2025_spring/ps4_code.zip",
        "title": "ps4 code.zip",
        "type": "Practice"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/hw_2025_spring/ps4_template.zip",
        "title": "ps4 template.zip",
        "type": "Practice"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/lectures/lecture15_optimal_estimation_cont.pdf",
        "title": "lecture15 optimal estimation cont",
        "type": "Notes"
      },
      {
        "url": "https://people.csail.mit.edu/cchoi/pub/Choi13iros_gputracking.pdf",
        "title": "Choi13iros gputracking",
        "type": "Notes"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/section/section8.pdf",
        "title": "section8",
        "type": "Review"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/lectures_2025/Lecture16_NeuralRadianceFields.pdf",
        "title": "Lecture16 NeuralRadianceFields",
        "type": "Notes"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/section/section9.pdf",
        "title": "section9",
        "type": "Review"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/lectures_2025/Lecture17_GaussianSplatting.pdf",
        "title": "Lecture17 GaussianSplatting",
        "type": "Notes"
      },
      {
        "url": "https://web.stanford.edu/class/cs231a/lectures_2025/2025.06.04%20-%20GuestLecture_stanfordcs231a_.pdf",
        "title": "2025.06.04%20-%20GuestLecture stanfordcs231a ",
        "type": "Notes"
      }
    ]
  },
  {
    "id": "mitInverse",
    "name": "MIT 6.S980 · Machine Learning for Inverse Graphics",
    "desc": "Fall 2023 · Vincent Sitzmann · Published lecture recordings, slides, and assignment links. Some external materials may require access from their host.",
    "url": "https://www.scenerepresentations.org/courses/2023/fall/inverse-graphics",
    "items": [
      {
        "url": "https://mit.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b5184f97-b27e-426b-9cb9-b076011efd6a",
        "title": "Introduction · Recording",
        "type": "Video"
      },
      {
        "url": "https://drive.google.com/file/d/1frI1_zUHX7vwQ5AyiC0j97Alr7p4T2g_/view?usp=sharing",
        "title": "Introduction · Slides",
        "type": "Slides"
      },
      {
        "url": "https://mit.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=61e27e21-9a1f-4efb-9fc8-b079018a34be",
        "title": "Image Formation · Recording",
        "type": "Video"
      },
      {
        "url": "https://drive.google.com/file/d/1tFLd5RBrynHvgWc6yhBqc2nm1CXDY4PV/view?usp=sharing",
        "title": "Image Formation · Slides",
        "type": "Slides"
      },
      {
        "url": "https://drive.google.com/drive/folders/1wqiGhWCAEY6GfXN9FcagGzW39HBSiKhz?usp=sharing",
        "title": "Image Formation · Assignment 1 Released",
        "type": "Practice"
      },
      {
        "url": "https://mit.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=293c80f2-7dc1-4f31-a8b6-b079018a3fd8",
        "title": "Multi-View Geometry · Recording",
        "type": "Video"
      },
      {
        "url": "https://drive.google.com/file/d/1RSvS073klsae92Oc2-kyCYFsKdD42w-b/view?usp=sharing",
        "title": "Multi-View Geometry · Slides",
        "type": "Slides"
      },
      {
        "url": "https://mit.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a6ac39af-6e09-4d68-b801-b080008ab892",
        "title": "Scene Representations I: 2.5D and Monocular Depth Prediction · Recording",
        "type": "Video"
      },
      {
        "url": "https://drive.google.com/file/d/1TYVJI_ieZeE9XVQTNznJzcVq0LncFflq/view?usp=drive_link",
        "title": "Scene Representations I: 2.5D and Monocular Depth Prediction · Slides",
        "type": "Slides"
      },
      {
        "url": "https://mit.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=144f2d4f-0f6c-4f2c-8ecf-b087008bfeb1",
        "title": "Scene Representations II: Surface Representations and Discrete Field Representations · Recording",
        "type": "Video"
      },
      {
        "url": "https://drive.google.com/file/d/11MtEMohgagUfKkdkYqwzR1KPJzzXQcfU/view?usp=sharing",
        "title": "Scene Representations II: Surface Representations and Discrete Field Representations · Slides",
        "type": "Slides"
      },
      {
        "url": "https://mit.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=1c88fb85-5344-4531-92fa-b087008c07c9",
        "title": "Scene Representations III: Neural Fields and Hybrid Discrete-Neural Field Representations · Recording",
        "type": "Video"
      },
      {
        "url": "https://drive.google.com/file/d/1BQ4uttScrPMr_W-UZENcZ4rqQ7VwA-rC/view?usp=sharing",
        "title": "Scene Representations III: Neural Fields and Hybrid Discrete-Neural Field Representations · Slides",
        "type": "Slides"
      },
      {
        "url": "https://drive.google.com/drive/folders/1tJztNX7wfspygpKp0WghRn5F37dZld59?usp=sharing",
        "title": "Scene Representations III: Neural Fields and Hybrid Discrete-Neural Field Representations · Assignment 2 Released",
        "type": "Practice"
      },
      {
        "url": "https://mit.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=3355a251-be5d-4d7f-8fbb-b08e008b52db",
        "title": "Light Transport · Recording",
        "type": "Video"
      },
      {
        "url": "https://drive.google.com/file/d/1i2JBRw3Q3dyaoYTB4zVpEJANVQLcvPHK/view?usp=sharing",
        "title": "Light Transport · Slides",
        "type": "Slides"
      },
      {
        "url": "https://mit.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=0c389f20-82a0-4f69-911c-b08e008b5b35",
        "title": "Differentiable Rendering · Recording",
        "type": "Video"
      },
      {
        "url": "https://drive.google.com/file/d/1B1vizXIHgo4Smqyw1sOCEd5OLwob4OSn/view?usp=sharing",
        "title": "Differentiable Rendering · Slides",
        "type": "Slides"
      },
      {
        "url": "https://mit.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=69244d85-3dc7-4acb-917e-b09700f79201",
        "title": "Differentiable Rendering II · Recording",
        "type": "Video"
      },
      {
        "url": "https://drive.google.com/file/d/1-W_fEerBmR1lNUEBrPia3YNB4t4yUyta/view?usp=sharing",
        "title": "Differentiable Rendering II · Slides",
        "type": "Slides"
      },
      {
        "url": "https://mit.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=5cc8d2a1-e965-4bae-9d65-b09c01698a8f",
        "title": "Prior-Based Reconstruction · Recording",
        "type": "Video"
      },
      {
        "url": "https://drive.google.com/file/d/1FIzREPwSDpRcjUkki3eussbcM9Xd8--W/view?usp=sharing",
        "title": "Prior-Based Reconstruction · Slides",
        "type": "Slides"
      },
      {
        "url": "https://mit.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=e4b7de9e-cca4-4845-9f96-b09c0169924f",
        "title": "Prior-Based Reconstruction II · Recording",
        "type": "Video"
      },
      {
        "url": "https://drive.google.com/file/d/1fDeNGAXr2f_q074csRTXo487n-JruzMx/view?usp=sharing",
        "title": "Prior-Based Reconstruction II · Assignment 3 Released",
        "type": "Practice"
      },
      {
        "url": "https://mit.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=6d6bd3ea-3c51-40ae-a177-b0a4007d1d69",
        "title": "Prior-Based Reconstruction III · Recording",
        "type": "Video"
      },
      {
        "url": "https://drive.google.com/file/d/1L3vVWbjcs1TFOc_BasQX43MKa64-dIwa/view?usp=sharing",
        "title": "Prior-Based Reconstruction III · Slides",
        "type": "Slides"
      },
      {
        "url": "https://mit.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=f685f280-cbd4-4caf-9246-b0a4007d247d",
        "title": "How to do Research? · Recording",
        "type": "Video"
      },
      {
        "url": "https://mit.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=f3795384-7e88-4698-b0f4-b0aa0084d9d1",
        "title": "Removing Camera Poses · Recording",
        "type": "Video"
      },
      {
        "url": "https://drive.google.com/file/d/1pEe136T4vhUcsBdEeHo6S-1f-lhTPmNM/view?usp=sharing",
        "title": "Removing Camera Poses · Slides",
        "type": "Slides"
      },
      {
        "url": "https://mit.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=4bbd16bf-7f99-4728-b830-b0aa0084cbe0",
        "title": "Unconditional and Text-Conditional Generative Models · Recording",
        "type": "Video"
      },
      {
        "url": "https://drive.google.com/file/d/1br8JzY_j3qxj6TIRFUxXi-5-qMdLHHTc/view?usp=sharing",
        "title": "Unconditional and Text-Conditional Generative Models · Slides",
        "type": "Slides"
      },
      {
        "url": "https://mit.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=1c0ba5eb-6cd3-4847-b767-b0b1008a90be",
        "title": "Conditional Probabilistic Models · Recording",
        "type": "Video"
      },
      {
        "url": "https://drive.google.com/file/d/1mVjewhdUse2xyMftdA6oTeA4hAUf_fwH/view?usp=sharing",
        "title": "Conditional Probabilistic Models · Slides",
        "type": "Slides"
      },
      {
        "url": "https://mit.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=fc12c4a2-b329-4fd2-80e1-b0b1008a9810",
        "title": "Dynamic Scene Representations · Recording",
        "type": "Video"
      },
      {
        "url": "https://drive.google.com/file/d/1s7nTYhuRO0vpsckVHRNmPzsHQ-Q_ht2l/view?usp=sharing",
        "title": "Dynamic Scene Representations · Slides",
        "type": "Slides"
      },
      {
        "url": "https://mit.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=218315c1-7585-45c4-8482-b0b8008acbdb",
        "title": "Dynamic Scene Representations II · Recording",
        "type": "Video"
      },
      {
        "url": "https://mit.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=5507b605-2f24-4415-98c6-b0b8008ad37a&start=0.337798",
        "title": "Representation Theory &amp; Symmetries · Recording",
        "type": "Video"
      },
      {
        "url": "https://drive.google.com/file/d/1yfxoh49J8U76YpUt1KNp_LGQGrjCUNue/view?usp=sharing",
        "title": "Representation Theory &amp; Symmetries · Slides",
        "type": "Slides"
      },
      {
        "url": "https://mit.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ec7f7a8b-8f71-4344-ae66-b0bf0089185d",
        "title": "How to give talks · Recording",
        "type": "Video"
      },
      {
        "url": "https://drive.google.com/file/d/1YHc_QnbLP2oZ0JJqhaVaqx1qcOE0EArm/view?usp=sharing",
        "title": "How to give talks · Slides",
        "type": "Slides"
      }
    ]
  },
  {
    "id": "cmu",
    "name": "CMU 16-825 · Learning for 3D Vision",
    "desc": "Fall 2026 · Full published lecture PDFs, paper reading links, and official assignment repositories. The course schedule includes future sessions; only published materials are indexed here.",
    "url": "https://learning3d.github.io/",
    "items": [
      {
        "title": "Official lecture schedule",
        "url": "https://learning3d.github.io/schedule.html",
        "type": "Course"
      },
      {
        "title": "Introduction Assignment 0 Out · lecture",
        "url": "https://www.dropbox.com/scl/fi/rerdo1rhxi2qai8ufe6eb/L01_Overview.pdf?rlkey=6x6t7aick2rf3zm6alopkrztv&dl=0",
        "type": "Slides"
      },
      {
        "title": "3D Representations I · lecture",
        "url": "https://www.dropbox.com/scl/fi/rtgy7ql2fqpc9dnlrutx8/L02_3D_Representations.pdf?rlkey=6ahxkd1c1upuuhx3m27tf77cb&dl=0",
        "type": "Slides"
      },
      {
        "title": "3D Representations II Assignment 0 Due Assignment 1 Out · lecture",
        "url": "https://www.dropbox.com/scl/fi/1jgx7g4yboyo7lal5nvbg/L03_3D_Representations_II.pdf?rlkey=6mxs5fx0ndyihyys20iq9plwd&dl=0",
        "type": "Slides"
      },
      {
        "title": "Image Formation · lecture",
        "url": "https://www.dropbox.com/scl/fi/1mjsk7kwl8entql54i45j/L04_Image_Formation.pdf?rlkey=0u9g5z2ejz352vhq9c5tg7vyd&st=pt4e2mi4&dl=0",
        "type": "Slides"
      },
      {
        "title": "Single-view 3D: Depth Depth Map Prediction from a Single Image using a Multi-Scale Deep Network Towards Robust · lecture",
        "url": "https://www.dropbox.com/scl/fi/0eoqf78vxtj45i42jh1xf/L05_Sv3D.pdf?rlkey=nbhc9si9o47i206in36v6rmql&dl=0",
        "type": "Slides"
      },
      {
        "title": "Single-view 3D: Depth Depth Map Prediction from a Single Image using a Multi-Scale Deep Network Towards Robust · reading 1",
        "url": "https://arxiv.org/abs/1406.2283",
        "type": "Paper"
      },
      {
        "title": "Single-view 3D: Depth Depth Map Prediction from a Single Image using a Multi-Scale Deep Network Towards Robust · reading 2",
        "url": "https://arxiv.org/abs/1907.01341",
        "type": "Paper"
      },
      {
        "title": "Single-view 3D: Depth Depth Map Prediction from a Single Image using a Multi-Scale Deep Network Towards Robust · reading 3",
        "url": "https://arxiv.org/abs/2507.02546",
        "type": "Paper"
      },
      {
        "title": "Single-view 3D: Depth Depth Map Prediction from a Single Image using a Multi-Scale Deep Network Towards Robust · reading 4",
        "url": "https://arxiv.org/abs/2312.02145",
        "type": "Paper"
      },
      {
        "title": "Single-view 3D: Objects Learning a predictable and generative vector representation for objects Occupancy Netw · lecture",
        "url": "https://www.dropbox.com/scl/fi/q9in894koxcq48pmpz0ug/L06_Sv3D_Objects.pdf?rlkey=w53zl868r8f6gt9bvp1c5r8h4&dl=0",
        "type": "Slides"
      },
      {
        "title": "Single-view 3D: Objects Learning a predictable and generative vector representation for objects Occupancy Netw · reading 1",
        "url": "https://arxiv.org/abs/1603.08637",
        "type": "Paper"
      },
      {
        "title": "Single-view 3D: Objects Learning a predictable and generative vector representation for objects Occupancy Netw · reading 2",
        "url": "https://arxiv.org/abs/1812.03828",
        "type": "Paper"
      },
      {
        "title": "Single-view 3D: Objects Learning a predictable and generative vector representation for objects Occupancy Netw · reading 3",
        "url": "https://arxiv.org/abs/1802.05384",
        "type": "Paper"
      },
      {
        "title": "Projects: Selection and Timeline Single-view 3D: Objects + Scenes Assignment 1 Due Assignment 2 Out · lecture",
        "url": "https://www.dropbox.com/scl/fi/bn00dvfs3qwqr2v4anvtq/L07a_Projects.pdf?rlkey=9jue36ui8h6mrtmjrljryk2hr&dl=0",
        "type": "Slides"
      },
      {
        "title": "Projects: Selection and Timeline Single-view 3D: Objects + Scenes Assignment 1 Due Assignment 2 Out · reading 1",
        "url": "https://www.dropbox.com/scl/fi/iz3lq3ox87u9b229d58rw/L07b_Sv3D_Objects_II.pdf?rlkey=ri5g9om4tccyul4oxiaeoowfx&dl=0",
        "type": "Paper"
      },
      {
        "title": "Single-view 3D: Humans and Animals SMPL: A Skinned Multi-Person Linear Model Embodied Hands: Modeling and Capt · lecture",
        "url": "https://www.dropbox.com/scl/fi/4t6368ms89a4fn26coo3u/L08_Articulated_3D.pdf?rlkey=5cp6eutlndjh85b2bciahot7m&dl=0",
        "type": "Slides"
      },
      {
        "title": "Single-view 3D: Humans and Animals SMPL: A Skinned Multi-Person Linear Model Embodied Hands: Modeling and Capt · reading 1",
        "url": "https://files.is.tue.mpg.de/black/papers/SMPL2015.pdf",
        "type": "Paper"
      },
      {
        "title": "Single-view 3D: Humans and Animals SMPL: A Skinned Multi-Person Linear Model Embodied Hands: Modeling and Capt · reading 2",
        "url": "https://arxiv.org/abs/2201.02610",
        "type": "Paper"
      },
      {
        "title": "Single-view 3D: Humans and Animals SMPL: A Skinned Multi-Person Linear Model Embodied Hands: Modeling and Capt · reading 3",
        "url": "https://arxiv.org/abs/1712.06584",
        "type": "Paper"
      },
      {
        "title": "Single-view 3D: Humans and Animals SMPL: A Skinned Multi-Person Linear Model Embodied Hands: Modeling and Capt · reading 4",
        "url": "https://dove3d.github.io/",
        "type": "Paper"
      },
      {
        "title": "Volume Rendering Volume Rendering Digest · lecture",
        "url": "https://www.dropbox.com/scl/fi/dstnockra9fsbeonb4cmm/L09_Volume_Rendering.pdf?rlkey=bej71la534xkwufazedzixjwa&dl=0",
        "type": "Slides"
      },
      {
        "title": "Volume Rendering Volume Rendering Digest · reading 1",
        "url": "https://arxiv.org/abs/2209.02417",
        "type": "Paper"
      },
      {
        "title": "Neural Radiance Fields NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis · lecture",
        "url": "https://www.dropbox.com/scl/fi/98k0yw281oee3e21948pe/L10_Neural_Radiance_Fields.pdf?rlkey=ytpyqgyazbcff1wr3wnm8gydh&dl=0",
        "type": "Slides"
      },
      {
        "title": "Neural Radiance Fields NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis · reading 1",
        "url": "https://arxiv.org/abs/2003.08934",
        "type": "Paper"
      },
      {
        "title": "Neural Implicit Rendering Multiview Neural Surface Reconstruction by Disentangling Geometry and Appearance Vol · lecture",
        "url": "https://www.dropbox.com/scl/fi/8e7q8jirgxbhbr6w9kcaw/L11_Neural_Implicit_Rendering.pdf?rlkey=9d26b0kiy3810r2a7a50nbp7s&dl=0",
        "type": "Slides"
      },
      {
        "title": "Neural Implicit Rendering Multiview Neural Surface Reconstruction by Disentangling Geometry and Appearance Vol · reading 1",
        "url": "https://arxiv.org/abs/2003.09852",
        "type": "Paper"
      },
      {
        "title": "Neural Implicit Rendering Multiview Neural Surface Reconstruction by Disentangling Geometry and Appearance Vol · reading 2",
        "url": "https://arxiv.org/abs/2106.12052",
        "type": "Paper"
      },
      {
        "title": "Neural Implicit Rendering Multiview Neural Surface Reconstruction by Disentangling Geometry and Appearance Vol · reading 3",
        "url": "https://arxiv.org/abs/2106.10689",
        "type": "Paper"
      },
      {
        "title": "Neural Implicit Rendering Multiview Neural Surface Reconstruction by Disentangling Geometry and Appearance Vol · reading 4",
        "url": "https://arxiv.org/abs/2312.15406",
        "type": "Paper"
      },
      {
        "title": "Differentiable Primitive Rendering (Meshes, Gaussians) Soft Rasterizer: A Differentiable Renderer for Image-ba · lecture",
        "url": "https://www.dropbox.com/scl/fi/zdfeuygp4h17qen357z3h/L12_Primitive_Rendering.pdf?rlkey=zb3my63fstfnlkletyqio0x07&dl=0",
        "type": "Slides"
      },
      {
        "title": "Differentiable Primitive Rendering (Meshes, Gaussians) Soft Rasterizer: A Differentiable Renderer for Image-ba · reading 1",
        "url": "https://arxiv.org/abs/1904.01786",
        "type": "Paper"
      },
      {
        "title": "Differentiable Primitive Rendering (Meshes, Gaussians) Soft Rasterizer: A Differentiable Renderer for Image-ba · reading 2",
        "url": "https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/",
        "type": "Paper"
      },
      {
        "title": "Relightable 3D Representations NeRS: Neural Reflectance Surfaces for Sparse-view 3D Reconstruction in the Wild · lecture",
        "url": "https://www.dropbox.com/scl/fi/d8ff1361vjit9n7stve2q/L13_Relightable_3D.pdf?rlkey=s0ktofc6ux4djhvnd1unyj78d&dl=0",
        "type": "Slides"
      },
      {
        "title": "Relightable 3D Representations NeRS: Neural Reflectance Surfaces for Sparse-view 3D Reconstruction in the Wild · reading 1",
        "url": "https://jasonyzhang.com/ners/",
        "type": "Paper"
      },
      {
        "title": "Relightable 3D Representations NeRS: Neural Reflectance Surfaces for Sparse-view 3D Reconstruction in the Wild · reading 2",
        "url": "https://kai-46.github.io/PhySG-website/",
        "type": "Paper"
      },
      {
        "title": "Relightable 3D Representations NeRS: Neural Reflectance Surfaces for Sparse-view 3D Reconstruction in the Wild · reading 3",
        "url": "https://fudan-zvg.github.io/IRGS/",
        "type": "Paper"
      },
      {
        "title": "Dynamic 3D Representations Neural Scene Flow Fields for Space-Time View Synthesis of Dynamic Scenes Nerfies: D · lecture",
        "url": "https://www.dropbox.com/scl/fi/ru6vjipmteu7suhxyupse/L14_Temporal_3D.pdf?rlkey=ribbpkc55plkh1twsdi4idz11&dl=0",
        "type": "Slides"
      },
      {
        "title": "Dynamic 3D Representations Neural Scene Flow Fields for Space-Time View Synthesis of Dynamic Scenes Nerfies: D · reading 1",
        "url": "https://arxiv.org/abs/2011.13084",
        "type": "Paper"
      },
      {
        "title": "Dynamic 3D Representations Neural Scene Flow Fields for Space-Time View Synthesis of Dynamic Scenes Nerfies: D · reading 2",
        "url": "https://arxiv.org/abs/2011.12948",
        "type": "Paper"
      },
      {
        "title": "Multi-view Transformers: View Synthesis pixelNeRF: Neural Radiance Fields from One or Few Images Scene Represe · lecture",
        "url": "https://www.dropbox.com/scl/fi/we4txjfq4z90jv45hpjhu/L15_MV_Synthesis.pdf?rlkey=qlg2suifkr4bz6m5hw3f0m7n5&dl=0",
        "type": "Slides"
      },
      {
        "title": "Multi-view Transformers: View Synthesis pixelNeRF: Neural Radiance Fields from One or Few Images Scene Represe · reading 1",
        "url": "https://arxiv.org/abs/2012.02190",
        "type": "Paper"
      },
      {
        "title": "Multi-view Transformers: View Synthesis pixelNeRF: Neural Radiance Fields from One or Few Images Scene Represe · reading 2",
        "url": "https://arxiv.org/pdf/2111.13152",
        "type": "Paper"
      },
      {
        "title": "Multi-view Transformers: View Synthesis pixelNeRF: Neural Radiance Fields from One or Few Images Scene Represe · reading 3",
        "url": "https://arxiv.org/abs/2410.17242",
        "type": "Paper"
      },
      {
        "title": "Multi-view Transformers: View Synthesis pixelNeRF: Neural Radiance Fields from One or Few Images Scene Represe · reading 4",
        "url": "https://arxiv.org/abs/2604.15239",
        "type": "Paper"
      },
      {
        "title": "Multi-view Transformers: Reconstruction VGGT: Visual Geometry Grounded Transformer Depth Anything 3: Recoverin · lecture",
        "url": "https://www.dropbox.com/scl/fi/4bibnwemd3qcjvja2v25q/L16_MV_Reconstruction.pdf?rlkey=yr353da3dm28q0o1urhmg0b9k&dl=0",
        "type": "Slides"
      },
      {
        "title": "Multi-view Transformers: Reconstruction VGGT: Visual Geometry Grounded Transformer Depth Anything 3: Recoverin · reading 1",
        "url": "https://arxiv.org/abs/2503.11651",
        "type": "Paper"
      },
      {
        "title": "Multi-view Transformers: Reconstruction VGGT: Visual Geometry Grounded Transformer Depth Anything 3: Recoverin · reading 2",
        "url": "https://arxiv.org/abs/2511.10647",
        "type": "Paper"
      },
      {
        "title": "Multi-view Transformers: Reconstruction VGGT: Visual Geometry Grounded Transformer Depth Anything 3: Recoverin · reading 3",
        "url": "https://arxiv.org/abs/2507.13347",
        "type": "Paper"
      },
      {
        "title": "Multi-view Transformers: Reconstruction VGGT: Visual Geometry Grounded Transformer Depth Anything 3: Recoverin · reading 4",
        "url": "https://github.com/learning3d/assignment4_f26",
        "type": "Paper"
      },
      {
        "title": "Generative 3D Modeling DreamFusion: Text-to-3D using 2D Diffusion Learning a Probabilistic Latent Space of Obj · lecture",
        "url": "https://www.dropbox.com/scl/fi/pnyhyi6mg9z8fc39ivsv5/L17_Generative_3D.pdf?rlkey=03y1m42tgczwbux0q6jukjnsl&dl=0",
        "type": "Slides"
      },
      {
        "title": "Generative 3D Modeling DreamFusion: Text-to-3D using 2D Diffusion Learning a Probabilistic Latent Space of Obj · reading 1",
        "url": "https://dreamfusion3d.github.io/",
        "type": "Paper"
      },
      {
        "title": "Generative 3D Modeling DreamFusion: Text-to-3D using 2D Diffusion Learning a Probabilistic Latent Space of Obj · reading 2",
        "url": "https://arxiv.org/abs/1610.07584",
        "type": "Paper"
      },
      {
        "title": "Generative 3D Modeling DreamFusion: Text-to-3D using 2D Diffusion Learning a Probabilistic Latent Space of Obj · reading 3",
        "url": "https://arxiv.org/abs/2203.09516",
        "type": "Paper"
      },
      {
        "title": "Generative 3D Modeling DreamFusion: Text-to-3D using 2D Diffusion Learning a Probabilistic Latent Space of Obj · reading 4",
        "url": "https://arxiv.org/abs/2012.00926",
        "type": "Paper"
      },
      {
        "title": "Single-view 3D: A generative approach Zero-1-to-3: Zero-shot One Image to 3D Object Trellis: Structured 3D Lat · lecture",
        "url": "https://www.dropbox.com/scl/fi/4wvybv65s167cilfjky2a/L18_SV3D_Generative.pdf?rlkey=excy88jdkxoodbd0no9g5rsxq&dl=0",
        "type": "Slides"
      },
      {
        "title": "Single-view 3D: A generative approach Zero-1-to-3: Zero-shot One Image to 3D Object Trellis: Structured 3D Lat · reading 1",
        "url": "https://zero123.cs.columbia.edu/",
        "type": "Paper"
      },
      {
        "title": "Single-view 3D: A generative approach Zero-1-to-3: Zero-shot One Image to 3D Object Trellis: Structured 3D Lat · reading 2",
        "url": "https://arxiv.org/abs/2412.01506",
        "type": "Paper"
      },
      {
        "title": "Single-view 3D: A generative approach Zero-1-to-3: Zero-shot One Image to 3D Object Trellis: Structured 3D Lat · reading 3",
        "url": "https://arxiv.org/abs/2511.16624",
        "type": "Paper"
      },
      {
        "title": "Processing Point Clouds I: Classification and Segmentation PointNet: Deep Learning on Point Sets for 3D Classi · lecture",
        "url": "https://www.dropbox.com/scl/fi/vzuh0xcv68u39stdkmyrd/L19_Point_Cloud_Processing_I.pdf?rlkey=05kahb3oq8qy50c8v6fl5g1rb&dl=0",
        "type": "Slides"
      },
      {
        "title": "Processing Point Clouds I: Classification and Segmentation PointNet: Deep Learning on Point Sets for 3D Classi · reading 1",
        "url": "https://arxiv.org/abs/1612.00593",
        "type": "Paper"
      },
      {
        "title": "Processing Point Clouds I: Classification and Segmentation PointNet: Deep Learning on Point Sets for 3D Classi · reading 2",
        "url": "https://arxiv.org/abs/2012.09164",
        "type": "Paper"
      },
      {
        "title": "Processing Point Clouds I: Classification and Segmentation PointNet: Deep Learning on Point Sets for 3D Classi · reading 3",
        "url": "https://arxiv.org/abs/2104.12229",
        "type": "Paper"
      },
      {
        "title": "Processing Point Clouds I: Classification and Segmentation PointNet: Deep Learning on Point Sets for 3D Classi · reading 4",
        "url": "https://arxiv.org/abs/1904.08755",
        "type": "Paper"
      },
      {
        "title": "Processing Point Clouds I: Classification and Segmentation PointNet: Deep Learning on Point Sets for 3D Classi · reading 5",
        "url": "https://github.com/learning3d/assignment4_f26",
        "type": "Paper"
      },
      {
        "title": "Guest Lecture I: 3D Tracking ( Ayush Jain ) · lecture",
        "url": "https://ayushjain1144.github.io/",
        "type": "Reading"
      },
      {
        "title": "Processing Point Clouds II: Detection Frustum PointNets for 3D Object Detection from RGB-D Data Deep Hough Vot · lecture",
        "url": "https://arxiv.org/abs/1711.08488",
        "type": "Reading"
      },
      {
        "title": "Processing Point Clouds II: Detection Frustum PointNets for 3D Object Detection from RGB-D Data Deep Hough Vot · reading 1",
        "url": "https://arxiv.org/abs/1904.09664",
        "type": "Paper"
      },
      {
        "title": "Processing Point Clouds II: Detection Frustum PointNets for 3D Object Detection from RGB-D Data Deep Hough Vot · reading 2",
        "url": "https://arxiv.org/abs/1812.05784",
        "type": "Paper"
      },
      {
        "title": "Processing Meshes SyncSpecCNN: Synchronized Spectral CNN for 3D Shape Segmentation MeshCNN: A Network with an  · lecture",
        "url": "https://arxiv.org/abs/1612.00606",
        "type": "Reading"
      },
      {
        "title": "Processing Meshes SyncSpecCNN: Synchronized Spectral CNN for 3D Shape Segmentation MeshCNN: A Network with an  · reading 1",
        "url": "https://arxiv.org/abs/1809.05910",
        "type": "Paper"
      },
      {
        "title": "Guest Lecture II: Game-ready 3D Generation ( Kangle Deng ) · lecture",
        "url": "https://dunbar12138.github.io/",
        "type": "Reading"
      },
      {
        "url": "https://learning3d.github.io/hw0.html",
        "title": "How to submit assignments?",
        "type": "Practice"
      },
      {
        "url": "https://github.com/learning3d/assignment0",
        "title": "Assignment 0",
        "type": "Practice"
      },
      {
        "url": "https://github.com/learning3d/assignment1",
        "title": "Assignment 1",
        "type": "Practice"
      },
      {
        "url": "https://github.com/learning3d/assignment2",
        "title": "Assignment 2",
        "type": "Practice"
      },
      {
        "url": "https://github.com/learning3d/assignment3",
        "title": "Assignment 3",
        "type": "Practice"
      },
      {
        "url": "https://github.com/learning3d/assignment4_f26",
        "title": "Assignment 4",
        "type": "Practice"
      },
      {
        "url": "https://github.com/learning3d/assignment5",
        "title": "Assignment 5",
        "type": "Practice"
      }
    ]
  },
  {
    "id": "pbrt",
    "name": "PBRT · Physically Based Rendering, 4th edition",
    "desc": "Complete public chapter index. Read the full original material and its exercises; the study site adds sequencing and original worked examples.",
    "url": "https://pbr-book.org/4ed/contents",
    "items": [
      {
        "url": "https://pbr-book.org/4ed/Introduction.html",
        "title": "1 Introduction",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Introduction/Literate_Programming.html",
        "title": "1.1 Literate Programming",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Introduction/Photorealistic_Rendering_and_the_Ray-Tracing_Algorithm.html",
        "title": "1.2 Photorealistic Rendering and the Ray-Tracing Algorithm",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Introduction/pbrt_System_Overview.html",
        "title": "1.3 pbrt: System Overview",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Introduction/How_to_Proceed_through_This_Book.html",
        "title": "1.4 How to Proceed through This Book",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Introduction/Using_and_Understanding_the_Code.html",
        "title": "1.5 Using and Understanding the Code",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Introduction/A_Brief_History_of_Physically_Based_Rendering.html",
        "title": "1.6 A Brief History of Physically Based Rendering",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Monte_Carlo_Integration.html",
        "title": "2 Monte Carlo Integration",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Monte_Carlo_Integration/Monte_Carlo_Basics.html",
        "title": "2.1 Monte Carlo: Basics",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Monte_Carlo_Integration/Improving_Efficiency.html",
        "title": "2.2 Improving Efficiency",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Monte_Carlo_Integration/Sampling_Using_the_Inversion_Method.html",
        "title": "2.3 Sampling Using the Inversion Method",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Monte_Carlo_Integration/Transforming_between_Distributions.html",
        "title": "2.4 Transforming between Distributions",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Geometry_and_Transformations.html",
        "title": "3 Geometry and Transformations",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Geometry_and_Transformations/Coordinate_Systems.html",
        "title": "3.1 Coordinate Systems",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Geometry_and_Transformations/n-Tuple_Base_Classes.html",
        "title": "3.2 n-Tuple Base Classes",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Geometry_and_Transformations/Vectors.html",
        "title": "3.3 Vectors",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Geometry_and_Transformations/Points.html",
        "title": "3.4 Points",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Geometry_and_Transformations/Normals.html",
        "title": "3.5 Normals",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Geometry_and_Transformations/Rays.html",
        "title": "3.6 Rays",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Geometry_and_Transformations/Bounding_Boxes.html",
        "title": "3.7 Bounding Boxes",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Geometry_and_Transformations/Spherical_Geometry.html",
        "title": "3.8 Spherical Geometry",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Geometry_and_Transformations/Transformations.html",
        "title": "3.9 Transformations",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Geometry_and_Transformations/Applying_Transformations.html",
        "title": "3.10 Applying Transformations",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Geometry_and_Transformations/Interactions.html",
        "title": "3.11 Interactions",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Radiometry,_Spectra,_and_Color.html",
        "title": "4 Radiometry, Spectra, and Color",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Radiometry,_Spectra,_and_Color/Radiometry.html",
        "title": "4.1 Radiometry",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Radiometry,_Spectra,_and_Color/Working_with_Radiometric_Integrals.html",
        "title": "4.2 Working with Radiometric Integrals",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Radiometry,_Spectra,_and_Color/Surface_Reflection.html",
        "title": "4.3 Surface Reflection",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Radiometry,_Spectra,_and_Color/Light_Emission.html",
        "title": "4.4 Light Emission",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Radiometry,_Spectra,_and_Color/Representing_Spectral_Distributions.html",
        "title": "4.5 Representing Spectral Distributions",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Radiometry,_Spectra,_and_Color/Color.html",
        "title": "4.6 Color",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Cameras_and_Film.html",
        "title": "5 Cameras and Film",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Cameras_and_Film/Camera_Interface.html",
        "title": "5.1 Camera Interface",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Cameras_and_Film/Projective_Camera_Models.html",
        "title": "5.2 Projective Camera Models",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Cameras_and_Film/Spherical_Camera.html",
        "title": "5.3 Spherical Camera",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Cameras_and_Film/Film_and_Imaging.html",
        "title": "5.4 Film and Imaging",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Shapes.html",
        "title": "6 Shapes",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Shapes/Basic_Shape_Interface.html",
        "title": "6.1 Basic Shape Interface",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Shapes/Spheres.html",
        "title": "6.2 Spheres",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Shapes/Cylinders.html",
        "title": "6.3 Cylinders",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Shapes/Disks.html",
        "title": "6.4 Disks",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Shapes/Triangle_Meshes.html",
        "title": "6.5 Triangle Meshes",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Shapes/Bilinear_Patches.html",
        "title": "6.6 Bilinear Patches",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Shapes/Curves.html",
        "title": "6.7 Curves",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Shapes/Managing_Rounding_Error.html",
        "title": "6.8 Managing Rounding Error",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Primitives_and_Intersection_Acceleration.html",
        "title": "7 Primitives and Intersection Acceleration",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Primitives_and_Intersection_Acceleration/Primitive_Interface_and_Geometric_Primitives.html",
        "title": "7.1 Primitive Interface and Geometric Primitives",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Primitives_and_Intersection_Acceleration/Aggregates.html",
        "title": "7.2 Aggregates",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Primitives_and_Intersection_Acceleration/Bounding_Volume_Hierarchies.html",
        "title": "7.3 Bounding Volume Hierarchies",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Sampling_and_Reconstruction.html",
        "title": "8 Sampling and Reconstruction",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Sampling_and_Reconstruction/Sampling_Theory.html",
        "title": "8.1 Sampling Theory",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Sampling_and_Reconstruction/Sampling_and_Integration.html",
        "title": "8.2 Sampling and Integration",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Sampling_and_Reconstruction/Sampling_Interface.html",
        "title": "8.3 Sampling Interface",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Sampling_and_Reconstruction/Independent_Sampler.html",
        "title": "8.4 Independent Sampler",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Sampling_and_Reconstruction/Stratified_Sampler.html",
        "title": "8.5 Stratified Sampler",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Sampling_and_Reconstruction/Halton_Sampler.html",
        "title": "8.6 Halton Sampler",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Sampling_and_Reconstruction/Sobol_Samplers.html",
        "title": "8.7 Sobol&rsquo; Samplers",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Sampling_and_Reconstruction/Image_Reconstruction.html",
        "title": "8.8 Image Reconstruction",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Reflection_Models.html",
        "title": "9 Reflection Models",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Reflection_Models/BSDF_Representation.html",
        "title": "9.1 BSDF Representation",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Reflection_Models/Diffuse_Reflection.html",
        "title": "9.2 Diffuse Reflection",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Reflection_Models/Specular_Reflection_and_Transmission.html",
        "title": "9.3 Specular Reflection and Transmission",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Reflection_Models/Conductor_BRDF.html",
        "title": "9.4 Conductor BRDF",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Reflection_Models/Dielectric_BSDF.html",
        "title": "9.5 Dielectric BSDF",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Reflection_Models/Roughness_Using_Microfacet_Theory.html",
        "title": "9.6 Roughness Using Microfacet Theory",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Reflection_Models/Rough_Dielectric_BSDF.html",
        "title": "9.7 Rough Dielectric BSDF",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Reflection_Models/Measured_BSDFs.html",
        "title": "9.8 Measured BSDFs",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Reflection_Models/Scattering_from_Hair.html",
        "title": "9.9 Scattering from Hair",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Textures_and_Materials.html",
        "title": "10 Textures and Materials",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Textures_and_Materials/Texture_Sampling_and_Antialiasing.html",
        "title": "10.1 Texture Sampling and Antialiasing",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Textures_and_Materials/Texture_Coordinate_Generation.html",
        "title": "10.2 Texture Coordinate Generation",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Textures_and_Materials/Texture_Interface_and_Basic_Textures.html",
        "title": "10.3 Texture Interface and Basic Textures",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Textures_and_Materials/Image_Texture.html",
        "title": "10.4 Image Texture",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Textures_and_Materials/Material_Interface_and_Implementations.html",
        "title": "10.5 Material Interface and Implementations",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Volume_Scattering.html",
        "title": "11 Volume Scattering",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Volume_Scattering/Volume_Scattering_Processes.html",
        "title": "11.1 Volume Scattering Processes",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Volume_Scattering/Transmittance.html",
        "title": "11.2 Transmittance",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Volume_Scattering/Phase_Functions.html",
        "title": "11.3 Phase Functions",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Volume_Scattering/Media.html",
        "title": "11.4 Media",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Light_Sources.html",
        "title": "12 Light Sources",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Light_Sources/Light_Interface.html",
        "title": "12.1 Light Interface",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Light_Sources/Point_Lights.html",
        "title": "12.2 Point Lights",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Light_Sources/Distant_Lights.html",
        "title": "12.3 Distant Lights",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Light_Sources/Area_Lights.html",
        "title": "12.4 Area Lights",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Light_Sources/Infinite_Area_Lights.html",
        "title": "12.5 Infinite Area Lights",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Light_Sources/Light_Sampling.html",
        "title": "12.6 Light Sampling",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Light_Transport_I_Surface_Reflection.html",
        "title": "13 Light Transport I: Surface Reflection",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Light_Transport_I_Surface_Reflection/The_Light_Transport_Equation.html",
        "title": "13.1 The Light Transport Equation",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Light_Transport_I_Surface_Reflection/Path_Tracing.html",
        "title": "13.2 Path Tracing",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Light_Transport_I_Surface_Reflection/A_Simple_Path_Tracer.html",
        "title": "13.3 A Simple Path Tracer",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Light_Transport_I_Surface_Reflection/A_Better_Path_Tracer.html",
        "title": "13.4 A Better Path Tracer",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Light_Transport_II_Volume_Rendering.html",
        "title": "14 Light Transport II: Volume Rendering",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Light_Transport_II_Volume_Rendering/The_Equation_of_Transfer.html",
        "title": "14.1 The Equation of Transfer",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Light_Transport_II_Volume_Rendering/Volume_Scattering_Integrators.html",
        "title": "14.2 Volume Scattering Integrators",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Light_Transport_II_Volume_Rendering/Scattering_from_Layered_Materials.html",
        "title": "14.3 Scattering from Layered Materials",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Wavefront_Rendering_on_GPUs.html",
        "title": "15 Wavefront Rendering on GPUs",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Wavefront_Rendering_on_GPUs/Mapping_Path_Tracing_to_the_GPU.html",
        "title": "15.1 Mapping Path Tracing to the GPU",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Wavefront_Rendering_on_GPUs/Implementation_Foundations.html",
        "title": "15.2 Implementation Foundations",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Wavefront_Rendering_on_GPUs/Path_Tracer_Implementation.html",
        "title": "15.3 Path Tracer Implementation",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Retrospective_and_the_Future.html",
        "title": "16 Retrospective and the Future",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Retrospective_and_the_Future/pbrt_over_the_Years.html",
        "title": "16.1 pbrt over the Years",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Retrospective_and_the_Future/Design_Alternatives.html",
        "title": "16.2 Design Alternatives",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Retrospective_and_the_Future/Emerging_Topics.html",
        "title": "16.3 Emerging Topics",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Retrospective_and_the_Future/The_Future.html",
        "title": "16.4 The Future",
        "type": "Chapter"
      },
      {
        "url": "https://pbr-book.org/4ed/Retrospective_and_the_Future/Conclusion.html",
        "title": "16.5 Conclusion",
        "type": "Chapter"
      }
    ]
  },
  {
    "id": "underactuated",
    "name": "MIT · Underactuated Robotics",
    "desc": "Complete public chapter index. Read the full original material and its exercises; the study site adds sequencing and original worked examples.",
    "url": "https://underactuated.mit.edu/",
    "items": [
      {
        "url": "https://underactuated.mit.edu/intro.html",
        "title": "Chapter 1: Fully-actuated vs Underactuated Systems",
        "type": "Chapter"
      },
      {
        "url": "https://underactuated.mit.edu/pend.html",
        "title": "Chapter 2: The Simple Pendulum",
        "type": "Chapter"
      },
      {
        "url": "https://underactuated.mit.edu/acrobot.html",
        "title": "Chapter 3: Acrobots, Cart-Poles, and Quadrotors",
        "type": "Chapter"
      },
      {
        "url": "https://underactuated.mit.edu/simple_legs.html",
        "title": "Chapter 4: Simple Models of Walking and Running",
        "type": "Chapter"
      },
      {
        "url": "https://underactuated.mit.edu/humanoids.html",
        "title": "Chapter 5: Highly-articulated Legged Robots",
        "type": "Chapter"
      },
      {
        "url": "https://underactuated.mit.edu/stochastic.html",
        "title": "Chapter 6: Model Systems with Stochasticity",
        "type": "Chapter"
      },
      {
        "url": "https://underactuated.mit.edu/dp.html",
        "title": "Chapter 7: Dynamic Programming",
        "type": "Chapter"
      },
      {
        "url": "https://underactuated.mit.edu/lqr.html",
        "title": "Chapter 8: Linear Quadratic Regulators",
        "type": "Chapter"
      },
      {
        "url": "https://underactuated.mit.edu/lyapunov.html",
        "title": "Chapter 9: Lyapunov Analysis",
        "type": "Chapter"
      },
      {
        "url": "https://underactuated.mit.edu/trajopt.html",
        "title": "Chapter 10: Trajectory Optimization",
        "type": "Chapter"
      },
      {
        "url": "https://underactuated.mit.edu/policy_search.html",
        "title": "Chapter 11: Policy Search",
        "type": "Chapter"
      },
      {
        "url": "https://underactuated.mit.edu/planning.html",
        "title": "Chapter 12: Sampling-based motion planning",
        "type": "Chapter"
      },
      {
        "url": "https://underactuated.mit.edu/robust.html",
        "title": "Chapter 13: Robust and Stochastic Control",
        "type": "Chapter"
      },
      {
        "url": "https://underactuated.mit.edu/feedback_motion_planning.html",
        "title": "Chapter 14: Feedback Motion Planning",
        "type": "Chapter"
      },
      {
        "url": "https://underactuated.mit.edu/output_feedback.html",
        "title": "Chapter 15: Output Feedback (aka Pixels-to-Torques)",
        "type": "Chapter"
      },
      {
        "url": "https://underactuated.mit.edu/limit_cycles.html",
        "title": "Chapter 16: Algorithms for Limit Cycles",
        "type": "Chapter"
      },
      {
        "url": "https://underactuated.mit.edu/contact.html",
        "title": "Chapter 17: Planning and Control through Contact",
        "type": "Chapter"
      },
      {
        "url": "https://underactuated.mit.edu/sysid.html",
        "title": "Chapter 18: System Identification",
        "type": "Chapter"
      },
      {
        "url": "https://underactuated.mit.edu/state_estimation.html",
        "title": "Chapter 19: State Estimation",
        "type": "Chapter"
      },
      {
        "url": "https://underactuated.mit.edu/rl_policy_search.html",
        "title": "Chapter 20: Model-Free Policy Search",
        "type": "Chapter"
      },
      {
        "url": "https://underactuated.mit.edu/imitation.html",
        "title": "Chapter 21: Imitation Learning",
        "type": "Chapter"
      },
      {
        "url": "https://underactuated.mit.edu/drake.html",
        "title": "Appendix A: Drake",
        "type": "Chapter"
      },
      {
        "url": "https://underactuated.mit.edu/multibody.html",
        "title": "Appendix B: Multi-Body Dynamics",
        "type": "Chapter"
      },
      {
        "url": "https://underactuated.mit.edu/optimization.html",
        "title": "Appendix C: Optimization and Mathematical Programming",
        "type": "Chapter"
      },
      {
        "url": "https://underactuated.mit.edu/playbook.html",
        "title": "Appendix D: An Optimization Playbook",
        "type": "Chapter"
      },
      {
        "url": "https://underactuated.mit.edu/misc.html",
        "title": "Appendix E: Miscellaneous",
        "type": "Chapter"
      }
    ]
  },
  {
    "id": "manipulation",
    "name": "MIT · Robotic Manipulation",
    "desc": "Complete public chapter index. Read the full original material and its exercises; the study site adds sequencing and original worked examples.",
    "url": "https://manipulation.mit.edu/",
    "items": [
      {
        "url": "https://manipulation.mit.edu/intro.html",
        "title": "Chapter 1: Introduction",
        "type": "Chapter"
      },
      {
        "url": "https://manipulation.mit.edu/robot.html",
        "title": "Chapter 2: Let's get you a robot",
        "type": "Chapter"
      },
      {
        "url": "https://manipulation.mit.edu/pick.html",
        "title": "Chapter 3: Basic Pick and Place",
        "type": "Chapter"
      },
      {
        "url": "https://manipulation.mit.edu/pose.html",
        "title": "Chapter 4: Geometric Pose Estimation",
        "type": "Chapter"
      },
      {
        "url": "https://manipulation.mit.edu/clutter.html",
        "title": "Chapter 5: Bin Picking",
        "type": "Chapter"
      },
      {
        "url": "https://manipulation.mit.edu/trajectories.html",
        "title": "Chapter 6: Motion Planning",
        "type": "Chapter"
      },
      {
        "url": "https://manipulation.mit.edu/mobile.html",
        "title": "Chapter 7: Mobile Manipulation",
        "type": "Chapter"
      },
      {
        "url": "https://manipulation.mit.edu/force.html",
        "title": "Chapter 8: Manipulator Control",
        "type": "Chapter"
      },
      {
        "url": "https://manipulation.mit.edu/segmentation.html",
        "title": "Chapter 9: Object Detection and Segmentation",
        "type": "Chapter"
      },
      {
        "url": "https://manipulation.mit.edu/deep_perception.html",
        "title": "Chapter 10: Deep Perception for Manipulation",
        "type": "Chapter"
      },
      {
        "url": "https://manipulation.mit.edu/rl.html",
        "title": "Chapter 11: Reinforcement Learning",
        "type": "Chapter"
      },
      {
        "url": "https://manipulation.mit.edu/tactile.html",
        "title": "Chapter 12: Soft Robots and Tactile Sensing",
        "type": "Chapter"
      },
      {
        "url": "https://manipulation.mit.edu/spatial.html",
        "title": "Appendix A: Spatial Algebra",
        "type": "Chapter"
      },
      {
        "url": "https://manipulation.mit.edu/drake.html",
        "title": "Appendix B: Drake",
        "type": "Chapter"
      },
      {
        "url": "https://manipulation.mit.edu/environments.html",
        "title": "Appendix C: DrakeGym Environments",
        "type": "Chapter"
      },
      {
        "url": "https://manipulation.mit.edu/station.html",
        "title": "Appendix D: Setting up your own \"Manipulation Station\"",
        "type": "Chapter"
      },
      {
        "url": "https://manipulation.mit.edu/misc.html",
        "title": "Appendix E: Miscellaneous",
        "type": "Chapter"
      }
    ]
  },
  {
    "id": "geometry",
    "name": "CMU 16-822 · Geometry-based Methods in Vision",
    "desc": "Fall 2026 · Official schedule and assignments. Where lecture slides are not published, use the linked Stanford notes and primary readings.",
    "url": "https://geometric3d.github.io/",
    "items": [
      {
        "title": "Lecture schedule and textbook chapter mapping",
        "url": "https://geometric3d.github.io/schedule.html",
        "type": "Course"
      },
      {
        "title": "Assignments and written problem sets",
        "url": "https://geometric3d.github.io/assignments.html",
        "type": "Practice"
      },
      {
        "title": "11 Tue 09/29/2026 Two-view Reconstruction II H&Z Chapter 11.1-11.3, 11.6, 11.7, 11.9 Five-Point Motion Estimat",
        "url": "http://users.cecs.anu.edu.au/~hongdong/new5pt_cameraREady_ver_1.pdf",
        "type": "Paper"
      },
      {
        "title": "14 Thu 10/08/2026 Non-linear Least Squares + Three-view Geometry Levenberg-Marquardt Algorithm H&Z Chapter 15.",
        "url": "https://people.duke.edu/~hpgavin/ce281/lm.pdf",
        "type": "Paper"
      },
      {
        "title": "17 Tue 10/27/2026 SfM in Practice Structure-From-Motion Revisited Bundle Adjustment in the Large A3 Due; PS4 R",
        "url": "https://openaccess.thecvf.com/content_cvpr_2016/papers/Schonberger_Structure-From-Motion_Revisited_CVPR_2016_paper.pdf",
        "type": "Paper"
      },
      {
        "title": "17 Tue 10/27/2026 SfM in Practice Structure-From-Motion Revisited Bundle Adjustment in the Large A3 Due; PS4 R",
        "url": "https://grail.cs.washington.edu/projects/bal/",
        "type": "Paper"
      },
      {
        "title": "18 Thu 10/29/2026 Dense Reconstruction from Multi-View Multi-View Stereo: A Tutorial",
        "url": "https://carlos-hernandez.org/papers/fnt_mvs_2015.pdf",
        "type": "Paper"
      },
      {
        "title": "19 Thu 11/05/2026 Learning-based SfM SuperPoint: Self-Supervised Interest Point Detection and Description Supe",
        "url": "https://arxiv.org/abs/1712.07629",
        "type": "Paper"
      },
      {
        "title": "19 Thu 11/05/2026 Learning-based SfM SuperPoint: Self-Supervised Interest Point Detection and Description Supe",
        "url": "https://psarlin.com/superglue/",
        "type": "Paper"
      },
      {
        "title": "19 Thu 11/05/2026 Learning-based SfM SuperPoint: Self-Supervised Interest Point Detection and Description Supe",
        "url": "https://arxiv.org/abs/2108.08291",
        "type": "Paper"
      },
      {
        "title": "20 Tue 11/10/2026 Parameterizing Rotations Least-squares estimation of transformation parameters between two p",
        "url": "https://web.stanford.edu/class/cs273/refs/umeyama.pdf",
        "type": "Paper"
      },
      {
        "title": "20 Tue 11/10/2026 Parameterizing Rotations Least-squares estimation of transformation parameters between two p",
        "url": "https://arxiv.org/abs/1812.07035",
        "type": "Paper"
      }
    ]
  },
  {
    "id": "ddg",
    "name": "CMU 15-458/858 · Discrete Differential Geometry",
    "desc": "Keenan Crane · Full course notes, lecture posts, and assignment index. The notes include written and coding exercises.",
    "url": "https://brickisland.net/DDGSpring2022/",
    "items": [
      {
        "title": "Full course notes · 174-page applied introduction",
        "url": "https://www.cs.cmu.edu/~kmcrane/Projects/DDG/paper.pdf",
        "type": "Book"
      },
      {
        "title": "All assignments",
        "url": "https://brickisland.net/DDGSpring2022/assignments/",
        "type": "Practice"
      },
      {
        "title": "Lecture slides and videos",
        "url": "https://brickisland.net/DDGSpring2022/category/slides/?order=desc",
        "type": "Course"
      }
    ]
  },
  {
    "id": "graphics",
    "name": "CMU 15-462/662 · Computer Graphics",
    "desc": "Fall 2020 · Keenan Crane. Official archived schedule with public lecture videos and assignments. Some course-host pages may be temporarily unavailable.",
    "url": "https://15462.courses.cs.cmu.edu/fall2020/",
    "items": [
      {
        "title": "Complete lecture schedule and video links",
        "url": "https://15462.courses.cs.cmu.edu/fall2020/",
        "type": "Course"
      },
      {
        "title": "Written exercises and practice problems",
        "url": "https://15462.courses.cs.cmu.edu/fall2020/exercises",
        "type": "Practice"
      },
      {
        "title": "Course overview video · Keenan Crane",
        "url": "https://www.youtube.com/watch?v=PhxV_JrXeVk",
        "type": "Video"
      }
    ]
  },
  {
    "id": "slam",
    "name": "CMU 16-833 · Robot Localization and Mapping",
    "desc": "Michael Kaess · Official course overview. Supplement with the public MIT state-estimation/optimization chapters and original factor-graph references in each lesson; the accessible course home does not expose full lecture notes.",
    "url": "https://www.cs.cmu.edu/~kaess/teaching/16833/Fall2024/",
    "items": [
      {
        "title": "Official course overview",
        "url": "https://www.cs.cmu.edu/~kaess/teaching/16833/Fall2024/",
        "type": "Course"
      },
      {
        "title": "MIT state-estimation chapter",
        "url": "https://underactuated.mit.edu/state_estimation.html",
        "type": "Chapter"
      }
    ]
  },
  {
    "id": "lie",
    "name": "Mathematics · Lie groups reference",
    "desc": "Ethan Eade · Lie Groups for 2D and 3D Transformations. Supplementary original author reference for rotation and rigid-motion mathematics.",
    "url": "https://ethaneade.com/lie.pdf",
    "items": [
      {
        "title": "Lie groups · SO(3), SE(3), exponential maps and adjoints",
        "url": "https://ethaneade.com/lie.pdf",
        "type": "Notes"
      }
    ]
  }
];
