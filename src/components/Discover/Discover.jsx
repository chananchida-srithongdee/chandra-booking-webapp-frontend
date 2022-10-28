import React from "react";
import { bgDiscover, disFood, disMassage, disYoga } from "./images";
import styles from "./styles.js";
const Discover = () => {
  return (
    <div className="w-full">
      <div className="bg-primary h-[800px] relative">
        <img
          src={bgDiscover}
          alt="chandra resort"
          className="w-full h-[800px] object-cover"
        />
        <div className="absolute ss:bottom-24 bottom-48 sm:left-24 left-10">
          <div
            className={`${styles.headText} font-bold md:text-8xl sm:text-7xl ss:text-6xl text-4xl`}
          >
            THE CHANDRA
          </div>
          <div className={`${styles.headText} ss:text-4xl text-xl mb-5 ml-2`}>
            Experience the difference.
          </div>
          <div
            className={`${styles.button} text-2xl ml-2 text-white w-fit bg-secondary text-shadow-xl hover:bg-white hover:text-secondary`}
          >
            Booking Now
          </div>
        </div>
        <div className="h-[600px]"></div>
      </div>
      <div className="flex flex-col space-y-11 > * + * my-20">
        <div className={`${styles.subHeading}container mx-auto px-40`}>
          <div className={`${styles.flexCenter}`}>
            Explore A World Of Tastes
          </div>
          <div className="flex flex-row space-x-11 > * + * my-20">
            <div className={`${styles.photos} w-[574px] h-[450px]`}>
              <img src={disFood} alt="disFood" />
            </div>
            <div>
              <h2 className="text-justify text-2xl mt-5 container mx-auto px-5">
                {" "}
                Local Flavours, Global Cuisines{" "}
              </h2>
              <h3 className="text-justify text-lg mt-5 container mx-auto px-5">
                Discover the perfect balance of fire and spices in Thai cuisine.
                Indulge in finely crafted cocktails at a bar. Unwind at a
                laidback beach club, where you savour the freshest grilled
                seafood and panoramic views of the ocean. At Chandra, our dining
                experiences are all about creating the unforgettable.
              </h3>
              <h3 className="text-justify text-lg mt-5 container mx-auto px-5">
                Catering to everyone’s tastes, Centara makes it a priority to
                serve a mix of international and local flavours that speak true
                to the destination. We see to every detail so you can make the
                most of every dining experience to connect with family, friends
                or colleagues. Where remarkable locations and delicious cuisines
                come together, Chandra lets you share meaningful moments.
              </h3>
            </div>
          </div>
        </div>

        <div className={`${styles.subHeading}container mx-auto px-40`}>
          <div className={`${styles.flexCenter}`}>Your Wellness Journey</div>
          <div className="flex flex-row space-x-11 > * + * my-20">
            <div className={`${styles.photos} flex flex-col justify-center`}>
              <img
                src={disMassage}
                alt="disMassage"
                className="round md:rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-justify text-2xl mt-5 container mx-auto px-5">
                {" "}
                Discover Healing Traditions{" "}
              </h2>
              <h3 className="text-justify text-lg mt-5 container mx-auto px-5">
                Rooted in Thai culture, SPA Cenvaree is a leading global spa
                operator in Southeast Asia and the Middle East. Varee means
                water in Sanskrit, signifying our focus on gentle strength and
                gradual change in holistic healing. Through deeply rejuvenating
                rituals in soothing surrounds, we will help you revitalise your
                body and mind.
              </h3>
              <h3 className="text-justify text-lg mt-5 container mx-auto px-5">
                Combining value with signature spa treatments, Cense by SPA
                Cenvaree offers relaxing spa experiences in select locations.
                While we specialise in traditional Thai therapies, our indulgent
                spa menu also includes Ayurvedic rituals, aromatherapy massage
                and body scrubs that will help you glow from within. Come as you
                are and restore your vitality under our care.
              </h3>
            </div>
          </div>
        </div>
        <div className={`${styles.subHeading}container mx-auto px-40`}>
          <div className={`${styles.flexCenter}`}>Refresh Your Mind & Body</div>
          <div className="flex flex-row space-x-11 > * + * my-20">
            <div className={`${styles.photos} flex flex-col justify-center`}>
              <img
                src={disYoga}
                alt="disYoga"
                className="round md:rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-justify text-2xl mt-5 container mx-auto px-5">
                {" "}
                How Health And Wellness Can Be Part Of Your Stay With Us
              </h2>
              <h3 className="text-justify text-lg mt-5 container mx-auto px-5">
                A holiday or business trip doesn’t have to be a break from
                health. Centara now gives you more ways to take care of yourself
                during your stay with us.
              </h3>
              <h3 className="text-justify text-lg mt-5 container mx-auto px-5">
                Our Stay Well programme includes tools to help you exercise more
                conveniently, sleep more comfortably, and eat more healthily.
                It’s more than just a fitness centre. It includes exercise aids
                in your room, comfortable pillows and sleepwear, special menus
                to choose from and more.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;

// const Auth = () => {

//     return (
//         <div className="bg-primary w-full h-full absolute top-0">
//             <div className={`${styles.flexCenter} w-full h-full`}>
//                 <div className={`${styles.flexCenter} sm:w-[810px] sm:h-[500px] h-[400px] bg-white drop-shadow-lg rounded-lg overflow-hidden`}>
//                     <div className="sm:w-1/2 sm:mb-10">
//                         <div className={`${styles.flexCenter} mb-9`}>
//                             <img src={logoblack} alt="chandra logo" className="object-contained w-[190px] caret-transparent" />
//                         </div>
//                         <form onSubmit={handleSubmit}>
//                             <div className="px-10">
//                                 <div className={`${styles.flexBetween} mb-6`}>
//                                     <img src={usericon} alt="username icon" className={styles.icon} />
//                                     <TextField name="username" label="Username" type="username" onChange={handleChange} variant="outlined" required fullWidth autoFocus />
//                                 </div>
//                                 <div className={`${styles.flexBetween}`}>
//                                     <img src={lockicon} alt="lock icon" className={styles.icon} />
//                                     <TextField name="password" label="Password" type={showPassword ? "text" : "password"} onChange={handleChange} variant="outlined" required fullWidth
//                                         InputProps={{
//                                             endAdornment: (
//                                                 <InputAdornment position="end">
//                                                     <IconButton onClick={handleShowPassword}>
//                                                         {showPassword ? <VisibilityOff /> : <Visibility />}
//                                                     </IconButton>
//                                                 </InputAdornment>
//                                             )
//                                         }}
//                                     />
//                                 </div>
//                                 <div className="text-right text-[14px] text-red-600 mt-2">{errMsg}</div>
//                             </div>
//                             <div className="mt-5 w-full flex justify-end">
//                                 <div className="mr-10 w-[130px]">
//                                     <Button type="submit" fullWidth variant="contained" color="primary">Login</Button>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                     <div className="w-1/2 h-full sm:flex hidden">
//                         <img src={chandra1} alt="chandra resort" className="w-full h-full object-cover caret-transparent" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Auth
