import{A as l,N as O,a as g,S as R,R as p,C as v,c as U,k as W,q as k,p as $,s as j,d as P,r as V,O as C,i as D,h as b,e as M,f as T,M as _,g as d,W as h,j as A,l as x}from"./index-tYVpwtKj.js";import{L as te,m as ne,z as se}from"./index-tYVpwtKj.js";const N={FIVE_MINUTES_IN_MS:3e5};class F{constructor(e){const{enabled:t=!0,nonceRefetchIntervalMs:a=N.FIVE_MINUTES_IN_MS,sessionRefetchIntervalMs:i=N.FIVE_MINUTES_IN_MS,signOutOnAccountChange:s=!0,signOutOnDisconnect:r=!0,signOutOnNetworkChange:c=!0,...y}=e;this.options={enabled:t,nonceRefetchIntervalMs:a,sessionRefetchIntervalMs:i,signOutOnDisconnect:r,signOutOnAccountChange:s,signOutOnNetworkChange:c},this.methods=y}async getNonce(e){const t=await this.methods.getNonce(e);if(!t)throw new Error("siweControllerClient:getNonce - nonce is undefined");return t}async getMessageParams(){var e,t;return await((t=(e=this.methods).getMessageParams)==null?void 0:t.call(e))||{}}createMessage(e){const t=this.methods.createMessage(e);if(!t)throw new Error("siweControllerClient:createMessage - message is undefined");return t}async verifyMessage(e){return await this.methods.verifyMessage(e)}async getSession(){const e=await this.methods.getSession();if(!e)throw new Error("siweControllerClient:getSession - session is undefined");return e}async signIn(){var E,I;const e=l.state.address,t=await this.methods.getNonce(e);if(!e)throw new Error("An address is required to create a SIWE message.");const a=O.caipNetworkIdToNumber((E=g.state.caipNetwork)==null?void 0:E.id);if(!a)throw new Error("A chainId is required to create a SIWE message.");const i=await((I=this.getMessageParams)==null?void 0:I.call(this)),s=this.methods.createMessage({address:`eip155:${a}:${e}`,chainId:a,nonce:t,version:"1",iat:(i==null?void 0:i.iat)||new Date().toISOString(),...i});R.getConnectedConnector()==="AUTH"&&p.pushTransactionStack({view:null,goBack:!1,replace:!0,onCancel(){p.replace("ConnectingSiwe")}});const c=await v.signMessage(s);if(!await this.methods.verifyMessage({message:s,signature:c}))throw new Error("Error verifying SIWE signature");const f=await this.methods.getSession();if(!f)throw new Error("Error verifying SIWE signature");return this.methods.onSignIn&&this.methods.onSignIn(f),U.navigateAfterNetworkSwitch(),f}async signOut(){var e,t;return(t=(e=this.methods).onSignOut)==null||t.call(e),this.methods.signOut()}}const z=/0x[a-fA-F0-9]{40}/u,H=/Chain ID: (?<temp1>\d+)/u;function Y(n){var e;return((e=n.match(z))==null?void 0:e[0])||""}function G(n){var e;return`eip155:${((e=n.match(H))==null?void 0:e[1])||1}`}async function B({address:n,message:e,signature:t,chainId:a,projectId:i}){let s=W(n,e,t);return s||(s=await k(n,e,t,a,i)),s}const o=$({status:"uninitialized"}),u={state:o,subscribeKey(n,e){return j(o,n,e)},subscribe(n){return P(o,()=>n(o))},_getClient(){if(!o._client)throw new Error("SIWEController client not set");return o._client},async getNonce(n){const t=await this._getClient().getNonce(n);return this.setNonce(t),t},async getSession(){try{const e=await this._getClient().getSession();return e&&(this.setSession(e),this.setStatus("success")),e}catch{return}},createMessage(n){const t=this._getClient().createMessage(n);return this.setMessage(t),t},async verifyMessage(n){return await this._getClient().verifyMessage(n)},async signIn(){return await this._getClient().signIn()},async signOut(){var e;const n=this._getClient();await n.signOut(),this.setStatus("ready"),this.setSession(void 0),(e=n.onSignOut)==null||e.call(n)},onSignIn(n){var t;const e=this._getClient();(t=e.onSignIn)==null||t.call(e,n)},onSignOut(){var e;const n=this._getClient();(e=n.onSignOut)==null||e.call(n)},setSIWEClient(n){o._client=V(n),o.status="ready",C.setIsSiweEnabled(n.options.enabled)},setNonce(n){o.nonce=n},setStatus(n){o.status=n},setMessage(n){o.message=n},setSession(n){o.session=n,o.status=n?"success":"ready"}},q=D`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var K=function(n,e,t,a){var i=arguments.length,s=i<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,t):a,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,a);else for(var c=n.length-1;c>=0;c--)(r=n[c])&&(s=(i<3?r(s):i>3?r(e,t,s):r(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s};let S=class extends b{constructor(){var e,t;super(...arguments),this.dappImageUrl=(e=C.state.metadata)==null?void 0:e.icons,this.walletImageUrl=(t=l.state.connectedWalletInfo)==null?void 0:t.icon}firstUpdated(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelectorAll("wui-visual-thumbnail");e!=null&&e[0]&&this.createAnimation(e[0],"translate(18px)"),e!=null&&e[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){var e;return M`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${(e=this.dappImageUrl)==null?void 0:e[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};S.styles=q;S=K([T("w3m-connecting-siwe")],S);var m=function(n,e,t,a){var i=arguments.length,s=i<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,t):a,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,a);else for(var c=n.length-1;c>=0;c--)(r=n[c])&&(s=(i<3?r(s):i>3?r(e,t,s):r(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s};let w=class extends b{constructor(){var e;super(...arguments),this.dappName=(e=C.state.metadata)==null?void 0:e.name,this.isSigning=!1,this.isCancelling=!1}render(){return this.onRender(),M`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}onRender(){u.state.session&&_.close()}async onSign(){var e,t,a;this.isSigning=!0,d.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track",properties:{network:((e=g.state.caipNetwork)==null?void 0:e.id)||"",isSmartAccount:l.state.preferredAccountType===h.ACCOUNT_TYPES.SMART_ACCOUNT}});try{u.setStatus("loading");const i=await u.signIn();return u.setStatus("success"),d.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track",properties:{network:((t=g.state.caipNetwork)==null?void 0:t.id)||"",isSmartAccount:l.state.preferredAccountType===h.ACCOUNT_TYPES.SMART_ACCOUNT}}),i}catch{const r=l.state.preferredAccountType===h.ACCOUNT_TYPES.SMART_ACCOUNT;return r?A.showError("This application might not support Smart Accounts"):A.showError("Signature declined"),u.setStatus("error"),d.sendEvent({event:"SIWE_AUTH_ERROR",type:"track",properties:{network:((a=g.state.caipNetwork)==null?void 0:a.id)||"",isSmartAccount:r}})}finally{this.isSigning=!1}}async onCancel(){var t;this.isCancelling=!0,l.state.isConnected?(await v.disconnect(),_.close()):p.push("Connect"),this.isCancelling=!1,d.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track",properties:{network:((t=g.state.caipNetwork)==null?void 0:t.id)||"",isSmartAccount:l.state.preferredAccountType===h.ACCOUNT_TYPES.SMART_ACCOUNT}})}};m([x()],w.prototype,"isSigning",void 0);m([x()],w.prototype,"isCancelling",void 0);w=m([T("w3m-connecting-siwe-view")],w);function Q(n){return new F(n)}export{u as SIWEController,S as W3mConnectingSiwe,w as W3mConnectingSiweView,Q as createSIWEConfig,te as formatMessage,Y as getAddressFromMessage,G as getChainIdFromMessage,ne as getDidAddress,se as getDidChainId,B as verifySignature};
