import { MenuDropdown } from "@chainsafe/common-components";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import React from "react";
import clsx from "clsx";
import { Typography } from "@chainsafe/common-components";
import { shortenAddress } from "../Utils/Helpers";
import { useWeb3 } from "@chainsafe/web3-context";
//import { useChainbridge } from "../Contexts/ChainbridgeContext";
import opusLogo from "../media/images/opus.png"

const PANGOLIN = "https://app.pangolin.exchange/#/swap?inputCurrency=0x76076880e1ebbce597e6e15c47386cd34de4930f";
const PANCAKESWAP = "https://pancakeswap.finance/swap?inputCurrency=0x76076880e1ebbce597e6e15c47386cd34de4930f";
const FOLGORY = "https://folgory.com/trade-crypto/OPUS_BTC";
const BSC = "https://bscscan.com/address/0x76076880e1ebbce597e6e15c47386cd34de4930f";
const AVALANCHE = "https://avascan.info/blockchain/c/token/0x76076880e1EBBcE597e6E15c47386cd34de4930F";
const LISTING = "https://forms.gle/5Uw6KoweEprkiob56";
const DEVELOPER = "https://github.com/Canopus-Network-OPUS/Bridge";
const BRIDGEFAQ = "https://docs.canopus.network/cross-chain-bridge/canopus-bridge";


const useStyles = makeStyles(({ constants, palette, zIndex }: ITheme) => {
  return createStyles({
    root: {
      padding: "20px 160px",
      display: "flex",
      position: "fixed",
      justifyContent: "space-between",
      //padding: `${constants.generalUnit * 2}px ${constants.generalUnit * 4}px`,
      width: "100%",
      top: 0,
      left: 0,
      backgroundColor: "rgb(26,26,28)",
      color: "white",
      alignItems: "center",
      zIndex: zIndex?.layer2,
      '@media(max-width: 780px)' : {
        padding: "20px 20px"
      }
    },
    links: {
      "& p": {
        fontSize: "16px"
      },
      "& span": {
        //display: "none"
        fillColor: "red !important"
      },
      "& > div": {
        backgroundColor: "rgb(26,26,28)",
        borderRadius: "10px",
        boxShadow: "0px 0px 5px 2px #fff8",
        color: "#ffffff",
        "&:hover": {
          backgroundColor: "rgb(46,46,46)"
        }
      },
      color: "#ffffff",
      textDecoration: "none",
      marginRight: "8px",
      "& svg": {
        fill: "white"
      }
    },
    left: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    logo: {
      height: constants.generalUnit * 5,
      width: constants.generalUnit * 5,
      "& svg, & img": {
        maxHeight: "100%",
        maxWidth: "100%",
      },
    },
    state: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    indicator: {
      display: "block",
      height: 10,
      width: 10,
      borderRadius: "50%",
      backgroundColor: palette.additional["green"][6],
      marginRight: constants.generalUnit,
    },
    address: {
      marginRight: constants.generalUnit,
    },
    network: {},
  });
});

interface IAppHeader {}

const AppHeader: React.FC<IAppHeader> = () => {
  const classes = useStyles();
  const { isReady, address } = useWeb3();
  return (
    <header className={clsx(classes.root)}>
      <div className={classes.left}>
        {/* ADD LOGO HERE */}
        {/* <div className={classes.logo}>
        
        </div> */}
        <img  src={opusLogo} style={{width: "40px", height: "40px"}} alt="Opus Token"/>
        <Typography variant="h2">Bridge</Typography>
      </div>
      <section className={classes.state}>
        <MenuDropdown title="Exchange" animation="rotate" menuItems={[{contents: "Pangolin", onClick: () => window.open(PANGOLIN, '_blank')}, {contents: "Pancakeswap", onClick: () => window.open(PANCAKESWAP, '_blank')}, {contents: "Folgory", onClick: () => window.open(FOLGORY, '_blank')}]} className={classes.links}>
        </MenuDropdown>
        <MenuDropdown title="Blockchain Explorer" animation="rotate" menuItems={[{contents: "BSC", onClick: () => window.open(BSC, '_blank')}, {contents: "Avalanche", onClick: () => window.open(AVALANCHE, '_blank')}]}  className={classes.links}>
        </MenuDropdown>
        <MenuDropdown title="FAQ"  animation="rotate" menuItems={[{contents: "Bridge Tutorials"}, {contents: "Bridge FAQ", onClick: () => window.open(BRIDGEFAQ, '_blank')}, {contents: "Developer Docs", onClick: () => window.open(DEVELOPER, '_blank')}, {contents: "Listing", onClick: () => window.open(LISTING, '_blank')}]}  className={classes.links}>
        </MenuDropdown>
        {isReady &&
          <>
            <div className={classes.indicator}></div>
            <Typography variant="h5" className={classes.address}>
              {address && shortenAddress(address)}
            </Typography>

          </>
        }
      </section>
    </header>
  );
};

export default AppHeader;
