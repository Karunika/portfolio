import { useEffect } from "react";
import { scroller } from 'react-scroll'

const useFootnotes = (loading: boolean, blogId: string | undefined) => {
    useEffect(() => {
        const footnote = document.querySelector('section.footnotes');
        const as_ = footnote?.querySelectorAll('span.data-footnote-backref > a');
        const refs = document.querySelectorAll('[data-footnote-ref] > a');

        const cb = (id: string) => {
            return () => scroller.scrollTo('user-content-' + id.replace('#', ''), {
                duration: 1000,
                smooth: true,
            });
        };

        if (!loading && as_ && refs) {
            as_.forEach((backLink) => {
                const backId = backLink.getAttribute('href');
                if (backId) {
                    backLink.removeAttribute('href');
                    backLink.addEventListener('click', cb(backId));
                }
            });

            refs.forEach((refLink) => {
                const refId = refLink.getAttribute('href');
                if (refId) {
                    refLink.removeAttribute('href');
                    refLink.addEventListener('click', cb(refId));
                }
            });
        }

        return () => {
            if (as_ && refs) {
                as_.forEach((backLink) => {
                    const backId = backLink.getAttribute('href');
                    if (backId) {
                        backLink.removeEventListener('click', cb(backId));
                    }
                });

                refs.forEach((refLink) => {
                    const refId = refLink.getAttribute('href');
                    if (refId) {
                        refLink.removeEventListener('click', cb(refId));
                    }
                });
            }
        };
    }, [loading, blogId]);
}

export default useFootnotes
