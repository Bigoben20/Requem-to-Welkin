import {useRouter} from "next/router";
import { Stack} from "@mui/material";
import Link          from "next/link";


interface LanguageChanger {
    color?: string;
}


export default function LanguageChanger(props:LanguageChanger){
    const router = useRouter();
        return(
            <Stack  direction="row" gap={1} justifyContent="center">
                <Link  href={router.asPath} locale="tr-TR" >
                    <a style={{color:props.color || "rgba(8, 32, 143, 1" }}>TR</a>
                </Link>
                <Link href={router.asPath} locale="en-US" >
                    <a style={{color:props.color || "rgba(8, 32, 143, 1" }}>
                        EN
                    </a>
                </Link>
            </Stack>
            );
}
