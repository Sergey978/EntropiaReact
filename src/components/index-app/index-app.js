import React, { Component } from 'react';
import Navbar from '../navbar';
import Slider from './slider';

import Footer from '../footer';

export default class IndexApp extends Component {


    render() {
        const { data } = this.props;

        return (
            <div>
                <Navbar servData={data} />
                <header id="head" > {/** <!-- Header -->*/}
                    <Slider />
                </header>   {/**<!-- /Header -->*/}
                { /* <!-- Intro -->  */}
                <div className="container text-center">
                    <br /> <br />
                    <h2>{data.idTest}</h2>
                    <h2 className="thin">The best place to tell people why they are here</h2>
                    <p className="text-muted">
                        The difference between involvement and commitment is like an eggs-and-ham breakfast:<br />
                        the chicken was involved; the pig was committed.
		                </p>
                </div>
                { /* <!-- /Intro--> */}

                { /* <!-- Highlights - jumbotron -->  */}
                <div className="jumbotron top-space">
                    <div className="container">

                        <h3 className="text-center thin">Reasons to use this template</h3>

                        <div className="row">
                            <div className="col-md-3 col-sm-6 highlight">
                                <div className="h-caption"><h4><i className="fa fa-cogs fa-5"></i>Bootstrap-powered</h4></div>
                                <div className="h-body text-center">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aliquid adipisci aspernatur. Soluta quisquam dignissimos earum quasi voluptate. Amet, dignissimos, tenetur vitae dolor quam iusto assumenda hic reprehenderit?</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 highlight">
                                <div className="h-caption"><h4><i className="fa fa-flash fa-5"></i>Fat-free</h4></div>
                                <div className="h-body text-center">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, commodi, sequi quis ad fugit omnis cumque a libero error nesciunt molestiae repellat quos perferendis numquam quibusdam rerum repellendus laboriosam reprehenderit! </p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 highlight">
                                <div className="h-caption"><h4><i className="fa fa-heart fa-5"></i>Creative Commons</h4></div>
                                <div className="h-body text-center">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, vitae, perferendis, perspiciatis nobis voluptate quod illum soluta minima ipsam ratione quia numquam eveniet eum reprehenderit dolorem dicta nesciunt corporis?</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 highlight">
                                <div className="h-caption"><h4><i className="fa fa-smile-o fa-5"></i>Author's support</h4></div>
                                <div className="h-body text-center">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, excepturi, maiores, dolorem quasi reprehenderit illo accusamus nulla minima repudiandae quas ducimus reiciendis odio sequi atque temporibus facere corporis eos expedita? </p>
                                </div>
                            </div>
                        </div> { /* <!-- /row  -->  */}

                    </div>
                </div>
                { /* <!-- /Highlights -->  */}

                { /* <!-- container -->  */}
                <div className="container">

                    <h2 className="text-center top-space">Frequently Asked Questions</h2>
                    <br />

                    <div className="row">
                        <div className="col-sm-6">
                            <h3>Which code editor would you recommend?</h3>
                            <p>I'd highly recommend you <a href="http://www.sublimetext.com/">Sublime Text</a> - a free to try text editor which I'm using daily. Awesome tool!</p>
                        </div>
                        <div className="col-sm-6">
                            <h3>Nice header. Where do I find more images like that one?</h3>
                            <p>
                                Well, there are thousands of stock art galleries, but personally,
					I prefer to use photos from these sites: <a href="http://unsplash.com">Unsplash.com</a>
                                and <a href="http://www.flickr.com/creativecommons/by-2.0/tags/">Flickr - Creative Commons</a></p>
                        </div>
                    </div> { /* <!-- /row -->  */}

                    <div className="row">
                        <div className="col-sm-6">
                            <h3>Can I use it to build a site for my client?</h3>
                            <p>
                                Yes, you can. You may use this template for any purpose, just don't forget about the <a href="http://creativecommons.org/licenses/by/3.0/">license</a>,
                                which says: "You must give appropriate credit", i.e. you must provide the name of the creator and a link to the original template in your work.
				                            </p>
                        </div>
                        <div className="col-sm-6">
                            <h3>Can you customize this template for me?</h3>
                            <p>Yes, I can. Please drop me a line to sergey-at-pozhilov.com and describe your needs in details. Please note, my services are not cheap.</p>
                        </div>
                    </div> { /* <!-- /row -->  */}

                    <div className="jumbotron top-space">
                        <h4>Dicta, nostrum nemo soluta sapiente sit dolor quae voluptas quidem doloribus recusandae facere magni ullam suscipit sunt atque rerum eaque iusto facilis esse nam veniam incidunt officia perspiciatis at voluptatibus. Libero, aliquid illum possimus numquam fuga.</h4>
                        <p className="text-right"><a className="btn btn-primary btn-large">Learn more »</a></p>
                    </div>

                </div>
                { /* <!-- /container -->  */}

                { /* <!-- Social links. @TODO: replace by link/instructions in template -->  */}
                <section id="social">
                    <div className="container">
                        <div className="wrapper clearfix">
                            { /* <!-- AddThis Button BEGIN -->  */}
                            <div className="addthis_toolbox addthis_default_style">
                                <a className="addthis_button_facebook_like" layout="button_count"></a>
                                <a className="addthis_button_tweet"></a>
                                <a className="addthis_button_linkedin_counter"></a>
                            </div>
                            { /* <!-- AddThis Button END -->  */}
                        </div>
                    </div>
                </section>
                { /* <!-- /social links -->  */}

                {  /*  <!-- footer -->*/}
                <Footer />
            </div>

        );
    };
}
