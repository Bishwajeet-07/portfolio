import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b  from-zinc-900 to-black text-slate-200 ">
            <div className="max-w-6xl mx-auto py-4 flex flex-col-reverse md:flex-row justify-between items-center">
                {/* Left - Copyright */}
                <p className="text-sm text-slate-400  max-sm:pt-2">
                    © {new Date().getFullYear()} Bishwajeet Kumar. All rights reserved.
                </p>

                {/* Right - Social Media Icons */}
                <div className="flex space-x-6 ">
                    <a
                        href="https://github.com/Bishwajeet-07"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-transform hover:scale-110"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/bishwajeet-kumar-040a78247/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-transform hover:scale-110"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="https://twitter.com/bishwajeet-07"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-transform hover:scale-110"
                    >
                        <Twitter size={20} />
                    </a>
                    <a
                        href="mailto:bishwajeetk121@gmail.com"
                        className="hover:text-white transition-transform hover:scale-110"
                    >
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
