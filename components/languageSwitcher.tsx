import { useRouter } from 'next/router';

const LanguageSwitcher = () => {
    const router = useRouter();

    const { pathname, asPath, query } = router;

    return (
        <>
            <div>
                <button
                    type="button"
                    onClick={() => {
                        router.push({ pathname, query }, asPath, { locale: 'fr' });
                    }}>
                    FR
                </button>
                <button
                    type="button"
                    onClick={() => {
                        router.push({ pathname, query }, asPath, { locale: 'en' });
                    }}>
                    EN
                </button>
            </div>
        </>
    );
};

export default LanguageSwitcher;
