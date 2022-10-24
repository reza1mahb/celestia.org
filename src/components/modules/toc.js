import React, {useEffect} from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";

const ToC = ({ headings, frontmatter }) => {
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const id = entry.target.getAttribute('id');
                if (document.querySelector(`.toc-item`)) {
                    if (entry.intersectionRatio > 0 ) {
                        document.querySelector(`.toc-item a[href*="#${id}"]`) && document.querySelector(`.toc-item a[href*="#${id}"]`).parentElement.classList.add('selected');
                    } else {
                        document.querySelector(`.toc-item a[href*="#${id}"]`) && document.querySelector(`.toc-item a[href*="#${id}"]`).parentElement.classList.remove('selected');
                    }
                }
            });
        });

        // Track all sections that have an `id` applied
        if(document.querySelector(`.toc-item`)){
            document.querySelectorAll('h4[id]').forEach((section) => {
                observer.observe(section);
            });
        }

        //});
    }, []);

    return (
        <div className={'toc-item'}>
            {headings.map((heading, index) => {
                if (heading.depth === 4) {
                    return (
                        <div key={index} className={index === 1 ? 'selected' : ''}>
                            <AnchorLink to={`#${heading.value.replace(/\s+/g, "-").toLowerCase()}`}>
                                {heading.value}
                            </AnchorLink>
                        </div>
                    )
                }
            })}
        </div>
    );
}

export default ToC
