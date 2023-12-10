import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };

    return (
        <nav className="bg-orange-500 text-white py-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-lg font-bold">
                    <Link to="/">Hindi Club Vit Bhopal</Link>
                </div>
                <div className="flex items-center">
                    <div className="block lg:hidden">
                        <button
                            className="text-white focus:outline-none"
                            onClick={toggleDrawer}
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        </button>
                    </div>

                   
                    <ul className="hidden lg:flex space-x-4">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/events">Event</Link>
                        </li>
                        <li>
                            <Link to="/team">Our Team</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <Link to="/contact">
                            Contact
                        </Link>
                    </ul>

                    
                    {isDrawerOpen && (
                        <div className="lg:hidden fixed top-0 left-0 h-screen w-full bg-gray-800 text-white">
                            <div className="flex justify-end p-4">
                                <button
                                    className="text-white focus:outline-none"
                                    onClick={closeDrawer}
                                >
                                    
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                            <ul className="flex flex-col space-y-4 items-center justify-center mx-auto">
                                <li>
                                    <Link to="/" onClick={closeDrawer}>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/events" onClick={closeDrawer}>
                                        Event
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/team" onClick={closeDrawer}>
                                        Our Team
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" onClick={closeDrawer}>
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" onClick={closeDrawer}>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;






// import React from 'react';
// import { ReactNavbar } from 'overlay-navbar';
// import { FaUserAlt } from 'react-icons/fa';

// const Navbar = () => {
//     const logo = 'https://www.shutterstock.com/shutterstock/photos/2091193504/display_1500/stock-vector-kisan-diwas-means-national-farmers-day-december-to-honour-india-s-farmers-hindi-typography-2091193504.jpg';

//     return (
//         <div className="bg-orange-500 text-white py-2">
//             <div className="container mx-auto flex items-center justify-between">
//                 <div className="text-lg font-bold">
//                     Hindi Club Vit Bhopal
//                 </div>
//                 <div className="flex items-center">
//                     <ReactNavbar
//                         // menu and nav
//                         navColor1="#FF7722"
//                         navColor2="hsl(219, 48%, 8%)"
//                         burgerColor="black"
//                         burgerColorHover="hsl(0, 100%, 9%)"
//                         logo={logo}
//                         logoWidth="250px"
//                         logoHoverColor="hsl(54, 100%, 75%)"
//                         nav2justifyContent="space-around"
//                         nav3justifyContent="space-around"
//                         // links
//                         link1Text="Home"
//                         link2Text="Event"
//                         link3Text="OurTeam"
//                         link4Text="About"
//                         link1Url="/"
//                         link2Url="/events"
//                         link3Url="/team"
//                         link4Url="/about"
//                         link1ColorHover="white"
//                         link1Color="HSL(54, 100%, 75%)"
//                         link1Size="1.5rem"
//                         link1Padding="3vmax"

//                         // profile
//                         profileIcon={true}
//                         ProfileIconElement={FaUserAlt}
//                         profileIconUrl="/contact"
//                         profileIconColor="HSL(54, 100%, 75%)"
//                         profileIconColorHover="white"
//                     ></ReactNavbar>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;



//for chnage take reference of below props or visit https://www.npmjs.com/package/overlay-navbar


// Parameters
// Parameter	Default	Description
// burgerColor	"black"	'This is to change the color of burger menu button'
// burgerColorHover	"burgerColor"	"This is to change the color of burger menu button at the of hover "
// navColor1	"rgb(35, 35, 35)"	"This is to set the color of first nav section
// navColor2	"navColor1"	"This is to set the color of second nav section
// navColor3	"navColor2"	"This is to set the color of third nav section
// navColor4	"navColor3"	"This is to set the color of fourth nav section
// logo	"no default value, **required**"	"To set the Logo in Navbar"
// logoWidth	"100px"	"To set the width of Logo"
// logoHeight	"unset"	"To set the height of Logo"
// logoHoverSize	"15px"	"To set the drop-shadow blur at the time of hover"
// logoHoverColor	"green"	"To set the drop-shadow Color at the time of hover"
// logoTransition	0.5	"To set Logo Transition"
// logoAnimationTime	1	"To set Logo Animation time, 1 means 1second"
// nav1FlexDirection	"row"	"To set Flex Direction of first nav section"
// nav2FlexDirection	"row"	"To set Flex Direction of second nav section"
// nav3FlexDirection	"row"	"To set Flex Direction of third nav section"
// nav4FlexDirection	"row"	"To set Flex Direction of fourth nav section"
// nav1alignItems	"center"	"To set Align Item of first nav section"
// nav2alignItems	"center"	"To set Align Item of second nav section"
// nav3alignItems	"center"	"To set Align Item of third nav section"
// nav4alignItems	"center"	"To set Align Item of fourth nav section"
// nav1justifyContent	"center"	"To set Justify Content of first nav section"
// nav2justifyContent	"center"	"To set Justify Content of second nav section"
// nav3justifyContent	"center"	"To set Justify Content of third nav section"
// nav4justifyContent	"center"	"To set Justify Content of fourth nav section"
// nav1Transition	0.4	"To set Transition of first nav section"
// nav2Transition	nav1Transition + 0.4	"To set Transition of second nav section"
// nav3Transition	nav2Transition + 0.4	"To set Transition of third nav section"
// nav4Transition	nav3Transition + 0.4	"To set Transition of fourth nav section"
// link1Text	"Text 1"	"To set the Text of first Link"
// link2Text	"Text 2"	"To set the Text of second Link"
// link3Text	"Text 3"	"To set the Text of third Link"
// link4Text	"Text 4"	"To set the Text of fourth Link"
// link1Url	"/text1"	"To set the Url of first Link"
// link2Url	"/text2"	"To set the Url of second Link"
// link3Url	"/text3"	"To set the Url of third Link"
// link4Url	"/text4"	"To set the Url of fourth Link"
// link1Size	"1vmax"	"To set the size of first Link Text"
// link2Size	"link1Size"	"To set the size of second Link Text"
// link3Size	"link2Size"	"To set the size of third Link Text"
// link4Size	"link3Size"	"To set the size of fourth Link Text"
// link1Family	"Roboto"	"To set the Family of first Link"
// link2Family	"link1Family"	"To set the Family of second Link"
// link3Family	"link2Family"	"To set the Family of third Link"
// link4Family	"link3Family"	"To set the Family of fourth Link"
// link1Color	"black"	"To set the Color of first Link"
// link2Color	"link1Color "	"To set the Color of second Link"
// link3Color	"link2Color "	"To set the Color of third Link"
// link4Color	"link3Color "	"To set the Color of fourth Link"
// link1BackgroundColor	"unset"	"To set the Background color of first Link"
// link2BackgroundColor	"unset"	"To set the Background color of second Link"
// link3BackgroundColor	"unset"	"To set the Background color of third Link"
// link4BackgroundColor	"unset"	"To set the Background color of fourth Link"
// link1ColorHover	"link1Color"	"To set the color of first Link at the time of Hover"
// link2ColorHover	"link1ColorHover"	"To set the color of second Link at the time of Hover"
// link3ColorHover	"link2ColorHover "	"To set the color of third Link at the time of Hover"
// link4ColorHover	"link3ColorHover "	"To set the color of fourth Link at the time of Hover"
// link1Decoration	"none"	"To set text decoration of first Link"
// link2Decoration	"link1Decoration	"To set text decoration of second Link"
// link3Decoration	"link2Decoration"	"To set text decoration of third Link"
// link4Decoration	"link3Decoration"	"To set text decoration of fourth Link"
// link1Margin	"0"	"To set margin of first Link"
// link2Margin	"link1Margin "	"To set margin of second Link"
// link3Margin	"link2Margin "	"To set margin of third Link"
// link4Margin	"link3Margin "	"To set margin of fourth Link"
// link1Padding	"0"	"To set padding of first Link"
// link2Padding	"link1Padding"	"To set padding of first Link"
// link3Padding	"link2Padding"	"To set padding of second Link"
// link4Padding	"link3Padding "	"To set padding of third Link"
// link1Border	"none"	"To set border of first Link"
// link2Border	"link1Border"	"To set border of second Link"
// link3Border	"link2Border"	"To set border of third Link"
// link4Border	"link3Border"	"To set border of fourth Link"
// link1Transition	0.5	"To set transition of first Link"
// link2Transition	link1Transition	"To set transition of second Link"
// link3Transition	link2Transition	"To set transition of third Link"
// link4Transition	link3Transition	"To set transition of fourth Link"
// link1AnimationTime	1.5	"To set Animation Time of first Link"
// link2AnimationTime	link1AnimationTime	"To set Animation Time of second Link"
// link3AnimationTime	link2AnimationTime	"To set Animation Time of third Link"
// link4AnimationTime	link3AnimationTime	"To set Animation Time of fourth Link"
// searchIcon	true	"To set Search Icon to true or false"
// SearchIconElement	"no default value, **required**"	"Pass Search Icon Here"
// cartIcon	true	"To set Cart Icon to true or false"
// CartIconElement	"no default value, **required**"	"Pass Cart Icon Here"
// profileIcon	true	"To set Profile Icon to true or false"
// ProfileIconElement	"no default value, **required**"	"Pass Profile Icon Here"
// searchIconMargin	"0"	"To set Search Icon margin"
// cartIconMargin	"0"	"To set Cart Icon margin"
// profileIconMargin	"0"	"To set Profile Icon margin"
// searchIconUrl	"/search"	"To set Search Icon Url"
// cartIconUrl	"/cart"	"To set Cart Icon Url"
// profileIconUrl	"/account"	"To set Profile Icon Url"
// searchIconSize	"2vmax"	"To set the size of Search Icon"
// cartIconSize	"2vmax"	"To set the size of Cart Icon"
// profileIconSize	"2.5vmax"	"To set the size of profile Icon"
// searchIconColor	"white"	"To set the Color of Search Icon"
// cartIconSize	"white"	"To set the Color of Cart Icon"
// profileIconColor	"white"	"To set the Color of profile Icon"
// searchIconColorHover	"searchIconColor"	"To set the Color of Search Icon at the time of hover"
// cartIconColorHover	"cartIconColor"	"To set the Color of Cart Icon at the time of hover"
// profileIconColorHover	"profileIconColor"	"To set the Color of Profile Icon at the time of hover"
// searchIconTransition	0.5	"To set the transition of Search Icon"
// cartIconTransition	0.5	"To set the transition of Cart Icon"
// profileIconTransition	0.5	"To set the transition of Profile Icon"
// searchIconAnimationTime	2	"To set the Animation time of Search Icon"
// cartIconAnimationTime	searchIconAnimationTime + 0.5	"To set the Animation time of Cart Icon"
// profileIconAnimationTime	cartIconAnimationTime + 0.5	"To set the Animation time of profile Icon"
