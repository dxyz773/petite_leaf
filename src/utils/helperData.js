// ============================ ICON DATA ==============================//

export const SVGDrawPaths = {
  cart: "M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z",
  search:
    "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
  mini_search:
    "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
  favorites:
    "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z",

  logo: "M223.45,40.07a8,8,0,0,0-7.52-7.52C139.8,28.08,78.82,51,52.82,94a87.09,87.09,0,0,0-12.76,49c.57,15.92,5.21,32,13.79,47.85l-19.51,19.5a8,8,0,0,0,11.32,11.32l19.5-19.51C81,210.73,97.09,215.37,113,215.94q1.67.06,3.33.06A86.93,86.93,0,0,0,162,203.18C205,177.18,227.93,116.21,223.45,40.07ZM153.75,189.5c-22.75,13.78-49.68,14-76.71.77l88.63-88.62a8,8,0,0,0-11.32-11.32L65.73,179c-13.19-27-13-54,.77-76.71,22.09-36.47,74.6-56.44,141.31-54.06C210.2,114.89,190.22,167.41,153.75,189.5Z",
  account:
    "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z",
};

// ------------------------------------- FILTER SVG DRAW PATHS ----------------------------------- //

export const filterSVGPaths = {
  pet_friendly: {
    1: {
      path: "M212,82a26,26,0,1,0,26,26A26,26,0,0,0,212,82Zm0,40a14,14,0,1,1,14-14A14,14,0,0,1,212,122ZM70,108a26,26,0,1,0-26,26A26,26,0,0,0,70,108ZM44,122a14,14,0,1,1,14-14A14,14,0,0,1,44,122ZM92,86A26,26,0,1,0,66,60,26,26,0,0,0,92,86Zm0-40A14,14,0,1,1,78,60,14,14,0,0,1,92,46Zm72,40a26,26,0,1,0-26-26A26,26,0,0,0,164,86Zm0-40a14,14,0,1,1-14,14A14,14,0,0,1,164,46Zm22.15,104.61a37.32,37.32,0,0,1-17.82-22.33,42,42,0,0,0-80.66,0A37.26,37.26,0,0,1,69.9,150.58,38,38,0,0,0,88,222a37.58,37.58,0,0,0,14.76-3,66.14,66.14,0,0,1,50.41,0A37.66,37.66,0,0,0,168,222a38,38,0,0,0,18.15-71.39ZM168,210a25.93,25.93,0,0,1-10.21-2.08,78.15,78.15,0,0,0-59.65,0A26,26,0,0,1,75.68,161.1a49.28,49.28,0,0,0,23.51-29.48,30,30,0,0,1,57.62,0,49.27,49.27,0,0,0,23.57,29.5A26,26,0,0,1,168,210Z",
      iconType: "phosphor",
    },
    2: {
      path: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm90,102a89.6,89.6,0,0,1-22.29,59.22L68.78,60.29A89.95,89.95,0,0,1,218,128ZM38,128A89.6,89.6,0,0,1,60.29,68.78L187.22,195.71A89.95,89.95,0,0,1,38,128Z",
      iconType: "phosphor",
    },
  },
  light: {
    1: {
      path: "M156,74a74.15,74.15,0,0,0-21.18,3.09,54.08,54.08,0,0,0-11.14-13.61l10.52-15a6,6,0,1,0-9.83-6.89l-10.52,15A53.9,53.9,0,0,0,88,50c-1.15,0-2.28,0-3.41.12L81.4,32.05a6,6,0,1,0-11.81,2.09L72.77,52.2A54,54,0,0,0,47.52,68.32L32.47,57.78a6,6,0,0,0-6.89,9.83l15,10.52A53.7,53.7,0,0,0,34,104c0,1.13,0,2.26.12,3.39l-18.07,3.18a6,6,0,0,0,1,11.91,6.38,6.38,0,0,0,1.05-.09L36.2,119.2a53.51,53.51,0,0,0,7.08,15A50,50,0,0,0,76,222h80a74,74,0,0,0,0-148ZM46,104a42,42,0,0,1,77.48-22.49A74.29,74.29,0,0,0,86.2,123,50.36,50.36,0,0,0,76,122a49.65,49.65,0,0,0-22.79,5.52A42,42,0,0,1,46,104ZM156,210H76a38,38,0,1,1,7.08-75.34,75.84,75.84,0,0,0-1.07,9,6,6,0,0,0,12,.7,61.54,61.54,0,0,1,2-12.24c0-.15.08-.29.11-.43A62.06,62.06,0,1,1,156,210Z",
      iconType: "phosphor",
    },
    2: {
      path: "M122,40V32a6,6,0,0,1,12,0v8a6,6,0,0,1-12,0Zm68,88a62,62,0,1,1-62-62A62.07,62.07,0,0,1,190,128Zm-12,0a50,50,0,1,0-50,50A50.06,50.06,0,0,0,178,128ZM59.76,68.24a6,6,0,1,0,8.48-8.48l-8-8a6,6,0,0,0-8.48,8.48Zm0,119.52-8,8a6,6,0,1,0,8.48,8.48l8-8a6,6,0,1,0-8.48-8.48Zm136-136-8,8a6,6,0,1,0,8.48,8.48l8-8a6,6,0,0,0-8.48-8.48Zm.48,136a6,6,0,0,0-8.48,8.48l8,8a6,6,0,0,0,8.48-8.48ZM40,122H32a6,6,0,0,0,0,12h8a6,6,0,0,0,0-12Zm88,88a6,6,0,0,0-6,6v8a6,6,0,0,0,12,0v-8A6,6,0,0,0,128,210Zm96-88h-8a6,6,0,0,0,0,12h8a6,6,0,0,0,0-12Z",
      iconType: "phosphor",
    },
    3: {
      path: "M122,40V16a6,6,0,0,1,12,0V40a6,6,0,0,1-12,0Zm68,88a62,62,0,1,1-62-62A62.07,62.07,0,0,1,190,128Zm-12,0a50,50,0,1,0-50,50A50.06,50.06,0,0,0,178,128ZM59.76,68.24a6,6,0,1,0,8.48-8.48l-16-16a6,6,0,0,0-8.48,8.48Zm0,119.52-16,16a6,6,0,1,0,8.48,8.48l16-16a6,6,0,1,0-8.48-8.48ZM192,70a6,6,0,0,0,4.24-1.76l16-16a6,6,0,0,0-8.48-8.48l-16,16A6,6,0,0,0,192,70Zm4.24,117.76a6,6,0,0,0-8.48,8.48l16,16a6,6,0,0,0,8.48-8.48ZM46,128a6,6,0,0,0-6-6H16a6,6,0,0,0,0,12H40A6,6,0,0,0,46,128Zm82,82a6,6,0,0,0-6,6v24a6,6,0,0,0,12,0V216A6,6,0,0,0,128,210Zm112-88H216a6,6,0,0,0,0,12h24a6,6,0,0,0,0-12Z",
      iconType: "phosphor",
    },
    4: {
      path: "M200,42a6,6,0,0,0,0,12,18,18,0,0,1,18,18v58H38V72A18,18,0,0,1,56,54a6,6,0,0,0,0-12A30,30,0,0,0,26,72v92a42,42,0,0,0,84,0V142h36v22a42,42,0,0,0,84,0V72A30,30,0,0,0,200,42ZM38,164V142.48L84.53,189A30,30,0,0,1,38,164Zm60,0a29.83,29.83,0,0,1-5,16.53L54.48,142H98Zm60,0V142.48L204.53,189A30,30,0,0,1,158,164Zm55,16.53L174.48,142H218v22A29.83,29.83,0,0,1,213,180.53Z",
      iconType: "phosphor",
    },
  },
  water: {
    1: {
      path: "M172.53,49.06a252.86,252.86,0,0,0-41.09-38,6,6,0,0,0-6.88,0,252.86,252.86,0,0,0-41.09,38C56.34,80.26,42,113.09,42,144a86,86,0,0,0,172,0C214,113.09,199.66,80.26,172.53,49.06ZM128,218a74.09,74.09,0,0,1-74-74c0-59.62,59-108.93,74-120.51C143,35.07,202,84.38,202,144A74.09,74.09,0,0,1,128,218Zm53.92-65A55.58,55.58,0,0,1,137,197.92a7,7,0,0,1-1,.08,6,6,0,0,1-1-11.92c17.38-2.92,32.13-17.68,35.08-35.08a6,6,0,1,1,11.84,2Z",
      iconType: "phosphor",
    },
    2: {
      path: "M62,236a10,10,0,1,1-10-10A10,10,0,0,1,62,236Zm22-42a10,10,0,1,0,10,10A10,10,0,0,0,84,194Zm-64,0a10,10,0,1,0,10,10A10,10,0,0,0,20,194Zm32-32a10,10,0,1,0,10,10A10,10,0,0,0,52,162ZM254,40a6,6,0,0,1-6,6H219.31a2,2,0,0,0-1.41.59l-28.31,28.3L167.83,202.32a14,14,0,0,1-23.71,7.57l-98-98a14,14,0,0,1,7.6-23.71l127.4-21.76,28.3-28.31a13.94,13.94,0,0,1,9.9-4.1H248A6,6,0,0,1,254,40ZM176.66,79.34,55.7,100a2,2,0,0,0-1.11,3.39l98,98a2,2,0,0,0,3.39-1.09Z",
      iconType: "phosphor",
    },
    3: {
      path: "M157,195.33l-32,48a6,6,0,1,1-10-6.66l32-48a6,6,0,0,1,10,6.66ZM230,92a74.09,74.09,0,0,1-74,74H131.21L101,211.33a6,6,0,1,1-10-6.66L116.79,166H76A50,50,0,1,1,86.2,67,74.08,74.08,0,0,1,230,92Zm-12,0A62.06,62.06,0,0,0,94,88.35a6,6,0,0,1-12-.7,75.84,75.84,0,0,1,1.07-9A38,38,0,1,0,76,154h80A62.07,62.07,0,0,0,218,92Z",
      iconType: "phosphor",
    },
  },
  care: {
    1: {
      path: "M229.12,142.65a22.43,22.43,0,0,0-19.55-3.88l-4.32,1C227,119.55,238,99.51,238,80c0-25.36-20.39-46-45.46-46A45.51,45.51,0,0,0,156,52a45.51,45.51,0,0,0-36.54-18C94.39,34,74,54.64,74,80c0,11.38,3.63,22.49,11.29,34.36a29.73,29.73,0,0,0-16.56,8.43L45.52,146H16A14,14,0,0,0,2,160v40a14,14,0,0,0,14,14H120a6,6,0,0,0,1.46-.18l64-16a7.16,7.16,0,0,0,.89-.3L225.17,181l.33-.15a22.6,22.6,0,0,0,3.62-38.18ZM119.46,46a33.16,33.16,0,0,1,31,20.28,6,6,0,0,0,11.1,0,33.16,33.16,0,0,1,31-20.28C210.68,46,226,61.57,226,80c0,20.24-16.18,43-46.8,65.75l-14.87,3.42A26,26,0,0,0,140,114H99.67C90.36,101.67,86,90.81,86,80,86,61.57,101.32,46,119.46,46ZM14,200V160a2,2,0,0,1,2-2H42v44H16A2,2,0,0,1,14,200Zm206.28-30-38.2,16.27L119.26,202H54V154.49l23.21-23.22A17.88,17.88,0,0,1,89.94,126H140a14,14,0,0,1,0,28H112a6,6,0,0,0,0,12h32a6,6,0,0,0,1.34-.15l67-15.41.24-.06A10.6,10.6,0,0,1,220.28,170Z",
      iconType: "phosphor",
    },
    2: {
      path: "M229.12,142.65a22.43,22.43,0,0,0-19.55-3.88l-4.32,1C227,119.55,238,99.51,238,80c0-25.36-20.39-46-45.46-46A45.51,45.51,0,0,0,156,52a45.51,45.51,0,0,0-36.54-18C94.39,34,74,54.64,74,80c0,11.38,3.63,22.49,11.29,34.36a29.73,29.73,0,0,0-16.56,8.43L45.52,146H16A14,14,0,0,0,2,160v40a14,14,0,0,0,14,14H120a6,6,0,0,0,1.46-.18l64-16a7.16,7.16,0,0,0,.89-.3L225.17,181l.33-.15a22.6,22.6,0,0,0,3.62-38.18ZM119.46,46a33.16,33.16,0,0,1,31,20.28,6,6,0,0,0,11.1,0,33.16,33.16,0,0,1,31-20.28C210.68,46,226,61.57,226,80c0,20.24-16.18,43-46.8,65.75l-14.87,3.42A26,26,0,0,0,140,114H99.67C90.36,101.67,86,90.81,86,80,86,61.57,101.32,46,119.46,46ZM14,200V160a2,2,0,0,1,2-2H42v44H16A2,2,0,0,1,14,200Zm206.28-30-38.2,16.27L119.26,202H54V154.49l23.21-23.22A17.88,17.88,0,0,1,89.94,126H140a14,14,0,0,1,0,28H112a6,6,0,0,0,0,12h32a6,6,0,0,0,1.34-.15l67-15.41.24-.06A10.6,10.6,0,0,1,220.28,170Z",
      iconType: "phosphor",
    },
    3: {
      path: "M244.52,100.05l-56-64A6,6,0,0,0,184,34H72a6,6,0,0,0-4.52,2l-56,64a6,6,0,0,0,.13,8l112,120a6,6,0,0,0,8.78,0l112-120A6,6,0,0,0,244.52,100.05ZM75.94,110l34.6,86.49L29.81,110Zm91.2,0L128,207.84,88.86,110ZM92,98l36-48,36,48Zm88.06,12h46.13l-80.73,86.49Zm46.72-12H179L140,46h41.28ZM74.72,46H116L77,98H29.22Z",
      iconType: "phosphor",
    },
  },
  price: {
    1: {
      path: "M207.58,63.84C186.85,53.48,159.33,48,128,48S69.15,53.48,48.42,63.84,16,88.78,16,104v48c0,15.22,11.82,29.85,32.42,40.16S96.67,208,128,208s58.85-5.48,79.58-15.84S240,167.22,240,152V104C240,88.78,228.18,74.15,207.58,63.84ZM128,64c62.64,0,96,23.23,96,40s-33.36,40-96,40-96-23.23-96-40S65.36,64,128,64Zm-8,95.86v32c-19-.62-35-3.42-48-7.49V153.05A203.43,203.43,0,0,0,120,159.86Zm16,0a203.43,203.43,0,0,0,48-6.81v31.31c-13,4.07-29,6.87-48,7.49ZM32,152V133.53a82.88,82.88,0,0,0,16.42,10.63c2.43,1.21,5,2.35,7.58,3.43V178C40.17,170.16,32,160.29,32,152Zm168,26V147.59c2.61-1.08,5.15-2.22,7.58-3.43A82.88,82.88,0,0,0,224,133.53V152C224,160.29,215.83,170.16,200,178Z",
      iconType: "phosphor",
    },
    2: {
      path: "M184,89.57V84c0-25.08-37.83-44-88-44S8,58.92,8,84v40c0,20.89,26.25,37.49,64,42.46V172c0,25.08,37.83,44,88,44s88-18.92,88-44V132C248,111.3,222.58,94.68,184,89.57ZM232,132c0,13.22-30.79,28-72,28-3.73,0-7.43-.13-11.08-.37C170.49,151.77,184,139,184,124V105.74C213.87,110.19,232,122.27,232,132ZM72,150.25V126.46A183.74,183.74,0,0,0,96,128a183.74,183.74,0,0,0,24-1.54v23.79A163,163,0,0,1,96,152,163,163,0,0,1,72,150.25Zm96-40.32V124c0,8.39-12.41,17.4-32,22.87V123.5C148.91,120.37,159.84,115.71,168,109.93ZM96,56c41.21,0,72,14.78,72,28s-30.79,28-72,28S24,97.22,24,84,54.79,56,96,56ZM24,124V109.93c8.16,5.78,19.09,10.44,32,13.57v23.37C36.41,141.4,24,132.39,24,124Zm64,48v-4.17c2.63.1,5.29.17,8,.17,3.88,0,7.67-.13,11.39-.35A121.92,121.92,0,0,0,120,171.41v23.46C100.41,189.4,88,180.39,88,172Zm48,26.25V174.4a179.48,179.48,0,0,0,24,1.6,183.74,183.74,0,0,0,24-1.54v23.79a165.45,165.45,0,0,1-48,0Zm64-3.38V171.5c12.91-3.13,23.84-7.79,32-13.57V172C232,180.39,219.59,189.4,200,194.87Z",
      iconType: "phosphor",
    },
    3: {
      path: "M184,89.57V84c0-25.08-37.83-44-88-44S8,58.92,8,84v40c0,20.89,26.25,37.49,64,42.46V172c0,25.08,37.83,44,88,44s88-18.92,88-44V132C248,111.3,222.58,94.68,184,89.57ZM232,132c0,13.22-30.79,28-72,28-3.73,0-7.43-.13-11.08-.37C170.49,151.77,184,139,184,124V105.74C213.87,110.19,232,122.27,232,132ZM72,150.25V126.46A183.74,183.74,0,0,0,96,128a183.74,183.74,0,0,0,24-1.54v23.79A163,163,0,0,1,96,152,163,163,0,0,1,72,150.25Zm96-40.32V124c0,8.39-12.41,17.4-32,22.87V123.5C148.91,120.37,159.84,115.71,168,109.93ZM96,56c41.21,0,72,14.78,72,28s-30.79,28-72,28S24,97.22,24,84,54.79,56,96,56ZM24,124V109.93c8.16,5.78,19.09,10.44,32,13.57v23.37C36.41,141.4,24,132.39,24,124Zm64,48v-4.17c2.63.1,5.29.17,8,.17,3.88,0,7.67-.13,11.39-.35A121.92,121.92,0,0,0,120,171.41v23.46C100.41,189.4,88,180.39,88,172Zm48,26.25V174.4a179.48,179.48,0,0,0,24,1.6,183.74,183.74,0,0,0,24-1.54v23.79a165.45,165.45,0,0,1-48,0Zm64-3.38V171.5c12.91-3.13,23.84-7.79,32-13.57V172C232,180.39,219.59,189.4,200,194.87Z",
      iconType: "phosphor",
    },
  },
};

export const shipping = [
  {
    title: "Order Processing",
    text: "Once your order is placed, our team works diligently to process and prepare your botanical selections for shipment. Orders are typically processed within 1-2 business days, excluding weekends and holidays",
  },
  {
    title: "Shipping Methods",
    text: "We offer a variety of shipping options to accommodate your needs, including standard and expedited shipping. You will have the opportunity to select your preferred shipping method during the checkout process.",
  },
  {
    title: "Shipping Rates",
    text: "Shipping rates are calculated based on the size and weight of your order, as well as your chosen shipping method. You will see the applicable shipping charges displayed at checkout before finalizing your purchase.",
  },
  {
    title: "Shipping Times",
    text: "Delivery times vary depending on your location and selected shipping method. Once your order has been shipped, you will receive a confirmation email with tracking information, allowing you to monitor the progress of your shipment.",
  },
  {
    title: "International Shipping",
    text: "We currently offer shipping within the contiguous US to all 48 states. We currently do not offer shipping outside of the US, but we plan to expand our international shipping options in the future.",
  },
  {
    title: "30-Day Money Back Guarantee",
    text: "Your satisfaction is our top priority. If for any reason you are not completely satisfied with your purchase, we offer a 30-day money back guarantee. Simply contact our customer service team within 30 days of receiving your order to initiate a return and refund process. Please note that certain conditions may apply, so be sure to review our full refund policy for more details.",
  },
  {
    title: "Customer Support",
    text: "If you have any questions or concerns regarding your order or shipping, our friendly customer support team is here to assist you. You can reach us via email at hello@petiteleaf.com",
  },
];

export const returns = [
  {
    title: "No Returns or Refunds",
    text: "As purveyors of luxury botanicals, we take great care in curating and packaging each plant with meticulous attention to detail. Due to the delicate nature of our products, we do not accept returns or offer refunds on any botanical items.",
  },
  {
    title: "Damaged or Defective Items",
    text: "In the unlikely event that your plant arrives damaged or defective, we ask that you promptly take clear photos of the damaged item, including the packaging, and contact our customer service team within 48 hours of receiving your order.",
  },
  {
    title: "Replacement Consideration",
    text: "Upon review of the provided photos, our team will assess the damage and determine if a replacement may be warranted. Please note that replacements are subject to availability and may not always be possible.",
  },
  {
    title: "Contact Us",
    text: "To report a damaged or defective item and initiate the replacement process, please email our customer service team at hello@petiteleaf.com. Be sure to include your order number and attach the photos of the damaged item for our review.",
  },
  {
    title: "Exceptional Service",
    text: "At Petite Leaf, we are committed to providing exceptional service and ensuring that every customer experience exceeds expectations. If you have any questions or concerns regarding your order or our return policy, please don't hesitate to reach out to our knowledgeable and friendly customer service team.",
  },
];

export const faqs = [
  {
    title: "What makes Petite Leaf different from other plant companies?",
    text: "At Petite Leaf, we specialize in offering a curated selection of luxurious and rare botanical specimens sourced from around the world. Our dedication to quality, attention to detail, and commitment to customer satisfaction set us apart as a premier destination for discerning plant enthusiasts.",
  },
  {
    title: "How are your plants packaged for shipping?",
    text: "We take great care to ensure that our plants are packaged securely to minimize the risk of damage during transit. Each plant is carefully wrapped and placed in protective packaging to safeguard against bumps and jostles. Additionally, our packaging materials are eco-friendly and recyclable whenever possible.",
  },
  {
    title: "What steps should I take upon receiving my plant?",
    text: "Upon receiving your plant, carefully unpack it from the shipping materials and inspect it for any signs of damage or distress. If your plant appears to have suffered damage during transit, please take clear photos of the affected areas and contact our customer service team within 48 hours for assistance.",
  },
  {
    title: "How do I care for my new plant?",
    text: "We provide detailed care instructions for each plant on our website, including information on light requirements, watering frequency, and temperature preferences. Additionally, our customer service team is available to answer any questions you may have about plant care and maintenance.",
  },
  {
    title:
      "What if I have concerns about the health of my plant after it arrives?",
    text: "If you have any concerns about the health or well-being of your plant after it arrives, please don't hesitate to reach out to our customer service team. We're here to provide guidance and support to ensure that your plant thrives in its new environment.",
  },
  {
    title: "Do you offer plant warranties or guarantees?",
    text: "While we do not offer warranties or guarantees on our plants, we do strive to provide the highest quality specimens and exceptional customer service. If you encounter any issues with your plant, please contact us, and we will do our best to address your concerns.",
  },
  {
    title: "Can I return or exchange my plant?",
    text: "Due to the delicate nature of our products, we do not accept returns or exchanges on any botanical items. However, if your plant arrives damaged or defective, please contact our customer service team within 48 hours, and we will assess the situation and provide assistance as needed.",
  },
  {
    title: "How can I contact customer service?",
    text: "Our customer service team can be reached via email at [email address] or by phone at [phone number]. We're available during regular business hours to assist you with any questions or concerns you may have.",
  },
];

export const collectionData = {
  pothos: {
    paragraph: [
      "Welcome to our Pothos Collection, where timeless elegance meets botanical versatility. Pothos, known scientifically as Epipremnum aureum, is a beloved favorite among plant enthusiasts for its lush foliage and easy-care nature. In our meticulously curated collection, we showcase an array of Pothos varieties, each possessing its own unique charm and characteristics.",
      "The Pothos, native to the Solomon Islands in the South Pacific, is renowned for its ability to thrive in a variety of indoor conditions, making it an ideal choice for both novice and experienced plant owners alike. Its heart-shaped leaves, ranging in hues from vibrant green to variegated patterns of white and yellow, add a touch of natural beauty to any space.",
      "One fascinating aspect of Pothos is its air-purifying qualities. Studies have shown that Pothos plants can effectively remove toxins such as formaldehyde, benzene, and xylene from indoor air, contributing to a healthier and more breathable environment. This makes Pothos not only a decorative accent but also a functional addition to your home or office.",
      "In our Pothos Collection, you'll find a variety of cultivars, including the classic Golden Pothos (Epipremnum aureum), characterized by its glossy green leaves splashed with golden-yellow variegation. For those seeking a more unique aesthetic, we offer the Marble Queen Pothos, featuring striking white and green marbled foliage that adds a touch of elegance to any interior.",
      "For those with limited space, our compact varieties such as the Neon Pothos, with its vibrant chartreuse leaves, are perfect for adding a pop of color to small apartments or offices. Additionally, our rare and exotic cultivars, such as the Silver Satin Pothos, with its velvety silver foliage, are sure to captivate the most discerning plant enthusiasts.",
      "Whether you're looking to brighten up a dim corner, create a lush green backdrop, or simply add a touch of botanical beauty to your space, our Pothos Collection offers something for everyone. With its timeless appeal, air-purifying benefits, and ease of care, Pothos is truly a must-have staple in any luxury plant collection. Explore our exquisite selection and bring the beauty of the tropics into your home today.",
    ],
  },
  philodendron: {
    paragraph: [
      "Welcome to our Philodendron Collection, where botanical elegance and tropical allure collide. Philodendrons, belonging to the Araceae family, are renowned for their lush foliage, striking diversity, and remarkable adaptability. In our carefully curated collection, we showcase an extensive array of Philodendron varieties, each possessing its own unique charm and characteristics.",
      "Originating from the rainforests of Central and South America, Philodendrons have captured the hearts of plant enthusiasts worldwide for centuries. With their glossy leaves, intricate patterns, and vibrant hues, Philodendrons add a touch of exotic beauty to any indoor space.",
      "One fascinating aspect of Philodendrons is their ability to climb. Many species, such as the Philodendron scandens (Heartleaf Philodendron), feature aerial roots that allow them to attach themselves to surfaces and climb towards the light. This makes Philodendrons not only visually captivating but also versatile in their growth habits, making them suitable for a variety of indoor environments.",
      "Another interesting characteristic of Philodendrons is their air-purifying properties. Studies have shown that Philodendrons can effectively remove toxins such as formaldehyde, benzene, and trichloroethylene from indoor air, improving air quality and creating a healthier living environment.",
      "In our Philodendron Collection, you'll discover a wide range of cultivars, from classic favorites to rare and exotic specimens. The Philodendron Birkin, with its stunning variegated foliage resembling brushstrokes of creamy white, is a standout choice for those seeking a statement piece to elevate their interior decor.",
      "For those with a penchant for drama, the Philodendron Pink Princess, with its striking pink variegation against dark green leaves, adds a touch of bold sophistication to any space. Meanwhile, the Philodendron Micans, with its velvety foliage in shades of green and bronze, exudes a sense of understated luxury and elegance.",
      "Whether you're a seasoned plant enthusiast or a newcomer to the world of indoor gardening, our Philodendron Collection offers something for everyone. With their timeless beauty, air-purifying benefits, and ease of care, Philodendrons are the perfect choice for adding a touch of tropical paradise to your home or office. Explore our exquisite selection and let the allure of Philodendrons transport you to the lush jungles of the tropics.",
    ],
  },
  bestsellers: {
    paragraph: [
      "Welcome to our Bestsellers Collection, where botanical beauty meets unparalleled luxury. This carefully curated assortment showcases the crème de la crème of our offerings, featuring an exquisite selection of plants that have captured the hearts of plant enthusiasts worldwide. Let's delve into the allure of some of our most sought-after botanical treasures.",
      "First in our lineup is the Heartleaf Philodendron (Philodendron hederaceum), a timeless classic cherished for its lush, heart-shaped leaves and trailing vines. Renowned for its resilience and versatility, the Heartleaf Philodendron thrives in a variety of indoor conditions, making it a beloved choice for both novice and experienced plant enthusiasts alike. Its vibrant foliage adds a touch of natural elegance to any space, creating an inviting atmosphere of warmth and tranquility.",
      "Next, we have the Lucky Bamboo (Dracaena sanderiana), a symbol of prosperity and good fortune in many cultures. With its graceful, slender stems and vibrant green foliage, Lucky Bamboo brings a sense of serenity and zen-inspired beauty to any environment. Easy to care for and visually striking, this botanical treasure is a popular choice for gifting and decorating homes and offices, imparting a sense of harmony and balance to its surroundings.",
      "Jade (Crassula ovata), also known as the Money Plant or Money Tree, holds a special place in our Bestsellers Collection for its symbolic significance and aesthetic appeal. Believed to attract wealth and prosperity, Jade is celebrated for its distinctive jade-green leaves and compact, tree-like form. With its enduring charm and resilience, Jade adds a touch of abundance and good fortune to any space, serving as a timeless reminder of prosperity and growth.",
      "The Money Tree (Pachira aquatica) is another standout favorite in our collection, prized for its braided trunk and lush, tropical foliage. Symbolizing financial success and fortune, the Money Tree is revered for its auspicious energy and striking appearance. Whether displayed as a centerpiece or accent piece, this botanical gem exudes elegance and sophistication, elevating any interior with its undeniable charm and allure.",
      "Last but not least, we have the Fiddle Leaf Fig (Ficus lyrata), a statement plant beloved for its large, glossy leaves and sculptural silhouette. With its dramatic foliage and modern aesthetic, the Fiddle Leaf Fig makes a bold statement in any space, commanding attention with its striking presence. Despite its reputation for being finicky, this majestic plant remains a top choice among discerning plant enthusiasts, admired for its timeless beauty and undeniable allure.",
      "Each plant in our Bestsellers Collection has earned its place through a combination of timeless beauty, resilience, and enduring popularity. Whether you're seeking to add a touch of elegance to your home or office or searching for the perfect gift for a loved one, our Bestsellers Collection offers an exquisite selection of botanical treasures that are sure to inspire and delight. Explore our curated assortment and experience the allure of luxury botanicals today.",
    ],
  },
};

export const leafAndWellnessData = [
  {
    id: 1,
    title: "Stress Reduction:",
    text: "Engaging with plants has been shown to lower cortisol levels and reduce stress, promoting a sense of calm and relaxation in your living environment.",
  },
  {
    id: 2,
    title: "Improved Mood:",
    text: "Surrounding yourself with greenery can boost mood and alleviate symptoms of anxiety and depression, providing a natural mood-lifting effect and enhancing overall mental well-being.",
  },
  {
    id: 3,
    title: "Increased Productivity:",
    text: "Studies have found that incorporating plants into workspaces can enhance focus, concentration, and productivity, helping you feel more energized and motivated to tackle tasks.",
  },
  {
    id: 4,
    title: "Enhanced Sense of Purpose:",
    text: "Caring for plants provides a sense of responsibility and accomplishment, fostering a positive mindset and promoting feelings of fulfillment and purpose in daily life.",
  },
];
