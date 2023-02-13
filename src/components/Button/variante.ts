
import theme from "../../../theme"

interface Buttonstyle {
    button: {
        backgroundColor: string
        borderWidth?: number
        borderColor?: string
    },
    title: {
        color: string
    },
    icon: {
        color: string
    }
}

export interface ButtonVariant {
    enable: Buttonstyle
    disable: Buttonstyle
}

const buttonPrimary: ButtonVariant = {
    enable: {
        button: {
            backgroundColor: theme.COLORS.PRIMARY
        },
        title: {
            color: theme.COLORS.WHITE
        },
        icon: {
            color: theme.COLORS.GRAY4
        },
    },
    disable: {
        button: {
            backgroundColor: theme.COLORS.GRAY_100
        },
        title: {
            color: theme.COLORS.WHITE
        },
        icon: {
            color: theme.COLORS.WHITE
        },
    }
}

const buttonOutline: ButtonVariant = {
    enable: {
        button: {
            backgroundColor: 'transparent',
            borderWidth: 2,
            borderColor: theme.COLORS.PRIMARY
        },
        title: {
            color: theme.COLORS.GRAY1
        },
        icon: {
            color: theme.COLORS.GRAY1
        },
    },
    disable: {
        button: {
            backgroundColor: 'transparent',
            borderWidth: 2,
            borderColor: theme.COLORS.PRIMARY
        },
        title: {
            color: theme.COLORS.GRAY_100
        },
        icon: {
            color: theme.COLORS.GRAY_100
        },
    }
}

const buttonBlack: ButtonVariant = {
    enable: {
        button: {
            backgroundColor: theme.COLORS.TEXTDARK,
        },
        title: {
            color: theme.COLORS.ORANGE_300
        },
        icon: {
            color: theme.COLORS.ORANGE_300
        },
    },
    disable: {
        button: {
            backgroundColor: theme.COLORS.GRAY_100,
        },
        title: {
            color: theme.COLORS.WHITE
        },
        icon: {
            color: theme.COLORS.WHITE
        },
    }
}

const buttonTransparent: ButtonVariant = {
    enable: {
        button: {
            backgroundColor: 'transparent'
        },
        title: {
            color: theme.COLORS.GRAY4
        },   
        icon: {
            color: theme.COLORS.GRAY4
        },
    },
    disable: {
        button: {
            backgroundColor: 'transparent'
        },
        title: {
            color: theme.COLORS.GRAY4
        },
        icon: {
            color: theme.COLORS.GRAY4
        },
    }
}

export const variants = {
   primary: buttonPrimary,
   outline: buttonOutline,
   black: buttonBlack,
   transparent: buttonTransparent
}
