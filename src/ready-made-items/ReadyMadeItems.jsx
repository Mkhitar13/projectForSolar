import stylesOfReadyMadeItems from "./readyMadeItems.module.scss";


export const HalfCircle = () => {
      return (
            <div id={stylesOfReadyMadeItems.halfCircle}></div>
      )
}

export const HalfSquare = () => {
      return (
            <div id={stylesOfReadyMadeItems.borderBottomOfOurCommodityFirstLayer}>
                  <div id={stylesOfReadyMadeItems.secondLayer}>
                        <div id={stylesOfReadyMadeItems.thirdLayer}></div>
                  </div>
            </div>
      )
}