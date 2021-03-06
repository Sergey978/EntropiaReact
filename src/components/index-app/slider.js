import React from 'react';

const Slider = () => {
    return (

        <div className="fullwidthbanner-container roundedcorners" >   {/*  <!-- REVOLUTION SLIDER -->    */}

            <div className="fullwidthbanner">

            <ul>

{/*  <!-- SLIDE  -->  */}
<li data-transition="fade" data-slotamount="7" data-masterspeed="1500">

    {/*   <!-- COVER IMAGE -->    */}
    <img src="../assets/images/demo/revolution_slider/sliderbg.jpg" alt="" data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat" />

    {/*    <!-- LAYER NR. 1 -->    */}
    <div className="tp-caption lightgrey_divider skewfromrightshort customout"
        data-x="85"
        data-y="224"
        data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
        data-speed="500"
        data-start="1200"
        data-easing="Power4.easeOut"
        data-endspeed="500"
        data-endeasing="Power4.easeIn"
        data-captionhidden="off"
        style={{zIndex: 2}}>
    </div>

    {/**  <!-- LAYER NR. 2 --> */}
    <div className="tp-caption customin customout"
        data-x="right" data-hoffset="-220"
        data-y="bottom" data-voffset="0"
        data-customin="x:50;y:150;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.5;scaleY:0.5;skewX:0;skewY:0;opacity:0;transformPerspective:0;transformOrigin:50% 50%;"
        data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
        data-speed="800"
        data-start="700"
        data-easing="Power4.easeOut"
        data-endspeed="500"
        data-endeasing="Power4.easeIn"
        style={{zIndex: 3}}><img src="../assets/images/demo/revolution_slider/desktop_slider_2.png" alt="" />
    </div>

    {/**  <!-- LAYER NR. 2 --> */}
    <div className="tp-caption customin customout"
        data-x="right" data-hoffset="-100"
        data-y="bottom" data-voffset="0"
        data-customin="x:50;y:150;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.5;scaleY:0.5;skewX:0;skewY:0;opacity:0;transformPerspective:0;transformOrigin:50% 50%;"
        data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
        data-speed="1500"
        data-start="700"
        data-easing="Elastic.easeInOut"
        data-endspeed="500"
        data-endeasing="Power1.easeIn"
        style={{zIndex: 3}}><img src="../assets/images/demo/revolution_slider/slider_run.png" alt="" />
    </div>

    {/** <!-- LAYER NR. 3 --> */}
    <div className="tp-caption large_bold_grey skewfromrightshort customout"
        data-x="80"
        data-y="66"
        data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
        data-speed="500"
        data-start="800"
        data-easing="Back.easeOut"
        data-endspeed="500"
        data-endeasing="Power4.easeIn"
        data-captionhidden="off"
        style={{zIndex: 4}}>Powerful
    </div>

    {/** <!-- LAYER NR. 4 --> */}
    <div className="tp-caption large_bold_grey skewfromleftshort customout"
        data-x="80"
        data-y="122"
        data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
        data-speed="300"
        data-start="1100"
        data-easing="Back.easeOut"
        data-endspeed="500"
        data-endeasing="Power4.easeIn"
        data-captionhidden="off"
        style={{zIndex: 7}}>Multipurpose
    </div>

    {/** <!-- LAYER NR. 5 --> */}
    <div className="tp-caption small_thin_grey customin customout"
        data-x="80"
        data-y="230"
        data-customin="x:0;y:100;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:1;scaleY:3;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:0% 0%;"
        data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
        data-speed="500"
        data-start="1300"
        data-easing="Power4.easeOut"
        data-endspeed="500"
        data-endeasing="Power4.easeIn"
        data-captionhidden="off"
        style={{zIndex: 8}}>
        Atropos Multipurpose Template, now offering you<br />
        over 110 html pages fully customizable and very<br />
        easy to use! <strong>Lifetime free update!</strong><br />
        <a href="#">Read more...</a>
    </div>

    {/**   <!-- LAYER NR. 6 -->*/}
    <div className="tp-caption large_bold_darkblue skewfromleftshort customout"
        data-x="80" data-hoffset="-90"
        data-y="350"
        data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
        data-speed="500"
        data-start="1600"
        data-easing="Back.easeOut"
        data-endspeed="500"
        data-endeasing="Power4.easeIn"
        data-captionhidden="off"
        style={{zIndex: 10}}>110+
    </div>

    {/**  <!-- LAYER NR. 7 -->*/}
    <div className="tp-caption medium_bg_darkblue skewfromleftshort customout"
        data-x="80" data-hoffset="-90"
        data-y="410"
        data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
        data-speed="500"
        data-start="1650"
        data-easing="Back.easeOut"
        data-endspeed="500"
        data-endeasing="Power4.easeIn"
        data-captionhidden="off"
        style={{zIndex: 11}}>Html Pages
    </div>

    <div className="tp-caption medium_bold_orange skewfromleftshort customout start font300"
        data-x="230" data-hoffset="-90"
        data-y="370"
        data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
        data-speed="500"
        data-start="1850"
        data-easing="Back.easeOut"
        data-endspeed="500"
        data-endeasing="Power4.easeIn"
        data-captionhidden="off"
        style={{zIndex: 13}}>Fully <strong>Responsive</strong>
    </div>

    {/**  <!-- LAYER NR. 8 --> */}
    <div className="tp-caption medium_bg_orange skewfromleftshort customout"
        data-x="230" data-hoffset="-90"
        data-y="410"
        data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
        data-speed="500"
        data-start="2300"
        data-easing="Back.easeOut"
        data-endspeed="500"
        data-endeasing="Power4.easeIn"
        data-captionhidden="off"
        style={{zIndex: 21}}>Customizable Pages
    </div>

</li>

{/**<!-- SLIDE  --> */}
<li data-transition="fade" data-slotamount="7" data-masterspeed="1000" data-delay="13000" >
    {/**<!-- MAIN IMAGE --> */}
    <img src="../assets/images/demo/revolution_slider/text_slider.jpg" alt="newslide2014_1" data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat" />
    {/** <!-- LAYERS --> */}

    {/**  <!-- LAYER NR. 1 -->*/}
    <div className="tp-caption finewide_large_white customin customout tp-resizeme"
        data-x="center" data-hoffset="0"
        data-y="center" data-voffset="-40"
        data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
        data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
        data-speed="500"
        data-start="500"
        data-easing="Power3.easeInOut"
        data-splitin="chars"
        data-splitout="chars"
        data-elementdelay="0.08"
        data-endelementdelay="0.08"
        data-end="4000"
        data-endspeed="500"
        style={{zIndex: 2, maxWidth: 'auto', maxHeight: 'auto', whiteSpace: 'nowrap'}} >Entropia
    </div>


    {/**  <!-- LAYER NR. 3 --> */}
    <div className="tp-caption finewide_medium_white randomrotate customout tp-resizeme"
        data-x="center" data-hoffset="0"
        data-y="center" data-voffset="30"
        data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
        data-speed="500"
        data-start="500"
        data-easing="Power3.easeInOut"
        data-splitin="chars"
        data-splitout="chars"
        data-elementdelay="0.08"
        data-endelementdelay="0.08"
        data-end="4000"
        data-endspeed="500"
        style={{zIndex: 4, maxWidth: 'auto' ,  maxHeight: 'auto' , whiteSpace: 'nowrap' ,}}> Auction Helper
    </div>

    {/**<!-- LAYER NR. 4 --> */}
    <div className="tp-caption boldwide_small_white customin customout tp-resizeme"
        data-x="240"
        data-y="120"
        data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
        data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
        data-speed="300"
        data-start="5000"
        data-easing="Power3.easeInOut"
        data-splitin="none"
        data-splitout="none"
        data-elementdelay="0.08"
        data-endelementdelay="0.08"
        data-endspeed="300"
        style={{zIndex: 5, maxWidth: 'auto' , maxHeight: 'auto' , whiteSpace: 'nowrap' }}><strong>Atropos</strong>
    </div>

    {/** <!-- LAYER NR. 5 -->*/}
    <div className="tp-caption whitedivider3px_vertical customin tp-resizeme"
        data-x="420"
        data-y="110"
        data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
        data-speed="300"
        data-start="5500"
        data-easing="Power3.easeInOut"
        data-splitin="none"
        data-splitout="none"
        data-elementdelay="0.1"
        data-endelementdelay="0.1"
        data-endspeed="300"
        style={{zIndex: 6, maxWidth: 'auto' , maxHeight: 'auto' , whiteSpace: 'nowrap' }}>&nbsp;
    </div>

    {/**  <!-- LAYER NR. 6 -->*/}
    <div className="tp-caption finewide_small_white randomrotate customout tp-resizeme"
        data-x="460"
        data-y="120"
        data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
        data-speed="500"
        data-start="6400"
        data-easing="Power3.easeInOut"
        data-splitin="chars"
        data-splitout="chars"
        data-elementdelay="0.08"
        data-endelementdelay="0.08"
        data-endspeed="300"
        style={{zIndex: 7, maxWidth: 'auto', maxHeight: 'auto' , whiteSpace: 'nowrap' }}>POWERFUL
    </div>

    {/**  <!-- LAYER NR. 7 -->*/}
    <div className="tp-caption finewide_small_white customin customout tp-resizeme"
        data-x="460"
        data-y="160"
        data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
        data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
        data-speed="500"
        data-start="7200"
        data-easing="Power3.easeInOut"
        data-splitin="words"
        data-splitout="words"
        data-elementdelay="0.12"
        data-endelementdelay="0.12"
        data-endspeed="300"
        style={{zIndex: 8, maxWidth: 'auto' , maxHeight: 'auto' , whiteSpace: 'nowrap' }}>MULTIPURPOSE
    </div>

    {/** <!-- LAYER NR. 8 -->*/}
    <div className="tp-caption finewide_small_white customin customout tp-resizeme"
        data-x="460"
        data-y="200"
        data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
        data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
        data-speed="500"
        data-start="8000"
        data-easing="Power3.easeInOut"
        data-splitin="none"
        data-splitout="none"
        data-elementdelay="0.08"
        data-endelementdelay="0.08"
        data-endspeed="300"
        style={{zIndex: 9, maxWidth: 'auto' , maxHeight: 'auto' , whiteSpace: 'nowrap' }}>V1.2
    </div>

    {/**  <!-- LAYER NR. 9 -->*/}
    <div className="tp-caption finewide_verysmall_white_mw customin customout tp-resizeme"
        data-x="460"
        data-y="250"
        data-customin="x:0;y:50;z:0;rotationX:-120;rotationY:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 0%;"
        data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
        data-speed="900"
        data-start="8000"
        data-easing="Power3.easeInOut"
        data-splitin="lines"
        data-splitout="lines"
        data-elementdelay="0.2"
        data-endelementdelay="0.08"
        data-endspeed="300"
        style={{zIndex: 10, maxWidth: 'auto' , maxHeight: 'auto' , whiteSpace: 'nowrap' }}>
        Atropos is a multipurpose template for<br />
        business or portfolio website. It is <br />
        fully responsive design ready for<br />
        PC, Tablet and Mobile.
    </div>

</li>

{/** <!-- SLIDE  -->*/}
<li data-transition="zoomout" data-slotamount="7" data-masterspeed="1000" >
    {/**<!-- MAIN IMAGE --> */}
    <img src="../assets/images/demo/revolution_slider/darkblurbg.jpg" alt="darkblurbg" data-bgposition="left top" data-bgfit="cover" data-bgrepeat="no-repeat" />
    {/** <!-- LAYERS --> */}

    {/** <!-- LAYER NR. 1 --> */}
    <div className="tp-caption customin"
        data-x="474"
        data-y="189"
        data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
        data-speed="500"
        data-start="800"
        data-easing="Power3.easeInOut"
        data-endspeed="300"
        style={{zIndex: 2}}><img src="../assets/images/demo/revolution_slider/macbook2.png" alt="" />
    </div>

    {/**  <!-- LAYER NR. 2 -->*/}
    <div className="tp-caption customin"
        data-x="245"
        data-y="92"
        data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
        data-speed="500"
        data-start="500"
        data-easing="Power3.easeInOut"
        data-endspeed="300"
        style={{zIndex: 3}}><img src="../assets/images/demo/revolution_slider/imac1.png" alt="" />
    </div>

    {/**  <!-- LAYER NR. 3 -->*/}
    <div className="tp-caption customin"
        data-x="693"
        data-y="69"
        data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
        data-speed="500"
        data-start="1300"
        data-easing="Power3.easeInOut"
        data-endspeed="300"
        style={{zIndex: 4}}><img src="../assets/images/demo/revolution_slider/lupe_macbook.png" alt="" />
    </div>

    {/** <!-- LAYER NR. 4 --> */}
    <div className="tp-caption customin"
        data-x="100"
        data-y="171"
        data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
        data-speed="500"
        data-start="1400"
        data-easing="Power3.easeInOut"
        data-endspeed="300"
        style={{zIndex: 5}}><img src="../assets/images/demo/revolution_slider/lupe_imac.png" alt="" />
    </div>

    {/** <!-- LAYER NR. 5 --> */}
    <div className="tp-caption medium_bg_asbestos skewfromleft customout"
        data-x="104"
        data-y="154"
        data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
        data-speed="800"
        data-start="1500"
        data-easing="Power4.easeOut"
        data-endspeed="300"
        data-endeasing="Power1.easeIn"
        data-captionhidden="on"
        style={{zIndex: 6}}>Caption Selection
    </div>

    {/**  <!-- LAYER NR. 6 -->*/}
    <div className="tp-caption medium_bg_red skewfromright customout"
        data-x="820"
        data-y="274"
        data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
        data-speed="800"
        data-start="1700"
        data-easing="Power4.easeOut"
        data-endspeed="300"
        data-endeasing="Power1.easeIn"
        data-captionhidden="on"
        style={{zIndex: 7}}>Custom Animation Editor
    </div>

    {/** <!-- LAYER NR. 7 --> */}
    <div className="tp-caption medium_bg_orange skewfromright customout"
        data-x="820"
        data-y="314"
        data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
        data-speed="800"
        data-start="1800"
        data-easing="Power4.easeOut"
        data-endspeed="300"
        data-endeasing="Power1.easeIn"
        data-captionhidden="on"
        style={{zIndex: 8}}>With Live Preview
    </div>

    { /** <!-- LAYER NR. 8 -->  */}
    <div className="tp-caption medium_bg_darkblue skewfromleft customout"
        data-x="168"
        data-y="193"
        data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
        data-speed="800"
        data-start="1600"
        data-easing="Power4.easeOut"
        data-endspeed="300"
        data-endeasing="Power1.easeIn"
        data-captionhidden="on"
        style={{zIndex: 9}}>With Style Preview
    </div>

    { /** <!-- LAYER NR. 9 -->  */}
    <div className="tp-caption large_bold_white customin customout"
        data-x="428"
        data-y="34"
        data-customin="x:0;y:0;z:0;rotationX:90;rotationY:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
        data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
        data-speed="600"
        data-start="1100"
        data-easing="Back.easeOut"
        data-endspeed="300"
        data-endeasing="Power1.easeIn"
        style={{zIndex: 10}}>Big
    </div>

    { /** <!-- LAYER NR. 10 -->  */}
    <div className="tp-caption medium_light_white customin customout"
        data-x="536"
        data-y="51"
        data-customin="x:0;y:0;z:0;rotationX:90;rotationY:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
        data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
        data-speed="600"
        data-start="1200"
        data-easing="Back.easeOut"
        data-endspeed="300"
        data-endeasing="Power1.easeIn"
        style={{zIndex: 11}}>Improvements
    </div>
</li>

{ /** <!-- SLIDE  -->  */}
<li data-transition="3dcurtain-vertical" data-slotamount="14" data-masterspeed="300" data-delay="10000">

    { /** <!-- COVER IMAGE -->  */}
    <img src="../assets/images/demo/revolution_slider/slider7.jpg" alt="" data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat" />

    <div className="tp-caption lft boxshadow"
        data-x="70"
        data-y="70"
        data-speed="900"
        data-start="500"
        data-easing="easeOutBack">

    </div>

    <div className="tp-caption sft large_bold_grey"
        data-x="750"
        data-y="70"
        data-speed="300"
        data-start="1200"
        data-easing="easeOutExpo">FEATURED
    </div>

    <div className="tp-caption sft modern_big_redbg"
        data-x="750"
        data-y="164"
        data-speed="300"
        data-start="1300"
        data-easing="easeOutExpo">Best With Atropos
    </div>

    <div className="tp-caption lfb thinheadline_dark"
        data-x="750"
        data-y="210"
        data-speed="300"
        data-start="1400"
        data-easing="easeOutExpo">You can easily add
    </div>

    <div className="tp-caption lfb thinheadline_dark"
        data-x="750"
        data-y="244"
        data-speed="300"
        data-start="1500"
        data-easing="easeOutExpo">Vimeo &amp; Youtube Videos
    </div>

    <div className="tp-caption lfb thinheadline_dark"
        data-x="750"
        data-y="278"
        data-speed="300"
        data-start="1600"
        data-easing="easeOutExpo">to your Slides
    </div>

    <div className="tp-caption lfb medium_bg_darkblue"
        data-x="750"
        data-y="390"
        data-speed="300"
        data-start="1600"
        data-easing="easeOutExpo"><i className="fa fa-html5"></i> HTML5
    </div>

    <div className="tp-caption lfb medium_bg_orange"
        data-x="860"
        data-y="390"
        data-speed="300"
        data-start="1600"
        data-easing="easeOutExpo"><i className="fa fa-css3"></i> CSS3
    </div>

</li>

</ul>




                <div className="tp-bannertimer">
                </div>
            </div>



            { /* <!-- /REVOLUTION SLIDER -->  */}
        </div>
    );
};

export default Slider;