import React, { useState } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";

const ToC = ({ headings, frontmatter }) => {
    const [selectedItem, setSelectedItem] = useState(0);

    const handleItemClick = (index) => {
        setSelectedItem(index);
    }

    return (
        <div className={'toc-item'}>
            {headings.map((heading, index) => {
                if (heading.depth === 4) {
                    return (
                        <div key={index} className={selectedItem === index ? 'selected' : ''} onClick={() => handleItemClick(index)}>
                            <AnchorLink to={`#${heading.id.replace(/\s+/g, "-").toLowerCase()}`}>
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