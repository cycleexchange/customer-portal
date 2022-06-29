export const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: .4 } }
}

export const buttonWrap = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { delay: .4, duration: .2 } }
}

export const headText = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { delay: .3, duration: .2 } }
}

export const splashFadeOut = {
    initial: { opacity: 1 },
    animate: { opacity: 0, transition: { delay: 2, duration: .4 } }
}

export const splashImg = {
    initial: { opacity: 0, width: "170%" },
    animate: { opacity: 1, width: "100%", transition: { type: "spring", bounce: .2, delay: .4, duration: .6 } },
}