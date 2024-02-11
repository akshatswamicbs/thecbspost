import React from 'react'
import { Footer } from 'flowbite-react'
import {Link} from 'react-router-dom'
import {BsDiscord, BsFacebook, BsGithub, BsInstagram, BsX} from 'react-icons/bs'

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-gray-500'>
        <div className='w-full max-w-7xl mx-auto'>
            <div className='grid w-full justify-between sm:flex md:grid'>
                <div className=''>
                <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl dark:text-white'>
            <      span>The CBS Post</span>
                </Link>
                </div>
                <div className='grid grid-cols-2 gap-3 sm: mt-4 sm:grid-cols-3 justify-between'>
                    <div>
                    <Footer.Title title='About' />
                    <Footer.LinkGroup col>
                        <Footer.Link 
                           href='https://google.com'
                           target='_blank'
                        >
                        Official Account
                        </Footer.Link>
                        <Footer.Link 
                           href='https://x.com'
                           target='_blank'
                        >
                        My newsletter
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title='Follow Us' />
                    <Footer.LinkGroup col>
                        <Footer.Link 
                           href='https://google.com'
                           target='_blank'
                           rel='noopener noreferrer'
                        >
                        Instagram
                        </Footer.Link>
                        <Footer.Link 
                           href='https://x.com'
                           target='_blank'
                           rel='noopener noreferrer'
                        >
                        Twitter
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title='Legal' />
                    <Footer.LinkGroup col>
                        <Footer.Link 
                           href='https://google.com'
                           target='_blank'
                        >
                        Privacy Policy
                        </Footer.Link>
                        <Footer.Link 
                           href='https://x.com'
                           target='_blank'
                        >
                        Terms &amp; Conditions
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                </div>
            </div>
            <Footer.Divider/>
            <div className=''>
                <Footer.Copyright
                href='#'
                by='The CBS Post'
                year={new Date().getFullYear()}/>
            </div>
            <div className='flex gap-6'>
                <Footer.Icon
                href='#'
                icon={BsInstagram}
                />
                <Footer.Icon
                href='#'
                icon={BsDiscord}
                />
                <Footer.Icon
                href='#'
                icon={BsGithub}
                />
                <Footer.Icon
                href='#'
                icon={BsFacebook}
                />
            </div>
        </div>
    </Footer>
  )
}

