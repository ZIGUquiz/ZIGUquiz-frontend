import share from './img/share.png'

const Sharerank2 = () => {

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText("http://ziguquiz.site");
            alert("URL copied to clipboard");
        } catch (e) {
            alert("failed to copy");
        }
    };


    return(
        <>
        <div className='sharee' onClick={copyToClipboard}>
            <img src={share}/>
        </div>
        </>
    )
};

export default Sharerank2;