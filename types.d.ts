declare namespace MyAPI {
  interface BasicAdvertiserInfo {
    advertiserPlatformId: string;
    id: number;
    name: string;
    platform: number;
  }
  interface BasicFlowSelectInfo {
    avatar: string;
    id: number;
    name: string;
  }
  interface BasicSelectHashInfo {
    avatar: string;
    id: string;
    name: string;
  }
  interface BasicSelectInfo {
    avatar: string;
    id: number;
    name: string;
  }
  interface BasicUserInfo {
    avatar: string;
    id: string;
    name: string;
  }
  interface IdName {
    id: number;
    name: string;
  }
  type AdPlanCatalog =
    'report' |
    'uni_promotion' |
    'uni_promotion_product' |
    'xiaodian';
  type AdReportStatus =
    'SUCCESS' |
    'FAIL' |
    'PROCESSING' |
    'WAITING' |
    'COPYING';
  type AdReportTaskStatus =
    'PROCESSING' |
    'COPYING' |
    'ALL_SUCCESS' |
    'PART_SUCCESS' |
    'ALL_FAIL' |
    'PART_FAIL';
  type CollectTargetType =
    '1' |
    '2';
  type CollectionSource =
    'movie' |
    'own' |
    'cooperation' |
    'reference' |
    'inner_share' |
    'outer_share';
  type CommentStatus =
    '1' |
    '2';
  type CommentType =
    '1' |
    '2' |
    '3';
  type CostCatalog =
    '1' |
    '2' |
    '3' |
    '4' |
    '5' |
    '6' |
    '7' |
    '8' |
    '9' |
    '10' |
    '11';
  type CreativeType =
    '' |
    'h_video' |
    'v_video' |
    'h_big_img' |
    'v_big_img' |
    'h_small_img' |
    'card_square_img';
  type DataTopic =
    'SITE_PROMOTION_POST_DATA_LIVE' |
    'SITE_PROMOTION_POST_DATA_VIDEO' |
    'SITE_PROMOTION_POST_DATA_OTHER' |
    'SITE_PROMOTION_POST_DATA_TITLE' |
    'SITE_PROMOTION_PRODUCT_POST_DATA_TITLE' |
    'SITE_PROMOTION_PRODUCT_POST_DATA_IMAGE' |
    'SITE_PROMOTION_PRODUCT_POST_DATA_VIDEO' |
    'SITE_PROMOTION_PRODUCT_POST_DATA_OTHER';
  type DeliverVideoUrlType =
    'source' |
    'transcode';
  type ExportTaskStatus =
    '1' |
    '2' |
    '3' |
    '4';
  type FlowAc =
    '2G' |
    '3G' |
    '4G' |
    '5G' |
    'WIFI';
  type FlowActionDays =
    '7' |
    '15' |
    '30' |
    '60' |
    '90' |
    '180' |
    '365';
  type FlowActionScene =
    'APP' |
    'E-COMMERCE' |
    'NEWS' |
    'SEARCH';
  type FlowAge =
    'AGE_ABOVE_50' |
    'AGE_BETWEEN_18_23' |
    'AGE_BETWEEN_24_30' |
    'AGE_BETWEEN_31_40' |
    'AGE_BETWEEN_41_49';
  type FlowAllocateRule =
    '1' |
    '2';
  type FlowAudienceMode =
    'AUTO' |
    'AUTO_ORIENTATION' |
    'CUSTOM' |
    'NONE' |
    'ORIENTATION_PACKAGE';
  type FlowAuditStatus =
    'PASS' |
    'REJECT' |
    'IN_PROGRESS';
  type FlowAutoDownLossModel =
    '1' |
    '2' |
    '3';
  type FlowAutoExtendEnabled =
    '0' |
    '1';
  type FlowAutoExtendTargets =
    'AGE' |
    'CUSTOM_AUDIENCE' |
    'GENDER' |
    'INTEREST_ACTION' |
    'REGION';
  type FlowAutoHotItemModel =
    '1' |
    '2' |
    '3';
  type FlowAwemeFanBehaviors =
    'COMMENTED_USER' |
    'FOLLOWED_USER' |
    'GOODS_CARTS_CLICK' |
    'GOODS_CARTS_ORDER' |
    'LIKED_USER' |
    'LIVE_COMMENT' |
    'LIVE_EFFECTIVE_WATCH' |
    'LIVE_EXCEPTIONAL' |
    'LIVE_GOODS_CLICK' |
    'LIVE_GOODS_ORDER' |
    'LIVE_WATCH' |
    'SHARED_USER';
  type FlowAwemeFanBehaviorsDays =
    'DAYS_15' |
    'DAYS_30' |
    'DAYS_60';
  type FlowAwemeStatus =
    'ANCHOR_FORBID' |
    'ANCHOR_REACH_UPPER_LIMIT_TODAY' |
    'NORMAL' |
    'UNKNOWN';
  type FlowBidRoiModel =
    'random' |
    'fixed' |
    'ladder';
  type FlowBidRoiType =
    'bid' |
    'roi';
  type FlowBindType =
    'AWEME_COOPERATOR' |
    'DOU_SHOP_LIVE_SELF' |
    'EXPIRED' |
    'OFFICIAL' |
    'SELF' |
    'TALENT_USER_OWNER' |
    'UNAUTHORIZED' |
    'UNKNOWN';
  type FlowBudgetMode =
    'BUDGET_MODE_DAY' |
    'BUDGET_MODE_SEVEN_DAY_CYCLE' |
    'BUDGET_MODE_TOTAL';
  type FlowCampaignScene =
    'DAILY_SALE' |
    'NEW_CUSTOMER_TRANSFORMATION' |
    'NEW_PRODUCT_BOOST';
  type FlowCarouselSource =
    'JI_CHUANG' |
    'AWEME' |
    'E_COMMERCE';
  type FlowCategoryKeywordType =
    '1' |
    '2';
  type FlowCreativeAutoGenerate =
    '0' |
    '1';
  type FlowCreativeMaterialMode =
    'CUSTOM_CREATIVE' |
    'PROGRAMMATIC_CREATIVE';
  type FlowDeepBidType =
    'COMM_ROI' |
    'MIN' |
    'MIN_SECOND_STAGE' |
    'PACING' |
    'PAY_ROI';
  type FlowDeepExternalAction =
    'AD_CONVERT_TYPE_CARD_ACTIVE' |
    'AD_CONVERT_TYPE_LIVE_PAY_ROI';
  type FlowDescription =
    'COUNTRY' |
    'STATE' |
    'REGION';
  type FlowDimension =
    'TIME_GRANULARITY_DAILY' |
    'TIME_GRANULARITY_HOURLY';
  type FlowDistrict =
    'CITY' |
    'COUNTY' |
    'NONE';
  type FlowElectricFenceRegion =
    '1' |
    '2';
  type FlowExcludeLimitedRegion =
    '0' |
    '1';
  type FlowExternalAction =
    'AD_CONVERT_TYPE_CARD_ACTIVE' |
    'AD_CONVERT_TYPE_LIVE_CLICK_PRODUCT_ACTION' |
    'AD_CONVERT_TYPE_LIVE_PAY_ROI' |
    'AD_CONVERT_TYPE_LIVE_SUCCESSORDER_ACTION' |
    'AD_CONVERT_TYPE_LIVE_SUCCESSORDER_PAY' |
    'AD_CONVERT_TYPE_LIVE_SUCCESSORDER_PAY_7DAYS' |
    'AD_CONVERT_TYPE_LIVE_SUCCESSORDER_SETTLE' |
    'AD_CONVERT_TYPE_NEW_FOLLOW_ACTION' |
    'AD_CONVERT_TYPE_QC_FOLLOW_ACTION' |
    'AD_CONVERT_TYPE_QC_MUST_BUY' |
    'AD_CONVERT_TYPE_SHOPPING';
  type FlowFileUploadStatus =
    'SUCCESS' |
    'FAIL' |
    'PROCESSING';
  type FlowGender =
    'GENDER_FEMALE' |
    'GENDER_MALE' |
    'NONE';
  type FlowGroupRule =
    '1' |
    '2' |
    '3' |
    '4' |
    '5';
  type FlowHasMore =
    '0' |
    '1';
  type FlowImageMode =
    'SQUARE' |
    'SMALL' |
    'LARGE' |
    'VIDEO_LARGE' |
    'VIDEO_VERTICAL' |
    'LARGE_VERTICAL' |
    'UNION_SPLASH' |
    'AWEME_LIVE_ROOM';
  type FlowImageSource =
    'E_COMMERCE' |
    'CREATIVE_CENTER' |
    'SQUARE' |
    'JI_CHUANG';
  type FlowInterestActionType =
    '1' |
    '2';
  type FlowIsHomepageHide =
    '0' |
    '1';
  type FlowIsRecommend =
    '0' |
    '1';
  type FlowLabAdType =
    'NOT_LAB_AD' |
    'LAB_AD';
  type FlowLanguage =
    'ZH_CN' |
    'ZH_CN_GOV';
  type FlowLevel =
    'FOUR_LEVEL' |
    'NONE' |
    'ONE_LEVEL' |
    'THREE_LEVEL' |
    'TWO_LEVEL';
  type FlowLivePlatformTags =
    'ABNORMAL_ACTIVE' |
    'AWEME_FANS' |
    'LARGE_FANSCOUNT';
  type FlowLiveScheduleType =
    'SCHEDULE_FROM_NOW' |
    'SCHEDULE_START_END' |
    'SCHEDULE_TIME_FIXEDRANGE';
  type FlowLocationType =
    'ALL' |
    'CURRENT' |
    'HOME' |
    'TRAVEL';
  type FlowMarketingGoal =
    'VIDEO_PROM_GOODS' |
    'LIVE_PROM_GOODS';
  type FlowMarketingScene =
    'FEED' |
    'SEARCH' |
    'SHOPPING_MALL';
  type FlowMaterialAwemeShareStatus =
    'PENDING' |
    'SUCCESS';
  type FlowMaterialDeliveryType =
    'ADVERTISER_OFFLINE_BUDGET' |
    'ADVERTISER_PRE_OFFLINE_BUDGET' |
    'AD_AUDIT' |
    'AD_DISABLE' |
    'AD_EXTERNAL_URL_DISABLE' |
    'AD_OFFLINE_AUDIT' |
    'AD_OFFLINE_BUDGET' |
    'AD_PRE_OFFLINE_BUDGET' |
    'AD_REAUDIT' |
    'AUDIT' |
    'AWEME_ITEM_DISABLED' |
    'CAMPAIGN_DISABLE' |
    'CAMPAIGN_OFFLINE_BUDGET' |
    'CAMPAIGN_PRE_OFFLINE_BUDGET' |
    'CREATE' |
    'DELETE' |
    'DELIVERY_OK' |
    'DISABLE' |
    'ERROR' |
    'FROZEN' |
    'LIVE_CAN_NOT_LAUNCH' |
    'NO_SCHEDULE' |
    'OFFLINE_AUDIT' |
    'OFFLINE_BALANCE' |
    'PRE_ONLINE' |
    'REAUDIT' |
    'TIME_DONE' |
    'TIME_NO_REACH';
  type FlowMaterialType =
    'VIDEO' |
    'IMAGE' |
    'CAROUSEL' |
    'TITLE' |
    'LIVE_ROOM';
  type FlowMonitoringAdType =
    '1' |
    '2';
  type FlowMonitoringFrequency =
    '1' |
    '2' |
    '3' |
    '5' |
    '10' |
    '30';
  type FlowMonitoringModel =
    'All' |
    'Specify';
  type FlowMorePeopleMode =
    'CUSTOM' |
    'NONE';
  type FlowNewCustomer =
    'NONE' |
    'NO_BUY' |
    'NO_BUY_BRAND' |
    'NO_BUY_DOUYIN';
  type FlowNotificationFrequency =
    '1' |
    '3' |
    '10' |
    '-1';
  type FlowOptStatus =
    'DELETE' |
    'DISABLE' |
    'ENABLE' |
    'QUOTA_DISABLE' |
    'ROI2_DISABLE' |
    'SYSTEM_DISABLE';
  type FlowOrderField =
    'COMPETITION' |
    'DEFAULT' |
    'PV' |
    'RELEVANCE';
  type FlowOrderType =
    'ASC' |
    'DESC';
  type FlowPlatform =
    'ANDROID' |
    'IOS';
  type FlowPromotionCardButtonSmartOptimization =
    '0' |
    '1';
  type FlowQcpxMode =
    'QCPX_MODE_DEFAULT' |
    'QCPX_MODE_OFF' |
    'QCPX_MODE_ON';
  type FlowScanTimePeriod =
    '1' |
    '2' |
    '3' |
    '7';
  type FlowScheduleType =
    'SCHEDULE_FROM_NOW' |
    'SCHEDULE_START_END';
  type FlowSearchExtended =
    '1' |
    '2';
  type FlowSmartBidType =
    'SMART_BID_CONSERVATIVE' |
    'SMART_BID_CUSTOM';
  type FlowSmartInterestAction =
    'CUSTOM' |
    'RECOMMEND';
  type FlowStatus =
    'ADVERTISER_OFFLINE_BUDGET' |
    'ADVERTISER_PRE_OFFLINE_BUDGET' |
    'AUDIT' |
    'AUDIT_STATUS_ERROR' |
    'AWEME_ACCOUNT_DISABLED' |
    'CAMPAIGN_DISABLE' |
    'CAMPAIGN_OFFLINE_BUDGET' |
    'CAMPAIGN_PRE_OFFLINE_BUDGET' |
    'CREATE' |
    'DELETE' |
    'DELIVERY_OK' |
    'DISABLE' |
    'DRAFT' |
    'ERROR' |
    'EXTERNAL_URL_DISABLE' |
    'FROZEN' |
    'LIVE_ROOM_OFF' |
    'NO_SCHEDULE' |
    'OFFLINE_AUDIT' |
    'OFFLINE_BALANCE' |
    'OFFLINE_BUDGET' |
    'PRE_OFFLINE_BUDGET' |
    'PRE_ONLINE' |
    'QUOTA_DISABLE' |
    'REAUDIT' |
    'SYSTEM_DISABLE' |
    'TIME_DONE' |
    'TIME_NO_REACH';
  type FlowSubDistrict =
    'FOUR_LEVEL' |
    'NONE' |
    'ONE_LEVEL' |
    'THREE_LEVEL' |
    'TWO_LEVEL';
  type FlowSubmitRule =
    '1' |
    '2';
  type FlowSuggestReason =
    'CLICK' |
    'DARKHORSE' |
    'LOW_COST' |
    'POTENTIAL' |
    'PREFERENCE';
  type FlowTemplateType =
    '1' |
    '2';
  type FlowTitleType =
    'AWEME_CAROUSEL' |
    'COMMODITY_CARD' |
    'CUSTOM';
  type FlowTriggerMode =
    '1' |
    '2';
  type FlowVideoScheduleType =
    'SCHEDULE_FROM_NOW' |
    'SCHEDULE_START_END';
  type FlowVideoSource =
    'E_COMMERCE' |
    'LIVE_HIGHLIGHT' |
    'BP' |
    'VIDEO_CAPTURE' |
    'ARTHUR' |
    'STAR&即合共享素材' |
    'TADA' |
    'CREATIVE_CENTER' |
    'AWEME' |
    'AGENT';
  type HavingCostType =
    'YES' |
    'NO';
  type MovieDeriveStatus =
    '1' |
    '2' |
    '3' |
    '4' |
    '5' |
    '6';
  type NoticeChannelStatus =
    '1' |
    '2';
  type NoticeChannelType =
    'dingtalk' |
    'feishu';
  type OssSyncStatus =
    '0' |
    '1' |
    '2';
  interface PersonalStatsConfig {
    item: any;
    name: string;
  }
  type PersonalStatsItem =
    'upload_movie' |
    'upload_video' |
    'upload_image' |
    'upload_doc' |
    'upload_script' |
    'upload_audio' |
    'upload_material' |
    'upload_own_material' |
    'upload_cooper_material' |
    'upload_refer_material' |
    'hot_movie' |
    'hot_video_material' |
    'ad_plan' |
    'ad_cost' |
    'ad_deal';
  type ProjectStatus =
    '1' |
    '2' |
    '3' |
    '4' |
    '5' |
    '6';
  type PublishQueueSecondCatalog =
    'image' |
    'atlas' |
    'copywriting' |
    'adcomment';
  type QianchuanMaterialLabel =
    'first_pub' |
    'high_quality' |
    'low_quality' |
    'inefficient' |
    'similar' |
    'similar_queue' |
    'carry';
  type RefrenctContentType =
    'upload' |
    'relate' |
    'link';
  type ShareCatalog =
    'outer' |
    'inner';
  type StatPlatformType =
    '0' |
    '1' |
    '2' |
    '3';
  type StatTargetType =
    '0' |
    '1' |
    '2' |
    '3' |
    '4';
  type SubscribeDataDimension =
    'personal' |
    'project' |
    'department' |
    'enterprise';
  type SubscribeReportType =
    'hourly' |
    'daily' |
    'weekly' |
    'monthly';
  type TranscodeStatus =
    '0' |
    '1' |
    '2' |
    '3';
  type UniLiveCreatedOrUpdatedStatus =
    'CREATE_SUCCESS' |
    'CREATE_FAILED' |
    'UPDATE_SUCCESS' |
    'UPDATE_FAILED' |
    'MATERIAL_PENDING';
  type UnitType =
    '0' |
    '1' |
    '2';
  interface CreateCompanyReq {
    name: string;
  }
  interface DiskToolScanCallbackResp {
    companyId: string;
    companyName: string;
    innerDomain: string;
    password: string;
    status: number;
    userId: string;
    userName: string;
  }
  interface GetCaptchaResp {
    id: string;
    img: string;
  }
  interface GetLicenseReq {
    company: string;
    rport: number;
    sip: string;
    sport: number;
    token: string;
  }
  interface GetSmsVerifyCodeReq {
    id: string;
    signature: string;
    value: string;
  }
  interface JoinCompanyResp {
    joinedCompanyId: string;
  }
  interface QrLoginReq {
    data: any;
    env: string;
    terminalType: string;
  }
  interface QrLoginResp {
    sceneId: string;
    url: string;
  }
  interface RegisterReq {
    companyId: string;
    companyName: string;
    name: string;
    password: string;
    registerCode: string;
    tel: string;
    userName: string;
    vcode: string;
  }
  interface ReportDiskToolVersionReq {
    signature: string;
  }
  interface ScanCallbackReq {
    : number;
    agreeToUserAndPrivacy: boolean;
    companyId: string;
    sceneId: string;
  }
  interface ScanCallbackResp {
    avatar: string;
    compaines: UserCompanies[];
    hasAuditingCompany: boolean;
    hasCreatedCompany: boolean;
    inviteCode: string;
    isBind: boolean;
    name: string;
    registerCode: string;
    token: string;
    wechatAlias: string;
  }
  interface SelectCompanyResp {
    token: string;
  }
  interface TerminalScanCallbackResp {
    auditStatus: number;
    companyName: string;
    innerDomain: string;
    license: string;
  }
  interface AdAsAdTemplateResp {
    adTemplate: GetDetailAdTemplateInner;
  }
  interface AdBasicInfoTemplate {
    advertiserIds: number[];
    detail: any;
    id: number;
    name: string;
    teamId: number;
    templateType: any;
  }
  interface AdBasicInfoTemplateChooseListResp {
    list: BasicSelectInfo[];
  }
  interface AdBasicInfoTemplateDetail {
    adName: string;
    adRealName: string;
    creativeAutoGenerate: any;
    deliverySetting: any;
    isHomepageHide: any;
    marketingGoal: any;
    programmaticCreativeCard: any;
  }
  interface AdBasicInfoTemplatePromotionCardMaterialIdItem {
    id: string;
    url: string;
  }
  interface AdBatchOptReq {
    adIds: number[];
  }
  interface AdBatchOptResp {
    results: AdBatchOptResult[];
  }
  interface AdBatchOptResult {
    adId: number;
    adName: string;
    msg: string;
    optResult: boolean;
    optType: any;
  }
  interface AdBidBatchUpdate {
    adId: number;
    bid: number;
  }
  interface AdBidBatchUpdateReq {
    updates: AdBidBatchUpdate[];
  }
  interface AdBidRoiBatchUpdate {
    adId: number;
    bidRoi: number;
  }
  interface AdBidRoiBatchUpdateReq {
    updates: AdBidRoiBatchUpdate[];
  }
  interface AdBudgetBatchUpdateReq {
    adIds: number[];
    budget: number;
  }
  interface AdChooseListInner {
    advertiserId: number;
    advertiserName: string;
    subList: BasicFlowSelectInfo[];
  }
  interface AdChooseListReq {
    advertiserIds: number[];
    marketingGoal: any;
    marketingScene: any;
  }
  interface AdChooseListResp {
    list: AdChooseListInner[];
  }
  interface AdCreative {
    imageMaterial: any;
    imageMode: any;
    isTranscode: boolean;
    videoMaterial: any;
  }
  interface AdCreativeCommon {
    adKeywords: string[];
    creativeMaterialMode: any;
    firstIndustryId: number;
    firstIndustryIdItem: any;
    name: string;
    secondIndustryId: number;
    secondIndustryIdItem: any;
    thirdIndustryId: number;
    thirdIndustryIdItem: any;
  }
  interface AdCreativeGroup {
    adCreatives: AdCreative[];
    adCreativesArr: AdTemplateAdCreativesArrInner[];
    creativeMaterialMode: any;
    imageChecked: boolean;
    isAwemeLiveRoom: boolean;
    name: string;
    videoChecked: boolean;
  }
  interface AdDataTableListSummary {
    adAllOrderCountSettleRate14d: number;
    adAllOrderCountSettleRate7d: number;
    adAllOrderGmvSettleRate14d: number;
    adAllOrderGmvSettleRate7d: number;
    adAllOrderSettleAmount14d: number;
    adAllOrderSettleAmount7d: number;
    adAllOrderSettleCost14d: number;
    adAllOrderSettleCost7d: number;
    adAllOrderSettleCount14d: number;
    adAllOrderSettleCount7d: number;
    adAllOrderSettleRoi14d: number;
    adAllOrderSettleRoi7d: number;
    adOrderGmvRefundRate14d: number;
    adOrderGmvRefundRate7d: number;
    adOrderRefundRate14d: number;
    adOrderRefundRate7d: number;
    allOrderCreateRoi7days: number;
    allOrderPayCount7days: number;
    allOrderPayGmv7days: number;
    allOrderPayRoi7days: number;
    allOrderRefundAmount14d: number;
    allOrderRefundAmount7d: number;
    allOrderRefundCount14d: number;
    allOrderRefundCount7d: number;
    attributionConvertCnt: number;
    attributionConvertCost: number;
    attributionConvertRate: number;
    attributionDeepConvertCnt: number;
    attributionDeepConvertCost: number;
    attributionDeepConvertRate: number;
    clickCnt: number;
    cpcPlatform: number;
    cpmPlatform: number;
    createOrderAmount: number;
    createOrderCount: number;
    createOrderCouponAmount: number;
    createOrderRoi: number;
    ctr: number;
    deepConvertCnt: number;
    deepConvertCost: number;
    deepConvertRate: number;
    dyComment: number;
    dyFollow: number;
    dyLike: number;
    dyShare: number;
    ecpConvertCnt: number;
    ecpConvertRate: number;
    ecpCpaPlatform: number;
    indirectOrderCreateCount7days: number;
    indirectOrderCreateGmv7days: number;
    indirectOrderPayCount7days: number;
    indirectOrderPayGmv7days: number;
    indirectOrderPrepayCount7days: number;
    indirectOrderPrepayGmv7days: number;
    indirectOrderUnfinishedEstimateGmv7days: number;
    liveFansClubJoinCnt: number;
    livePayOrderCostPerOrder: number;
    liveWatchOneMinuteCount: number;
    lubanLiveClickProductCnt: number;
    lubanLiveCommentCnt: number;
    lubanLiveEnterCnt: number;
    lubanLiveGiftAmount: number;
    lubanLiveGiftCnt: number;
    lubanLiveShareCnt: number;
    lubanLiveSlidecartClickCnt: number;
    payOrderAmount: number;
    payOrderCostPerOrder: number;
    payOrderCount: number;
    payOrderCouponAmount: number;
    play25FeedBreak: number;
    play50FeedBreak: number;
    play75FeedBreak: number;
    playDuration3s: number;
    playOver: number;
    playOverRate: number;
    playOverRate3s: number;
    prepayAndPayOrderRoi: number;
    prepayOrderAmount: number;
    prepayOrderCount: number;
    qianchuanAuthorFirstOrderCnt: number;
    qianchuanAuthorFirstOrderConvertCost: number;
    qianchuanAuthorFirstOrderDirectPayGmv: number;
    qianchuanAuthorFirstOrderDirectPayOrderRoi: number;
    qianchuanAuthorFirstOrderLtv30: number;
    qianchuanAuthorFirstOrderRate: number;
    qianchuanAuthorFirstOrderRoi30: number;
    qianchuanBrandFirstOrderCnt: number;
    qianchuanBrandFirstOrderConvertCost: number;
    qianchuanBrandFirstOrderDirectPayGmv: number;
    qianchuanBrandFirstOrderDirectPayOrderRoi: number;
    qianchuanBrandFirstOrderLtv30: number;
    qianchuanBrandFirstOrderRate: number;
    qianchuanBrandFirstOrderRoi30: number;
    qianchuanFirstOrderCnt: number;
    qianchuanFirstOrderConvertCost: number;
    qianchuanFirstOrderDirectPayGmv: number;
    qianchuanFirstOrderDirectPayOrderRoi: number;
    qianchuanFirstOrderLtv30: number;
    qianchuanFirstOrderRate: number;
    qianchuanFirstOrderRoi30: number;
    showCnt: number;
    statCost: number;
    totalPlay: number;
    unfinishedEstimateOrderGmv: number;
  }
  interface AdRecommendKeywordsReq {
    advertiserIds: number[];
    awemeIds: number[];
    orderField: any;
    orderType: any;
    page: number;
    pageSize: number;
    productIds: number[];
    searchWord: string;
    suggestReason: any;
  }
  interface AdRecommendKeywordsResp {
    records: QianchuanAdRecommendKeywordsGetV10ResponseDataListInner[];
    total: number;
  }
  interface AdReportStatusCountStat {
    count: number;
    reportStatus: AdReportStatus;
  }
  interface AdReportTaskAsAdTemplateResp {
    adTemplate: GetDetailAdTemplateInner;
  }
  interface AdReportTaskDetailListRecord {
    adId: number;
    adRealName: string;
    adReportTaskUuid: string;
    adTemplateId: number;
    advertiserId: number;
    advertiserName: string;
    bidRoi: number;
    campaignId: number;
    campaignName: string;
    companyId: number;
    copywriterName: string;
    createdAt: string;
    creativeCommonName: string;
    creativeGroupName: string;
    customReportTime: number;
    id: number;
    orientationName: string;
    reportMsg: string;
    reportStatus: any;
    reqParams: string;
    taskId: string;
    updatedAt: string;
    userId: number;
  }
  interface AdReportTaskDetailListResp {
    records: AdReportTaskDetailListRecord[];
    statusCount: Record<string, any>;
    total: number;
  }
  interface AdReportTaskListRecord {
    adCount: number;
    adTemplateId: number;
    adTemplateName: string;
    bidRoiCount: number;
    campaignScene: any;
    companyId: number;
    copywriterCount: number;
    createdAt: string;
    createdTime: number;
    creativeCommonCount: number;
    creativeGroupCount: number;
    detail: string;
    id: string;
    labAdType: any;
    marketingGoal: any;
    marketingScene: any;
    name: string;
    orientationCount: number;
    status: any;
    submitRule: any;
    updatedAt: string;
    userInfo: BasicUserInfo;
    userId: number;
  }
  interface AdReportTaskListResp {
    records: AdReportTaskListRecord[];
    statusStat: Record<string, any>;
    total: number;
  }
  interface AdReportTaskRetryReq {
    adReportTaskUuid: string;
  }
  interface AdTemplate {
    adBasicInfoTemplate: any;
    adCreativeCommons: AdCreativeCommon[];
    adCreativeGroups: AdCreativeGroup[];
    advertiserIds: number[];
    copywriters: Copywriter[];
    id: number;
    isCollect: boolean;
    isEnable: boolean;
    name: string;
    orientationTemplates: AdTemplateOrientationTemplate[];
    submitSetting: any;
    targetDelivery: any;
    teamId: number;
    templateType: any;
  }
  interface AdTemplateAdBasicInfoTemplate {
    adBasicInfoTemplate: any;
    adBasicInfoTemplateId: number;
    campaigns: AdTemplateCampaign[];
    marketingGoal: any;
    searchKeywords: SearchKeyword[];
  }
  interface AdTemplateAdCreativesArrInner {
    adCreative: AdCreative;
    alias: string;
    catalog: string;
    duration: number;
    id: string;
    isTranscode: boolean;
    md5: string;
    thumb: string;
    transcodeMd5: string;
  }
  interface AdTemplateAwemeProducer {
    advertiser: any;
    advertiserId: number;
    aweme: any;
    awemeId: number;
    brand: any;
    brandId: number;
    product: any;
    productId: number;
    shop: any;
    shopId: number;
  }
  interface AdTemplateCampaign {
    advertiserId: number;
    budget: number;
    budgetMode: any;
    flowCampaignId: number;
    name: string;
  }
  interface AdTemplateChooseListResp {
    list: BasicSelectInfo[];
  }
  interface AdTemplateGJsonCheckReq {
    adBasicInfoTemplate: any;
    adCreativeCommons: AdCreativeCommon[];
    adCreativeGroups: AdCreativeGroup[];
    advertiserIds: number[];
    copywriters: Copywriter[];
    id: number;
    isCheckProtect: boolean;
    isCollect: boolean;
    isEnable: boolean;
    name: string;
    orientationTemplates: AdTemplateOrientationTemplate[];
    submitSetting: any;
    targetDelivery: any;
    templateType: any;
  }
  interface AdTemplateGJsonCheckResp {
    errList: GJsonCheckErrSub[];
    gJsonCheckErrType: any;
  }
  interface AdTemplateOrientationTemplate {
    name: string;
    orientationTemplate: any;
    orientationTemplateId: number;
  }
  interface AddUsersToRoleReq {
    roleId: number;
    userIds: string[];
  }
  interface AdminCategories {
    children: AdminCategories[];
    id: number;
    name: string;
    parentId: number;
    serialNumber: number;
  }
  interface AdminCategoriesFilterByTypeCatalogsReq {
    materialTypeCatalogs: MaterialCatalogsKeyByTypeMap;
  }
  interface AdminCategoryDetailResp {
    categoryMaterialTypeCatalogRelations: any;
    categoryRoleSettings: any;
    categoryTagGroupSettings: CategoryTagGroupsItem[];
    createdAt: string;
    creatorInfo: BasicUserInfo;
    id: number;
    materialCatalog: any;
    materialType: any;
    name: string;
    parentCategoryName: string;
    parentId: number;
    serialNumber: number;
  }
  interface AdminCategoryGlobalRequiredSetting {
    isRequired: number;
    materialCatalogs: MaterialCatalogsKeyByTypeMap;
  }
  interface AdminCategoryGlobalRequiredSettingReq {
    isRequired: number;
    materialCatalogs: MaterialCatalogsKeyByTypeMap;
  }
  interface AdminCompanyBasicInfoItem {
    avatar: string;
    catalog: string;
    id: string;
    innerCount: number;
    name: string;
    outerCount: number;
  }
  interface AdminCompanyBasicInfoUpdateReq {
    avatar: string;
    name: string;
  }
  interface AdminCompanyInfo {
    advertisementUserCount: number;
    advertisementUserLimit: number;
    avatar: string;
    createdAt: string;
    douyinAccountCount: number;
    douyinAccountLimit: number;
    freeStorage: number;
    id: string;
    innerCount: number;
    innerDomain: string;
    innerLimit: number;
    isDirector: boolean;
    isExistOss: boolean;
    lastReportTime: number;
    license: string;
    name: string;
    ossBucketConfigSize: number;
    ossBucketConfigTraffic: number;
    outerCount: number;
    outerDomain: string;
    outerLimit: number;
    sizeCount: number;
    sizeLimit: number;
    sizeLimitDesc: string;
    terminalIp: string;
    terminalVersion: string;
    totalStorage: number;
    updatedAt: string;
  }
  interface AdminCompanyUserLimitResp {
    advertisementUserCount: number;
    advertisementUserLimit: number;
    douyinAccountCount: number;
    douyinAccountLimit: number;
    innerCount: number;
    innerLimit: number;
    outerCount: number;
    outerLimit: number;
  }
  interface AdminCreatePublicTagReq {
    authorizeBegin: number;
    authorizeEnd: number;
    name: string;
    serialNumber: number;
    state: TagState;
  }
  interface AdminDepartment {
    catalog: string;
    children: AdminDepartment[];
    id: number;
    layer: number;
    name: string;
    parentId: number;
    path: string[];
  }
  interface AdminDepartmentAddUsersReq {
    departmentIds: number[];
    ids: string[];
    teamIds: number[];
  }
  interface AdminDepartmentBasicInfo {
    directorInfo: BasicUserInfo;
    id: number;
    name: string;
    parentId: number;
  }
  interface AdminDepartmentCompany {
    avatar: string;
    directorInfo: BasicUserInfo;
    id: number;
    name: string;
  }
  interface AdminDepartmentHash {
    catalog: string;
    children: AdminDepartmentHash[];
    id: string;
    layer: number;
    name: string;
    parentId: number;
    path: string[];
  }
  interface AdminDepartmentUserRecord {
    avatar: string;
    departments: AdminDepartment[];
    id: string;
    isDirector: boolean;
    name: string;
    tel: string;
    wechatAlias: string;
  }
  interface AdminDepartmentUsersResp {
    count: number;
    records: AdminDepartmentUserRecord[];
  }
  interface AdminDepartmentsResp {
    company: AdminDepartmentCompany;
    departments: AdminDepartment[];
  }
  interface AdminLeftUserRecord {
    avatar: string;
    beforeLeaveDepartmentNames: string;
    beforeLeaveRoleNames: string;
    id: string;
    leaveAt: number;
    leaveDays: number;
    name: string;
    tel: string;
  }
  interface AdminLeftUsersResp {
    count: number;
    records: AdminLeftUserRecord[];
  }
  interface AdminMaterialStatusItem {
    companyId: number;
    createdAt: string;
    creator: number;
    creatorInfo: BasicUserInfo;
    id: number;
    isDefault: number;
    materialTypeCatalogRelations: any;
    name: string;
    serialNumber: number;
    showNotify: number;
    style: string;
    updatedAt: string;
  }
  interface AdminMaterialStatusSetReq {
    force: number;
    id: number;
    switch: number;
  }
  interface AdminMaterialStatusesResp {
    count: number;
    records: AdminMaterialStatusItem[];
  }
  interface AdminNotification {
    companyId: string;
    createdAt: string;
    detail: any;
    id: string;
    isRead: number;
    notificationContent: string;
    notificationType: number;
    notificationTypeName: string;
    receiverUser: BasicUserInfo;
    senderUser: BasicUserInfo;
    updatedAt: string;
  }
  interface AdminPermission {
    children: AdminPermission[];
    createdAt: string;
    id: number;
    key: string;
    name: string;
    parentId: number;
    updatedAt: string;
  }
  interface AdminPublicTagBatchDeleteReq {
    tagIds: number[];
  }
  interface AdminPublicTagGroupCategoryIsRequiredSettingReq {
    categoryId: number;
    isRequired: number;
    materialCatalog: MaterialTypeCatalogRelationMaterialCatalog;
    materialType: MaterialTypeCatalogRelationMaterialType;
  }
  interface AdminPublicTagGroupDetailResp {
    categorySettings: TagGroupCategorySettings[];
    createdAt: string;
    creatorInfo: BasicUserInfo;
    id: number;
    materialTypeCatalogAndTagGroupSettings: MaterialTypeCatalogAndTagGroupSettingsItem[];
    name: string;
    serialNumber: number;
    state: TagGroupState;
    tags: TagGroupDetailTagItem[];
  }
  interface AdminPublicTagMoveReq {
    tagGroupId: number;
  }
  interface AdminRoleUsersRecord {
    avatar: string;
    catalog: string;
    departments: AdminDepartment[];
    id: string;
    isCompanyCreator: boolean;
    name: string;
    tel: string;
    wechatAlias: string;
  }
  interface AdminRoleUsersResp {
    count: number;
    records: AdminRoleUsersRecord[];
  }
  interface AdminTeamAddUsersReq {
    departmentIds: number[];
    teamId: number;
    teamIds: number[];
    userIds: string[];
  }
  interface AdminTeamItem {
    directorInfo: BasicUserInfo;
    id: number;
    name: string;
  }
  interface AdminTeamMoveUsersToReq {
    fromTeamId: number;
    toTeamId: number;
    userIds: string[];
  }
  interface AdminTeamRemoveUsersReq {
    fromTeamId: number;
    userIds: string[];
  }
  interface AdminTeamUserRecord {
    avatar: string;
    departments: AdminDepartment[];
    id: string;
    isDirector: boolean;
    name: string;
    tel: string;
    wechatAlias: string;
  }
  interface AdminTeamUsersResp {
    count: number;
    records: AdminTeamUserRecord[];
  }
  interface AdminUserBatchBanReq {
    ids: string[];
  }
  interface AdminUserBatchRecoverBanReq {
    ids: string[];
  }
  interface AdminUserItemDepartment {
    id: number;
    name: string;
    path: string[];
  }
  interface AdminUserItemRole {
    id: number;
    name: string;
  }
  interface AdminUserLoginLog {
    city: string;
    companyId: number;
    createdAt: string;
    id: number;
    ipAddr: string;
    name: string;
    province: string;
    status: number;
    updatedAt: string;
    userId: number;
  }
  interface AdminUserRecord {
    avatar: string;
    createdAt: string;
    departments: AdminUserItemDepartment[];
    id: string;
    inviter: BasicUserInfo;
    isCompanyCreator: boolean;
    joinedAt: number;
    lastLoginIp: string;
    lastLoginIpLocation: string;
    lastLoginTime: number;
    name: string;
    roles: AdminUserItemRole[];
    status: number;
    statusDesc: string;
    tel: string;
    wechatAlias: string;
  }
  interface AdminUserTransferResourcesReq {
    fromUserId: string;
    receiveUserId: string;
  }
  interface AdminUsersResp {
    count: number;
    records: AdminUserRecord[];
  }
  interface Advertiser {
    adminUser: any;
    advertiserId: number;
    agentId: number;
    agentName: string;
    createdAt: string;
    id: number;
    isCollect: boolean;
    isEnable: boolean;
    isProtect: boolean;
    name: string;
    platform: number;
    platformName: string;
    refreshTime: string;
    status: number;
    statusName: string;
    teamId: number;
    teamName: string;
    users: BasicUserInfo[];
  }
  interface AdvertiserAgentChooseListItem {
    agentId: number;
    agentName: string;
  }
  interface AdvertiserChooseListAdTotalInner {
    adTotal: number;
    advertiserPlatformId: string;
    id: number;
    name: string;
    platform: number;
  }
  interface AdvertiserChooseListAdTotalResp {
    list: AdvertiserChooseListAdTotalInner[];
  }
  interface AdvertiserChooseListItem {
    advertiserId: number;
    isCollect: boolean;
    name: string;
    status: number;
  }
  interface AdvertiserDataTableListRecord {
    accountGeneralTotal: number;
    accountTotal: number;
    adAllOrderCountSettleRate14d: number;
    adAllOrderCountSettleRate7d: number;
    adAllOrderGmvSettleRate14d: number;
    adAllOrderGmvSettleRate7d: number;
    adAllOrderSettleAmount14d: number;
    adAllOrderSettleAmount7d: number;
    adAllOrderSettleCost14d: number;
    adAllOrderSettleCost7d: number;
    adAllOrderSettleCount14d: number;
    adAllOrderSettleCount7d: number;
    adAllOrderSettleRoi14d: number;
    adAllOrderSettleRoi7d: number;
    adOrderGmvRefundRate14d: number;
    adOrderGmvRefundRate7d: number;
    adOrderRefundRate14d: number;
    adOrderRefundRate7d: number;
    advertiserId: number;
    advertiserIsValid: boolean;
    advertiserName: string;
    agentId: number;
    agentName: string;
    allOrderCreateRoi7days: number;
    allOrderPayCount7days: number;
    allOrderPayGmv7days: number;
    allOrderPayRoi7days: number;
    allOrderRefundAmount14d: number;
    allOrderRefundAmount7d: number;
    allOrderRefundCount14d: number;
    allOrderRefundCount7d: number;
    attributionConvertCnt: number;
    attributionConvertCost: number;
    attributionConvertRate: number;
    attributionDeepConvertCnt: number;
    attributionDeepConvertCost: number;
    attributionDeepConvertRate: number;
    clickCnt: number;
    companyId: number;
    convertCnt: number;
    convertCost: number;
    convertRate: number;
    cpcPlatform: number;
    cpmPlatform: number;
    createOrderAmount: number;
    createOrderCount: number;
    createOrderCouponAmount: number;
    createOrderRoi: number;
    createdAt: string;
    creator: number;
    ctr: number;
    deepConvertCnt: number;
    deepConvertCost: number;
    deepConvertRate: number;
    dutyUserName: string;
    dyComment: number;
    dyFollow: number;
    dyLike: number;
    dyShare: number;
    id: number;
    indirectOrderCreateCount7days: number;
    indirectOrderCreateGmv7days: number;
    indirectOrderPayCount7days: number;
    indirectOrderPayGmv7days: number;
    indirectOrderPrepayCount7days: number;
    indirectOrderPrepayGmv7days: number;
    indirectOrderUnfinishedEstimateGmv7days: number;
    isCollect: boolean;
    isEnable: boolean;
    isProtect: boolean;
    livePayOrderCostPerOrder: number;
    lubanLiveClickProductCnt: number;
    lubanLiveEnterCnt: number;
    name: string;
    payOrderAmount: number;
    payOrderCostPerOrder: number;
    payOrderCount: number;
    payOrderCouponAmount: number;
    platform: number;
    play25FeedBreak: number;
    play50FeedBreak: number;
    play75FeedBreak: number;
    playDuration3s: number;
    playOver: number;
    playOverRate: number;
    playOverRate3s: number;
    prepayAndPayOrderRoi: number;
    prepayOrderAmount: number;
    prepayOrderCount: number;
    qianchuanAuthorFirstOrderCnt: number;
    qianchuanAuthorFirstOrderConvertCost: number;
    qianchuanAuthorFirstOrderDirectPayGmv: number;
    qianchuanAuthorFirstOrderDirectPayOrderRoi: number;
    qianchuanAuthorFirstOrderLtv30: number;
    qianchuanAuthorFirstOrderRate: number;
    qianchuanAuthorFirstOrderRoi30: number;
    qianchuanBrandFirstOrderCnt: number;
    qianchuanBrandFirstOrderConvertCost: number;
    qianchuanBrandFirstOrderDirectPayGmv: number;
    qianchuanBrandFirstOrderDirectPayOrderRoi: number;
    qianchuanBrandFirstOrderLtv30: number;
    qianchuanBrandFirstOrderRate: number;
    qianchuanBrandFirstOrderRoi30: number;
    qianchuanFirstOrderCnt: number;
    qianchuanFirstOrderConvertCost: number;
    qianchuanFirstOrderDirectPayGmv: number;
    qianchuanFirstOrderDirectPayOrderRoi: number;
    qianchuanFirstOrderLtv30: number;
    qianchuanFirstOrderRate: number;
    qianchuanFirstOrderRoi30: number;
    quotaInfo: Record<string, any>;
    refreshTime: string;
    showCnt: number;
    statCost: number;
    status: number;
    teamId: number;
    totalPlay: number;
    unfinishedEstimateOrderGmv: number;
    updatedAt: string;
  }
  interface AdvertiserDataTableListResp {
    records: AdvertiserDataTableListRecord[];
    summary: AdvertiserDataTableListSummary;
    total: number;
  }
  interface AdvertiserDataTableListSummary {
    accountGeneralTotal: number;
    accountTotal: number;
    adAllOrderCountSettleRate14d: number;
    adAllOrderCountSettleRate7d: number;
    adAllOrderGmvSettleRate14d: number;
    adAllOrderGmvSettleRate7d: number;
    adAllOrderSettleAmount14d: number;
    adAllOrderSettleAmount7d: number;
    adAllOrderSettleCost14d: number;
    adAllOrderSettleCost7d: number;
    adAllOrderSettleCount14d: number;
    adAllOrderSettleCount7d: number;
    adAllOrderSettleRoi14d: number;
    adAllOrderSettleRoi7d: number;
    adOrderGmvRefundRate14d: number;
    adOrderGmvRefundRate7d: number;
    adOrderRefundRate14d: number;
    adOrderRefundRate7d: number;
    allOrderCreateRoi7days: number;
    allOrderPayCount7days: number;
    allOrderPayGmv7days: number;
    allOrderPayRoi7days: number;
    allOrderRefundAmount14d: number;
    allOrderRefundAmount7d: number;
    allOrderRefundCount14d: number;
    allOrderRefundCount7d: number;
    attributionConvertCnt: number;
    attributionConvertCost: number;
    attributionConvertRate: number;
    attributionDeepConvertCnt: number;
    attributionDeepConvertCost: number;
    attributionDeepConvertRate: number;
    clickCnt: number;
    convertCnt: number;
    convertCost: number;
    convertRate: number;
    cpcPlatform: number;
    cpmPlatform: number;
    createOrderAmount: number;
    createOrderCount: number;
    createOrderCouponAmount: number;
    createOrderRoi: number;
    ctr: number;
    deepConvertCnt: number;
    deepConvertCost: number;
    deepConvertRate: number;
    dyComment: number;
    dyFollow: number;
    dyLike: number;
    dyShare: number;
    indirectOrderCreateCount7days: number;
    indirectOrderCreateGmv7days: number;
    indirectOrderPayCount7days: number;
    indirectOrderPayGmv7days: number;
    indirectOrderPrepayCount7days: number;
    indirectOrderPrepayGmv7days: number;
    indirectOrderUnfinishedEstimateGmv7days: number;
    livePayOrderCostPerOrder: number;
    lubanLiveClickProductCnt: number;
    lubanLiveEnterCnt: number;
    payOrderAmount: number;
    payOrderCostPerOrder: number;
    payOrderCount: number;
    payOrderCouponAmount: number;
    play25FeedBreak: number;
    play50FeedBreak: number;
    play75FeedBreak: number;
    playDuration3s: number;
    playOver: number;
    playOverRate: number;
    playOverRate3s: number;
    prepayAndPayOrderRoi: number;
    prepayOrderAmount: number;
    prepayOrderCount: number;
    qianchuanAuthorFirstOrderCnt: number;
    qianchuanAuthorFirstOrderConvertCost: number;
    qianchuanAuthorFirstOrderDirectPayGmv: number;
    qianchuanAuthorFirstOrderDirectPayOrderRoi: number;
    qianchuanAuthorFirstOrderLtv30: number;
    qianchuanAuthorFirstOrderRate: number;
    qianchuanAuthorFirstOrderRoi30: number;
    qianchuanBrandFirstOrderCnt: number;
    qianchuanBrandFirstOrderConvertCost: number;
    qianchuanBrandFirstOrderDirectPayGmv: number;
    qianchuanBrandFirstOrderDirectPayOrderRoi: number;
    qianchuanBrandFirstOrderLtv30: number;
    qianchuanBrandFirstOrderRate: number;
    qianchuanBrandFirstOrderRoi30: number;
    qianchuanFirstOrderCnt: number;
    qianchuanFirstOrderConvertCost: number;
    qianchuanFirstOrderDirectPayGmv: number;
    qianchuanFirstOrderDirectPayOrderRoi: number;
    qianchuanFirstOrderLtv30: number;
    qianchuanFirstOrderRate: number;
    qianchuanFirstOrderRoi30: number;
    showCnt: number;
    statCost: number;
    totalPlay: number;
    unfinishedEstimateOrderGmv: number;
  }
  interface AdvertiserQuotaAndBalanceReq {
    advertiserIds: number[];
  }
  interface AdvertiserRetargetingTags {
    retargetingTagsExclude: number[];
    retargetingTagsInclude: number[];
  }
  interface AdvertisersDataInitReq {
    advertisersConf: Advertiser[];
  }
  interface AnnotationTagListItem {
    createdAt: string;
    creator: number;
    creatorInfo: BasicUserInfo;
    id: number;
    materialTypeCatalogs: MaterialCatalogsKeyByTypeMap;
    name: string;
    serialNumber: number;
  }
  interface AnnotationTagListResp {
    count: number;
    records: AnnotationTagListItem[];
  }
  interface AuthUpdate {
    advertiserId: number;
    refreshBeginTime: string;
  }
  interface AuthUpdateReq {
    authUpdates: AuthUpdate[];
    platform: FlowPlatformType;
  }
  interface AutoDownLoss {
    autoDownLossModel: any;
    budget: number;
    createdAt: string;
    dynamicName: string;
    endTime: string;
    id: number;
    isEnable: boolean;
    marketingGoal: any;
    marketingScene: any;
    monitoringAdType: any;
    monitoringAdvertiserIds: number[];
    monitoringAdvertiserInners: MonitoringAdvertiserInner[];
    monitoringFrequency: any;
    monitoringModel: any;
    name: string;
    notificationFrequency: any;
    roi2Goal: number;
    scanTimePeriod: any;
    scheduleTime: string;
    scheduleType: any;
    startTime: string;
    triggerMode: any;
    updatedAt: string;
    version: number;
  }
  interface AutoDownLossLog {
    autoDownLossId: number;
    budget: number;
    createdAt: string;
    id: number;
    monitoringId: number;
    monitoringName: string;
    roi2Goal: number;
    triggerMode: any;
    updatedAt: string;
    watchBudget: number;
    watchRoi2Goal: number;
  }
  interface AutoHotItem {
    autoHotItemModel: any;
    createdAt: string;
    dynamicName: string;
    endTime: string;
    id: number;
    isEnable: boolean;
    marketingGoal: any;
    marketingScene: any;
    monitoringAdType: any;
    monitoringAdvertiserIds: number[];
    monitoringAdvertiserInners: MonitoringAdvertiserInner[];
    monitoringFrequency: any;
    monitoringModel: any;
    name: string;
    notificationFrequency: any;
    roi2Goal: number;
    scanTimePeriod: any;
    scheduleTime: string;
    scheduleType: any;
    startTime: string;
    triggerMode: any;
    updatedAt: string;
    version: number;
  }
  interface AutoHotItemLog {
    autoHotItemId: number;
    createdAt: string;
    id: number;
    monitoringId: number;
    monitoringName: string;
    roi2Goal: number;
    triggerMode: any;
    updatedAt: string;
    watchBudget: number;
    watchRoi2Goal: number;
  }
  type AutoTagKey =
    'hot-video' |
    'hot-video-material' |
    'review-tag' |
    'video-state-auto-change-after-delivered' |
    'video-state-auto-change-after-upload-new-version' |
    'movie-roi-show';
  interface AutoTagRuleItem {
    key: any;
    rule: any;
    switch: number;
    title: string;
  }
  interface AutoTagRuleUpdateItem {
    key: any;
    rule: string;
    switch: number;
  }
  interface AutoTagRuleUpdateReq {
    rules: AutoTagRuleUpdateItem[];
  }
  interface Aweme {
    advertiserId: number;
    awemeAvatar: string;
    awemeHasLivePermission: boolean;
    awemeHasPublishPermission: boolean;
    awemeHasUniProm: boolean;
    awemeHasVideoPermission: boolean;
    awemeId: number;
    awemeName: string;
    awemeShowId: string;
    awemeStatus: any;
    bindType: FlowBindType[];
  }
  interface AwemeShareSchemaReq {
    downloadType: number;
    feature: string;
    hashtagList: string[];
    materialId: string;
    microAppInfo: any;
    poiId: string;
    privateStatus: number;
    shareId: string;
    shareToPublish: number;
    shareToType: number;
    shortTitle: string;
    title: string;
    titleHashtagList: MaterialAwemeShareTitleHashtag[];
  }
  interface BatchDeleteAdminMaterialStatusReq {
    ids: number[];
  }
  interface BatchDeleteAdminRoleReq {
    ids: number[];
  }
  interface BatchDeleteAnnotationTagReq {
    ids: number[];
  }
  interface BatchDeleteProductReq {
    ids: number[];
  }
  interface BatchDeleteScriptCatalogReq {
    ids: number[];
  }
  interface CampaignBatchOptReq {
    campaignIds: number[];
  }
  interface CampaignBatchOptResp {
    results: CampaignBatchOptResult[];
  }
  interface CampaignBatchOptResult {
    campaignId: number;
    campaignName: string;
    msg: string;
    optResult: boolean;
  }
  interface CampaignBudgetBatchUpdateReq {
    budgetMode: FlowBudgetMode;
    campaignBudget: number;
    campaignIds: number[];
  }
  interface CampaignBudgetBatchUpdateResp {
    results: CampaignBudgetBatchUpdateResult[];
  }
  interface CampaignBudgetBatchUpdateResult {
    campaignId: number;
    campaignName: string;
    msg: string;
    optResult: boolean;
  }
  interface CampaignChooseListAdTotalInner {
    advertiserId: number;
    advertiserName: string;
    subList: CampaignChooseListAdTotalInnerSub[];
  }
  interface CampaignChooseListAdTotalInnerSub {
    adTotal: number;
    avatar: string;
    id: number;
    name: string;
  }
  interface CampaignChooseListAdTotalReq {
    advertiserIds: number[];
    marketingGoal: any;
    marketingScene: any;
  }
  interface CampaignChooseListAdTotalResp {
    list: CampaignChooseListAdTotalInner[];
  }
  interface CampaignChooseListReq {
    advertiserIds: number[];
    marketingGoal: FlowMarketingGoal;
    marketingScene: FlowMarketingScene;
  }
  interface CampaignDataTableListSummary {
    adAllOrderCountSettleRate14d: number;
    adAllOrderCountSettleRate7d: number;
    adAllOrderGmvSettleRate14d: number;
    adAllOrderGmvSettleRate7d: number;
    adAllOrderSettleAmount14d: number;
    adAllOrderSettleAmount7d: number;
    adAllOrderSettleCost14d: number;
    adAllOrderSettleCost7d: number;
    adAllOrderSettleCount14d: number;
    adAllOrderSettleCount7d: number;
    adAllOrderSettleRoi14d: number;
    adAllOrderSettleRoi7d: number;
    adOrderGmvRefundRate14d: number;
    adOrderGmvRefundRate7d: number;
    adOrderRefundRate14d: number;
    adOrderRefundRate7d: number;
    allOrderCreateRoi7days: number;
    allOrderPayCount7days: number;
    allOrderPayGmv7days: number;
    allOrderPayRoi7days: number;
    allOrderRefundAmount14d: number;
    allOrderRefundAmount7d: number;
    allOrderRefundCount14d: number;
    allOrderRefundCount7d: number;
    attributionConvertCnt: number;
    attributionConvertCost: number;
    attributionConvertRate: number;
    attributionDeepConvertCnt: number;
    attributionDeepConvertCost: number;
    attributionDeepConvertRate: number;
    clickCnt: number;
    cpcPlatform: number;
    cpmPlatform: number;
    createOrderAmount: number;
    createOrderCount: number;
    createOrderCouponAmount: number;
    createOrderRoi: number;
    ctr: number;
    deepConvertCnt: number;
    deepConvertCost: number;
    deepConvertRate: number;
    dyComment: number;
    dyFollow: number;
    dyLike: number;
    dyShare: number;
    ecpConvertCnt: number;
    ecpConvertRate: number;
    ecpCpaPlatform: number;
    indirectOrderCreateCount7days: number;
    indirectOrderCreateGmv7days: number;
    indirectOrderPayCount7days: number;
    indirectOrderPayGmv7days: number;
    indirectOrderPrepayCount7days: number;
    indirectOrderPrepayGmv7days: number;
    indirectOrderUnfinishedEstimateGmv7days: number;
    liveFansClubJoinCnt: number;
    livePayOrderCostPerOrder: number;
    liveWatchOneMinuteCount: number;
    lubanLiveClickProductCnt: number;
    lubanLiveCommentCnt: number;
    lubanLiveEnterCnt: number;
    lubanLiveGiftAmount: number;
    lubanLiveGiftCnt: number;
    lubanLiveShareCnt: number;
    lubanLiveSlidecartClickCnt: number;
    payOrderAmount: number;
    payOrderCostPerOrder: number;
    payOrderCount: number;
    payOrderCouponAmount: number;
    play25FeedBreak: number;
    play50FeedBreak: number;
    play75FeedBreak: number;
    playDuration3s: number;
    playOver: number;
    playOverRate: number;
    playOverRate3s: number;
    prepayAndPayOrderRoi: number;
    prepayOrderAmount: number;
    prepayOrderCount: number;
    qianchuanAuthorFirstOrderCnt: number;
    qianchuanAuthorFirstOrderConvertCost: number;
    qianchuanAuthorFirstOrderDirectPayGmv: number;
    qianchuanAuthorFirstOrderDirectPayOrderRoi: number;
    qianchuanAuthorFirstOrderLtv30: number;
    qianchuanAuthorFirstOrderRate: number;
    qianchuanAuthorFirstOrderRoi30: number;
    qianchuanBrandFirstOrderCnt: number;
    qianchuanBrandFirstOrderConvertCost: number;
    qianchuanBrandFirstOrderDirectPayGmv: number;
    qianchuanBrandFirstOrderDirectPayOrderRoi: number;
    qianchuanBrandFirstOrderLtv30: number;
    qianchuanBrandFirstOrderRate: number;
    qianchuanBrandFirstOrderRoi30: number;
    qianchuanFirstOrderCnt: number;
    qianchuanFirstOrderConvertCost: number;
    qianchuanFirstOrderDirectPayGmv: number;
    qianchuanFirstOrderDirectPayOrderRoi: number;
    qianchuanFirstOrderLtv30: number;
    qianchuanFirstOrderRate: number;
    qianchuanFirstOrderRoi30: number;
    showCnt: number;
    statCost: number;
    totalPlay: number;
    unfinishedEstimateOrderGmv: number;
  }
  interface Category {
    companyId: number;
    createdAt: string;
    creator: number;
    id: number;
    materialCatalog: MaterialTypeCatalogRelationMaterialCatalog;
    materialType: any;
    name: string;
    parentId: number;
    serialNumber: number;
    updatedAt: string;
  }
  interface CategoryRoleSettingItem {
    departments: BasicSelectInfo[];
    setType: ResourceRoleSetType;
    teams: BasicSelectInfo[];
    users: BasicUserInfo[];
  }
  interface CategoryRoleSettingValue {
    departmentIds: number[];
    setType: any;
    teamIds: number[];
    userIds: string[];
  }
  interface CategoryRoleSettingsResp {
  }
  interface CategoryTagGroupSetting {
    categoryId: number;
    createdAt: string;
    isRequired: number;
    tagGroupId: number;
    updatedAt: string;
  }
  interface CategoryTagGroupsItem {
    categoryId: number;
    isRequired: number;
    tagGroupId: number;
    tagGroupName: string;
  }
  interface ChoosePublicTags {
    id: number;
    isRequired: number;
    name: string;
    tags: FilterTag[];
  }
  interface ClientRequest {
    params: string;
    url: string;
  }
  interface CollectAdBasicInfoTemplateReq {
    adBasicInfoTemplateIds: number[];
    isCollect: boolean;
  }
  interface CollectAdTemplateReq {
    adTemplateIds: number[];
    isCollect: boolean;
  }
  interface CollectAdvertiserReq {
    advertiserIds: number[];
    isCollect: boolean;
    platformList: FlowPlatformType[];
  }
  interface CollectOrientationTemplateReq {
    isCollect: boolean;
    orientationTemplateIds: number[];
  }
  interface Company {
    advertisementUserCount: number;
    advertisementUserLimit: number;
    auditReason: string;
    auditStatus: number;
    avatar: string;
    createdAt: string;
    creator: number;
    director: number;
    douyinAccountCount: number;
    douyinAccountLimit: number;
    firstLaunchTime: number;
    freeStorage: number;
    id: number;
    innerCount: number;
    innerDomain: string;
    innerLimit: number;
    lastReportTime: number;
    license: string;
    name: string;
    outerCount: number;
    outerDomain: string;
    outerLimit: number;
    pricePlanName: string;
    proxyPort: number;
    sizeCount: number;
    sizeLimit: number;
    terminalIp: string;
    terminalVersion: string;
    totalStorage: number;
    updatedAt: string;
  }
  interface Copywriter {
    copywriterTexts: CopywriterText[];
    name: string;
  }
  interface CopywriterText {
    title: string;
    titleType: FlowTitleType;
  }
  interface CreateAdBasicInfoTemplateReq {
    detail: any;
    templateType: any;
  }
  interface CreateAdDetail {
    adBasicInfoTemplate: any;
    adCreativeCommons: AdCreativeCommon[];
    adCreativeGroups: AdCreativeGroup[];
    advertiserIds: number[];
    copywriters: Copywriter[];
    orientationTemplates: AdTemplateOrientationTemplate[];
    submitSetting: any;
    targetDelivery: any;
  }
  interface CreateAdReq {
    adTemplateId: number;
    copyFromAdId: number;
    copyFromAdReportTaskUuid: string;
    detail: CreateAdDetail;
    statusId: number;
  }
  interface CreateAdResp {
    qianchuanFileUploadTaskParams: string;
    qianchuanFileUploadTaskUrl: string;
  }
  interface CreateAdTemplateReq {
    detail: any;
    templateType: any;
  }
  interface CreateAdminCategory {
    categoryRoleSettings: Record<string, any>;
    categoryTagGroupSettings: Record<string, any>;
    name: string;
    serialNumber: number;
  }
  interface CreateAdminCategoryReq {
    categoryRoleSettings: Record<string, any>;
    categoryTagGroupSettings: Record<string, any>;
    materialCatalog: any;
    materialType: any;
    name: string;
    parentId: number;
    serialNumber: number;
  }
  interface CreateAdminCategoryWithChildrenReq {
    categoryRoleSettings: Record<string, any>;
    categoryTagGroupSettings: Record<string, any>;
    children: CreateAdminCategory[];
    materialCatalog: any;
    materialType: any;
    name: string;
    serialNumber: number;
  }
  interface CreateAdminDepartmentReq {
    catalog: string;
    director: string;
    name: string;
    parentId: number;
  }
  interface CreateAdminMaterialStatusReq {
    materialTypeCatalogRelations: any;
    name: string;
    serialNumber: number;
    style: string;
  }
  interface CreateAdminRoleReq {
    name: string;
  }
  interface CreateAdminTeamReq {
    director: string;
    name: string;
    userIds: string[];
  }
  interface CreateAnnotationTagReq {
    materialTypeCatalogs: MaterialCatalogsKeyByTypeMap;
    name: string;
    serialNumber: number;
  }
  interface CreateAutoDownLossReq {
    autoDownLossModel: any;
    budget: number;
    createdAt: string;
    dynamicName: string;
    endTime: string;
    id: number;
    isEnable: boolean;
    marketingGoal: any;
    marketingScene: any;
    monitoringAdType: any;
    monitoringAdvertiserIds: number[];
    monitoringAdvertiserInners: MonitoringAdvertiserInner[];
    monitoringFrequency: any;
    monitoringModel: any;
    name: string;
    notificationFrequency: any;
    roi2Goal: number;
    scanTimePeriod: any;
    scheduleTime: string;
    scheduleType: any;
    startTime: string;
    triggerMode: any;
    updatedAt: string;
    version: number;
  }
  interface CreateAutoHotItemReq {
    autoHotItemModel: any;
    createdAt: string;
    dynamicName: string;
    endTime: string;
    id: number;
    isEnable: boolean;
    marketingGoal: any;
    marketingScene: any;
    monitoringAdType: any;
    monitoringAdvertiserIds: number[];
    monitoringAdvertiserInners: MonitoringAdvertiserInner[];
    monitoringFrequency: any;
    monitoringModel: any;
    name: string;
    notificationFrequency: any;
    roi2Goal: number;
    scanTimePeriod: any;
    scheduleTime: string;
    scheduleType: any;
    startTime: string;
    triggerMode: any;
    updatedAt: string;
    version: number;
  }
  interface CreateMyTagGroupReq {
    name: string;
    serialNumber: number;
  }
  interface CreateMyTagGroupTagsReq {
    name: string;
    serialNumber: number;
    tagNames: string[];
  }
  interface CreateMyTagReq {
    name: string;
    serialNumber: number;
    tagGroupId: number;
  }
  interface CreateMyUsedFrequentlyTagGroupReq {
    categoryId: number;
    name: string;
    tagIds: number[];
    type: any;
  }
  interface CreateNotificationReportRuleReq {
    dataDimension: any;
    feishuNotificationEnabled: boolean;
    notificationRoleIds: number[];
    notificationUserIds: string[];
    reportType: any;
    ruleEnabled: boolean;
    ruleName: string;
    scheduleTime: string;
    selectedDimensionIds: string[];
  }
  interface CreateOrientationTemplateReq {
    detail: any;
    templateType: any;
  }
  interface CreateProductReq {
    name: string;
    serialNumber: number;
  }
  interface CreatePublicTagGroupReq {
    name: string;
    serialNumber: number;
    tagGroupCategorySettings: Record<string, any>;
    tags: string[];
  }
  interface CreateScriptCatalogReq {
    name: string;
    serialNumber: number;
  }
  interface CreateTomorrowPlanUniLiveReq {
    isRepeatSchedule: boolean;
    tomorrowSchedule: string;
    uniLiveId: number;
  }
  interface CreateUniLiveReq {
    uniLive: any;
  }
  interface CreateUniLiveResp {
    qianchuanFileUploadTaskParams: string;
    qianchuanFileUploadTaskUrl: string;
  }
  interface CreateUserInviteReq {
    auditSwitch: number;
    catalog: string;
    departmentId: number;
    departmentSwitch: number;
    expiresAt: number;
    projectId: string;
    projectRoleId: string;
    roleId: number;
  }
  interface CreativeDataTableListSummary {
    allOrderCreateRoi7days: number;
    allOrderPayCount7days: number;
    allOrderPayGmv7days: number;
    allOrderPrepayAndPayRoi7days: number;
    attributionConvertCnt: number;
    attributionConvertCost: number;
    attributionConvertRate: number;
    attributionDeepConvertCnt: number;
    attributionDeepConvertCost: number;
    attributionDeepConvertRate: number;
    clickCnt: number;
    cpcPlatform: number;
    cpmPlatform: number;
    createOrderAmount: number;
    createOrderCount: number;
    createOrderCouponAmount: number;
    createOrderRoi: number;
    ctr: number;
    deepConvertCnt: number;
    deepConvertCost: number;
    deepConvertRate: number;
    dyComment: number;
    dyFollow: number;
    dyLike: number;
    dyShare: number;
    ecpConvertCnt: number;
    ecpConvertRate: number;
    ecpCpaPlatform: number;
    indirectOrderCreateCount7days: number;
    indirectOrderCreateGmv7days: number;
    indirectOrderPayCount7days: number;
    indirectOrderPayGmv7days: number;
    indirectOrderPrepayCount7days: number;
    indirectOrderPrepayGmv7days: number;
    indirectOrderUnfinishedEstimateGmv7days: number;
    liveFansClubJoinCnt: number;
    livePayOrderCostPerOrder: number;
    liveWatchOneMinuteCount: number;
    lubanLiveClickProductCnt: number;
    lubanLiveCommentCnt: number;
    lubanLiveEnterCnt: number;
    lubanLiveGiftAmount: number;
    lubanLiveGiftCnt: number;
    lubanLiveShareCnt: number;
    lubanLiveSlidecartClickCnt: number;
    payOrderAmount: number;
    payOrderCount: number;
    payOrderCouponAmount: number;
    play25FeedBreak: number;
    play50FeedBreak: number;
    play75FeedBreak: number;
    playDuration3s: number;
    playOver: number;
    playOverRate: number;
    prepayAndPayOrderRoi: number;
    prepayOrderAmount: number;
    prepayOrderCount: number;
    qianchuanAuthorFirstOrderCnt: number;
    qianchuanAuthorFirstOrderConvertCost: number;
    qianchuanAuthorFirstOrderDirectPayGmv: number;
    qianchuanAuthorFirstOrderDirectPayOrderRoi: number;
    qianchuanAuthorFirstOrderLtv30: number;
    qianchuanAuthorFirstOrderRate: number;
    qianchuanAuthorFirstOrderRoi30: number;
    qianchuanBrandFirstOrderCnt: number;
    qianchuanBrandFirstOrderConvertCost: number;
    qianchuanBrandFirstOrderDirectPayGmv: number;
    qianchuanBrandFirstOrderDirectPayOrderRoi: number;
    qianchuanBrandFirstOrderLtv30: number;
    qianchuanBrandFirstOrderRate: number;
    qianchuanBrandFirstOrderRoi30: number;
    qianchuanCommissionConvertCnt: number;
    qianchuanEffectiveViewConvertCount: number;
    qianchuanEffectiveViewConvertRate: number;
    qianchuanEffectiveViewCpaPlatform: number;
    qianchuanEstimatedCommission: number;
    qianchuanEstimatedCommissionRoi: number;
    qianchuanFirstOrderCnt: number;
    qianchuanFirstOrderConvertCost: number;
    qianchuanFirstOrderDirectPayGmv: number;
    qianchuanFirstOrderDirectPayOrderRoi: number;
    qianchuanFirstOrderLtv30: number;
    qianchuanFirstOrderRate: number;
    qianchuanFirstOrderRoi30: number;
    showCnt: number;
    statCost: number;
    totalPlay: number;
    unfinishedEstimateOrderGmv: number;
  }
  interface CreativeMaterialFileCheckItemResult {
    errMsg: string;
    imageMaterial: CreativeMaterialFileCheckItemResultMaterial;
    imageMode: FlowImageMode;
    isTranscode: boolean;
    videoMaterial: CreativeMaterialFileCheckItemResultMaterial;
  }
  interface CreativeMaterialFileCheckItemResultMaterial {
    materialId: string;
  }
  interface CreativeMaterialFileCheckMaterial {
    isTranscode: boolean;
    materialId: string;
  }
  interface CreativeMaterialFileCheckReq {
    materials: CreativeMaterialFileCheckMaterial[];
  }
  interface CreativeMaterialFileCheckResp {
  }
  interface DeleteAdBasicInfoTemplateReq {
    adBasicInfoTemplateIds: number[];
  }
  interface DeleteAdTemplateReq {
    adTemplateIds: number[];
  }
  interface DeleteAdminTeamReq {
    id: number;
  }
  interface DeleteAdvertiserReq {
    advertiserIds: number[];
    platformList: FlowPlatformType[];
  }
  interface DeleteAutoDownLossReq {
    autoDownLossIds: number[];
  }
  interface DeleteAutoHotItemReq {
    autoHotItemIds: number[];
  }
  interface DeleteAwemeShareReq {
    shareId: string;
  }
  interface DeleteMyUsedFrequentlyTagGroupReq {
    ids: number[];
  }
  interface DeleteNotificationReportRuleReq {
    ids: number[];
  }
  interface DeleteOrientationTemplateReq {
    orientationTemplateIds: number[];
  }
  interface DeliverySetting {
    bidRoi: number;
    bidRoiModel: any;
    bidRoiNumber: number;
    bidRoiType: any;
    bidRois: number[];
    budget: number;
    budgetMode: any;
    endTime: string;
    ladderBidRoi: number;
    liveScheduleType: any;
    maxBidRoi: number;
    minBidRoi: number;
    qcpxMode: any;
    scheduleFixedRange: number;
    scheduleTime: string;
    smartBidType: any;
    startTime: string;
    videoScheduleType: any;
  }
  interface DistrictTools {
    code: string;
    geonameId: number;
    level: any;
    name: string;
    subDistricts: DistrictTools[];
  }
  interface DmpAudienceResp {
    result: QianchuanDmpAudiencesGetV10ResponseData;
  }
  interface DownloadControlReq {
    cooperationSourceDownloadCopyLimitDay: string;
    movieDownloadCopyLimitDay: string;
    ownSourceDownloadCopyLimitDay: string;
    referenceSourceDownloadCopyLimitDay: string;
  }
  interface EnableAdBasicInfoTemplateReq {
    adBasicInfoTemplateIds: number[];
    isEnable: boolean;
  }
  interface EnableAdTemplateReq {
    adTemplateIds: number[];
    isEnable: boolean;
  }
  interface EnableAdvertiserMonitorReq {
    advertiserIds: number[];
    isEnable: boolean;
  }
  interface EnableAdvertiserReq {
    advertiserIds: number[];
    isEnable: boolean;
    platformList: FlowPlatformType[];
  }
  interface EnableAutoDownLossReq {
    autoDownLossIds: number[];
    isEnable: boolean;
  }
  interface EnableAutoHotItemReq {
    autoHotItemIds: number[];
    isEnable: boolean;
  }
  interface EnableNotificationReportRuleReq {
    ids: number[];
    ruleEnabled: boolean;
  }
  interface EnableOrientationTemplateReq {
    isEnable: boolean;
    orientationTemplateIds: number[];
  }
  interface EstimateAudienceReq {
    advertiserIds: number[];
    awemeId: number;
    externalAction: any;
    marketingGoal: any;
    orientationTemplate: OrientationTemplateDetail;
    producerId: number;
  }
  interface EstimateAudienceResp {
    result: QianchuanToolsEstimateAudienceV10ResponseData;
  }
  interface ExportMovieRelatedAdMaterialJuAdStatReq {
    from: number;
    id: string;
    to: number;
  }
  interface ExportMovieRelatedAdMaterialKsNiuStatReq {
    from: number;
    id: string;
    to: number;
  }
  interface ExportMovieRelatedAdMaterialTxAdStatReq {
    from: number;
    id: string;
    to: number;
  }
  interface ExportUniLiveListReq {
    endTime: string;
    isAllExport: boolean;
    startTime: string;
    uniLiveIds: number[];
  }
  interface FeishuCompanyAuditReq {
    advertisementUserLimit: number;
    auditReason: string;
    auditStatus: string;
    companyId: number;
    innerLimit: number;
    ossUsedSpaceConfigSize: string;
    ossUsedSpaceConfigTraffic: string;
    outerLimit: number;
    pricePlanName: string;
    recordId: string;
    sizeLimit: string;
    tableId: string;
  }
  interface FilterConfigAdStatus {
    children: FilterConfigAdStatus[];
    label: string;
    value: string;
  }
  interface FilterTag {
    id: number;
    name: string;
  }
  interface FilterTags {
    id: number;
    name: string;
    tags: FilterTag[];
  }
  interface FilterTagsResp {
    personal: MyTagGroupsTagsChooseListItem[];
    platform: FilterTag[];
    public: FilterTags[];
    system: FilterTag[];
  }
  interface FlowAdAccount {
    adminUser: any;
    advertiserId: number;
    advertiserPlatformId: string;
    agentId: number;
    agentName: string;
    createdAt: string;
    id: number;
    isCollect: boolean;
    isEnable: boolean;
    isProtect: boolean;
    name: string;
    platform: number;
    platformName: string;
    refreshTime: string;
    status: number;
    statusName: string;
    teamId: number;
    teamName: string;
    users: BasicUserInfo[];
  }
  interface FlowAdAccountChooseListInner {
    advertiserId: number;
    advertiserPlatformId: string;
    isCollect: boolean;
    name: string;
    status: number;
  }
  interface FlowAdAccountChooseListResp {
    list: FlowAdAccountChooseListInner[];
  }
  interface FlowProtect {
    advertiserId: number;
    clickProductAction: number;
    commentLive: number;
    companyId: number;
    createdAt: string;
    followAction: number;
    id: number;
    name: string;
    payRoi: number;
    qcFollowAction: number;
    qcMustBuy: number;
    shopping: number;
    successorderAction: number;
    successorderPay: number;
    successorderSettle: number;
    toLive: number;
    updatedAt: string;
  }
  interface GJsonCheckErrSub {
    gJsonCheckErrType: any;
    msg: string;
  }
  type GJsonCheckErrType =
    'error' |
    'protect' |
    'warn' |
    'normal';
  interface GetAdDataTableListRecord {
    adAllOrderCountSettleRate14d: number;
    adAllOrderCountSettleRate7d: number;
    adAllOrderGmvSettleRate14d: number;
    adAllOrderGmvSettleRate7d: number;
    adAllOrderSettleAmount14d: number;
    adAllOrderSettleAmount7d: number;
    adAllOrderSettleCost14d: number;
    adAllOrderSettleCost7d: number;
    adAllOrderSettleCount14d: number;
    adAllOrderSettleCount7d: number;
    adAllOrderSettleRoi14d: number;
    adAllOrderSettleRoi7d: number;
    adAudiencePackageTemplateId: number;
    adBasicInfoTemplateId: number;
    adBid: number;
    adBidRoi: number;
    adBidRoiType: any;
    adBudget: number;
    adCreateTime: number;
    adId: number;
    adModifyTime: number;
    adName: string;
    adOrderGmvRefundRate14d: number;
    adOrderGmvRefundRate7d: number;
    adOrderRefundRate14d: number;
    adOrderRefundRate7d: number;
    adStatus: FlowStatus;
    adTemplateId: number;
    advertiserId: number;
    advertiserIsValid: boolean;
    advertiserName: string;
    agentName: string;
    agentUserId: number;
    allOrderCreateRoi7days: number;
    allOrderPayCount7days: number;
    allOrderPayGmv7days: number;
    allOrderPayRoi7days: number;
    allOrderRefundAmount14d: number;
    allOrderRefundAmount7d: number;
    allOrderRefundCount14d: number;
    allOrderRefundCount7d: number;
    attributionConvertCnt: number;
    attributionConvertCost: number;
    attributionConvertRate: number;
    attributionDeepConvertCnt: number;
    attributionDeepConvertCost: number;
    attributionDeepConvertRate: number;
    awemeId: number;
    awemes: BasicFlowSelectInfo;
    budgetMode: FlowBudgetMode;
    campaignBudget: number;
    campaignId: number;
    campaignName: string;
    campaignScene: FlowCampaignScene;
    campaignStatus: string;
    clickCnt: number;
    companyId: number;
    cpcPlatform: number;
    cpmPlatform: number;
    createOrderAmount: number;
    createOrderCount: number;
    createOrderCouponAmount: number;
    createOrderRoi: number;
    createTime: number;
    createType: number;
    createdAt: string;
    ctr: number;
    deepBidType: FlowDeepBidType;
    deepConvertCnt: number;
    deepConvertCost: number;
    deepConvertRate: number;
    deepExternalAction: FlowDeepExternalAction;
    deliveryDate: number;
    dutyUserName: string;
    dyComment: number;
    dyFollow: number;
    dyLike: number;
    dyShare: number;
    ecpConvertCnt: number;
    ecpConvertRate: number;
    ecpCpaPlatform: number;
    endTime: number;
    externalAction: any;
    externalAction: FlowExternalAction;
    havingCost: string;
    id: number;
    indirectOrderCreateCount7days: number;
    indirectOrderCreateGmv7days: number;
    indirectOrderPayCount7days: number;
    indirectOrderPayGmv7days: number;
    indirectOrderPrepayCount7days: number;
    indirectOrderPrepayGmv7days: number;
    indirectOrderUnfinishedEstimateGmv7days: number;
    isLowQuality: number;
    labAdType: FlowLabAdType;
    liveFansClubJoinCnt: number;
    livePayOrderCostPerOrder: number;
    liveWatchOneMinuteCount: number;
    lubanLiveClickProductCnt: number;
    lubanLiveCommentCnt: number;
    lubanLiveEnterCnt: number;
    lubanLiveGiftAmount: number;
    lubanLiveGiftCnt: number;
    lubanLiveShareCnt: number;
    lubanLiveSlidecartClickCnt: number;
    marketingGoal: FlowMarketingGoal;
    marketingGoalName: FlowMarketingGoal;
    marketingScene: FlowMarketingScene;
    optStatus: string;
    payOrderAmount: number;
    payOrderCostPerOrder: number;
    payOrderCount: number;
    payOrderCouponAmount: number;
    play25FeedBreak: number;
    play50FeedBreak: number;
    play75FeedBreak: number;
    playDuration3s: number;
    playOver: number;
    playOverRate: number;
    playOverRate3s: number;
    prepayAndPayOrderRoi: number;
    prepayOrderAmount: number;
    prepayOrderCount: number;
    productId: number;
    products: any;
    qianchuanAuthorFirstOrderCnt: number;
    qianchuanAuthorFirstOrderConvertCost: number;
    qianchuanAuthorFirstOrderDirectPayGmv: number;
    qianchuanAuthorFirstOrderDirectPayOrderRoi: number;
    qianchuanAuthorFirstOrderLtv30: number;
    qianchuanAuthorFirstOrderRate: number;
    qianchuanAuthorFirstOrderRoi30: number;
    qianchuanBrandFirstOrderCnt: number;
    qianchuanBrandFirstOrderConvertCost: number;
    qianchuanBrandFirstOrderDirectPayGmv: number;
    qianchuanBrandFirstOrderDirectPayOrderRoi: number;
    qianchuanBrandFirstOrderLtv30: number;
    qianchuanBrandFirstOrderRate: number;
    qianchuanBrandFirstOrderRoi30: number;
    qianchuanFirstOrderCnt: number;
    qianchuanFirstOrderConvertCost: number;
    qianchuanFirstOrderDirectPayGmv: number;
    qianchuanFirstOrderDirectPayOrderRoi: number;
    qianchuanFirstOrderLtv30: number;
    qianchuanFirstOrderRate: number;
    qianchuanFirstOrderRoi30: number;
    quotaInfo: Record<string, any>;
    roiGoal: number;
    showCnt: number;
    smartBidType: FlowSmartBidType;
    startTime: number;
    statCost: number;
    status: any;
    totalPlay: number;
    unfinishedEstimateOrderGmv: number;
    updatedAt: string;
  }
  interface GetAdDataTableListReq {
    adCreateTimeBegin: string;
    adCreateTimeEnd: string;
    adIds: number[];
    advertiserIds: number[];
    agentUserIds: number[];
    deepBidType: FlowDeepBidType;
    deepExternalAction: FlowDeepExternalAction;
    dutyUserIds: string[];
    endTime: string;
    externalAction: any;
    havingCost: any;
    ids: number[];
    isLowQuality: number;
    labAdType: any;
    limit: number;
    marketingGoal: any;
    marketingScene: any;
    offset: number;
    orderField: string;
    orderType: number;
    search: string;
    smartBidType: any;
    startTime: string;
    status: string;
    teamIds: number[];
  }
  interface GetAdDataTableListResp {
    records: GetAdDataTableListRecord[];
    summary: AdDataTableListSummary;
    total: number;
  }
  interface GetAdReportTaskDetailListReq {
    adReportTaskUuid: string;
    advertiserIds: number[];
    limit: number;
    offset: number;
    orderField: string;
    orderType: number;
    search: string;
    status: any;
  }
  interface GetAdReportTaskListReq {
    endTime: number;
    isPersonal: boolean;
    limit: number;
    offset: number;
    orderField: string;
    orderType: number;
    search: string;
    startTime: number;
    status: any;
  }
  interface GetAdvertiserDataTableListReq {
    advertiserIds: number[];
    agentUserIds: number[];
    dutyUserIds: string[];
    endTime: string;
    ids: number[];
    limit: number;
    offset: number;
    orderField: string;
    orderType: number;
    search: string;
    startTime: string;
    teamIds: number[];
  }
  interface GetAdvertiserListResp {
    advertisers: FlowAdAccount[];
    fileJson: Record<string, any>;
    total: number;
  }
  interface GetAllAwemeAuthorizedResp {
    awemes: Aweme[];
  }
  interface GetAllAwemeProducerResp {
    producers: BasicFlowSelectInfo[];
  }
  interface GetAllBrandResp {
    brands: BasicFlowSelectInfo[];
  }
  interface GetAllMarketingAwemeAuthorizedResp {
    awemes: Aweme[];
  }
  interface GetAllShopResp {
    shops: BasicFlowSelectInfo[];
  }
  interface GetAllUniAwemeAuthorizedResp {
    awemes: UniAweme[];
  }
  interface GetAuthQueryResp {
    advertisers: FlowAdAccount[];
  }
  interface GetAuthUrlReq {
    isAgent: boolean;
    platform: FlowPlatformType;
    teamId: number;
    url: string;
  }
  interface GetAwemeVideoInner {
    awemeItemId: number;
    commentCnt: number;
    duration: number;
    height: number;
    isAiCreate: boolean;
    isRecommend: any;
    likeCnt: number;
    materialId: number;
    shareCnt: number;
    title: string;
    url: string;
    videoCoverUrl: string;
    videoId: string;
    viewCnt: number;
    width: number;
  }
  interface GetAwemeVideoPageInfo {
    count: number;
    cursor: number;
    hasMore: any;
  }
  interface GetAwemeVideoResp {
    pageInfo: any;
    videoList: GetAwemeVideoInner[];
  }
  interface GetBlockMaterialUniPromotionInner {
    awemeItemId: number;
    duration: number;
    height: number;
    isCarryMaterial: boolean;
    isFirstPublishMaterial: boolean;
    isHighQualityMaterial: boolean;
    isInefficientMaterial: boolean;
    isLowQualityMaterial: boolean;
    isSimilarMaterial: boolean;
    productId: number;
    title: string;
    url: string;
    videoCoverUrl: string;
    videoId: string;
    width: number;
  }
  interface GetBlockMaterialUniPromotionPageInfo {
    count: number;
    cursor: number;
    hasMore: boolean;
  }
  interface GetBlockMaterialUniPromotionReq {
    advertiserId: number;
    awemeId: number;
    cursor: number;
    filtering: any;
    marketingGoal: any;
    orderField: string;
    productId: number[];
  }
  interface GetBlockMaterialUniPromotionReqFiltering {
    analysisType: string[];
    awemeItemUrl: string;
  }
  interface GetBlockMaterialUniPromotionResp {
    pageInfo: any;
    videoList: GetBlockMaterialUniPromotionInner[];
  }
  interface GetCampaignDataTableListRecord {
    adAllOrderCountSettleRate14d: number;
    adAllOrderCountSettleRate7d: number;
    adAllOrderGmvSettleRate14d: number;
    adAllOrderGmvSettleRate7d: number;
    adAllOrderSettleAmount14d: number;
    adAllOrderSettleAmount7d: number;
    adAllOrderSettleCost14d: number;
    adAllOrderSettleCost7d: number;
    adAllOrderSettleCount14d: number;
    adAllOrderSettleCount7d: number;
    adAllOrderSettleRoi14d: number;
    adAllOrderSettleRoi7d: number;
    adOrderGmvRefundRate14d: number;
    adOrderGmvRefundRate7d: number;
    adOrderRefundRate14d: number;
    adOrderRefundRate7d: number;
    advertiserId: number;
    advertiserIsValid: boolean;
    advertiserName: string;
    agentName: string;
    agentUserId: number;
    allOrderCreateRoi7days: number;
    allOrderPayCount7days: number;
    allOrderPayGmv7days: number;
    allOrderPayRoi7days: number;
    allOrderRefundAmount14d: number;
    allOrderRefundAmount7d: number;
    allOrderRefundCount14d: number;
    allOrderRefundCount7d: number;
    attributionConvertCnt: number;
    attributionConvertCost: number;
    attributionConvertRate: number;
    attributionDeepConvertCnt: number;
    attributionDeepConvertCost: number;
    attributionDeepConvertRate: number;
    budget: number;
    budgetMode: FlowBudgetMode;
    campaignBudget: number;
    campaignId: number;
    campaignName: string;
    campaignStatus: string;
    clickCnt: number;
    cpcPlatform: number;
    cpmPlatform: number;
    createOrderAmount: number;
    createOrderCount: number;
    createOrderCouponAmount: number;
    createOrderRoi: number;
    createTime: number;
    createdAt: string;
    ctr: number;
    deepConvertCnt: number;
    deepConvertCost: number;
    deepConvertRate: number;
    dutyUserName: string;
    dyComment: number;
    dyFollow: number;
    dyLike: number;
    dyShare: number;
    ecpConvertCnt: number;
    ecpConvertRate: number;
    ecpCpaPlatform: number;
    id: number;
    indirectOrderCreateCount7days: number;
    indirectOrderCreateGmv7days: number;
    indirectOrderPayCount7days: number;
    indirectOrderPayGmv7days: number;
    indirectOrderPrepayCount7days: number;
    indirectOrderPrepayGmv7days: number;
    indirectOrderUnfinishedEstimateGmv7days: number;
    liveFansClubJoinCnt: number;
    livePayOrderCostPerOrder: number;
    liveWatchOneMinuteCount: number;
    lubanLiveClickProductCnt: number;
    lubanLiveCommentCnt: number;
    lubanLiveEnterCnt: number;
    lubanLiveGiftAmount: number;
    lubanLiveGiftCnt: number;
    lubanLiveShareCnt: number;
    lubanLiveSlidecartClickCnt: number;
    marketingGoal: FlowMarketingGoal;
    marketingGoalName: FlowMarketingGoal;
    marketingScene: FlowMarketingScene;
    payOrderAmount: number;
    payOrderCostPerOrder: number;
    payOrderCount: number;
    payOrderCouponAmount: number;
    play25FeedBreak: number;
    play50FeedBreak: number;
    play75FeedBreak: number;
    playDuration3s: number;
    playOver: number;
    playOverRate: number;
    playOverRate3s: number;
    prepayAndPayOrderRoi: number;
    prepayOrderAmount: number;
    prepayOrderCount: number;
    qianchuanAuthorFirstOrderCnt: number;
    qianchuanAuthorFirstOrderConvertCost: number;
    qianchuanAuthorFirstOrderDirectPayGmv: number;
    qianchuanAuthorFirstOrderDirectPayOrderRoi: number;
    qianchuanAuthorFirstOrderLtv30: number;
    qianchuanAuthorFirstOrderRate: number;
    qianchuanAuthorFirstOrderRoi30: number;
    qianchuanBrandFirstOrderCnt: number;
    qianchuanBrandFirstOrderConvertCost: number;
    qianchuanBrandFirstOrderDirectPayGmv: number;
    qianchuanBrandFirstOrderDirectPayOrderRoi: number;
    qianchuanBrandFirstOrderLtv30: number;
    qianchuanBrandFirstOrderRate: number;
    qianchuanBrandFirstOrderRoi30: number;
    qianchuanFirstOrderCnt: number;
    qianchuanFirstOrderConvertCost: number;
    qianchuanFirstOrderDirectPayGmv: number;
    qianchuanFirstOrderDirectPayOrderRoi: number;
    qianchuanFirstOrderLtv30: number;
    qianchuanFirstOrderRate: number;
    qianchuanFirstOrderRoi30: number;
    quotaInfo: Record<string, any>;
    showCnt: number;
    statCost: number;
    status: string;
    totalPlay: number;
    unfinishedEstimateOrderGmv: number;
    updatedAt: string;
  }
  interface GetCampaignDataTableListReq {
    advertiserIds: number[];
    agentUserIds: number[];
    dutyUserIds: string[];
    endTime: string;
    ids: number[];
    limit: number;
    marketingGoal: string;
    marketingScene: string;
    offset: number;
    orderField: string;
    orderType: number;
    search: string;
    startTime: string;
    status: string;
    teamIds: number[];
  }
  interface GetCampaignDataTableListResp {
    records: GetCampaignDataTableListRecord[];
    summary: CampaignDataTableListSummary;
    total: number;
  }
  interface GetCountryInfoToolsDistrict {
    code: string;
    description: FlowDescription;
    name: string;
  }
  interface GetCountryInfoToolsReq {
    advertiserIds: number[];
    language: any;
  }
  interface GetCountryInfoToolsResp {
    districts: GetCountryInfoToolsDistrict[];
  }
  interface GetCreativeDataTableListRecord {
    adId: number;
    advertiserId: number;
    allOrderCreateRoi7days: number;
    allOrderPayCount7days: number;
    allOrderPayGmv7days: number;
    allOrderPrepayAndPayRoi7days: number;
    attributionConvertCnt: number;
    attributionConvertCost: number;
    attributionConvertRate: number;
    attributionDeepConvertCnt: number;
    attributionDeepConvertCost: number;
    attributionDeepConvertRate: number;
    carouselMaterial: string;
    clickCnt: number;
    companyId: number;
    cpcPlatform: number;
    cpmPlatform: number;
    createOrderAmount: number;
    createOrderCount: number;
    createOrderCouponAmount: number;
    createOrderRoi: number;
    createdAt: string;
    creativeCreateTime: number;
    creativeId: number;
    creativeModifyTime: number;
    ctr: number;
    deepConvertCnt: number;
    deepConvertCost: number;
    deepConvertRate: number;
    dyComment: number;
    dyFollow: number;
    dyLike: number;
    dyShare: number;
    ecpConvertCnt: number;
    ecpConvertRate: number;
    ecpCpaPlatform: number;
    id: number;
    imageMaterial: string;
    imageMode: string;
    indirectOrderCreateCount7days: number;
    indirectOrderCreateGmv7days: number;
    indirectOrderPayCount7days: number;
    indirectOrderPayGmv7days: number;
    indirectOrderPrepayCount7days: number;
    indirectOrderPrepayGmv7days: number;
    indirectOrderUnfinishedEstimateGmv7days: number;
    liveFansClubJoinCnt: number;
    livePayOrderCostPerOrder: number;
    liveWatchOneMinuteCount: number;
    lubanLiveClickProductCnt: number;
    lubanLiveCommentCnt: number;
    lubanLiveEnterCnt: number;
    lubanLiveGiftAmount: number;
    lubanLiveGiftCnt: number;
    lubanLiveShareCnt: number;
    lubanLiveSlidecartClickCnt: number;
    payOrderAmount: number;
    payOrderCount: number;
    payOrderCouponAmount: number;
    play25FeedBreak: number;
    play50FeedBreak: number;
    play75FeedBreak: number;
    playDuration3s: number;
    playOver: number;
    playOverRate: number;
    prepayAndPayOrderRoi: number;
    prepayOrderAmount: number;
    prepayOrderCount: number;
    promotionCardMaterial: string;
    qianchuanAuthorFirstOrderCnt: number;
    qianchuanAuthorFirstOrderConvertCost: number;
    qianchuanAuthorFirstOrderDirectPayGmv: number;
    qianchuanAuthorFirstOrderDirectPayOrderRoi: number;
    qianchuanAuthorFirstOrderLtv30: number;
    qianchuanAuthorFirstOrderRate: number;
    qianchuanAuthorFirstOrderRoi30: number;
    qianchuanBrandFirstOrderCnt: number;
    qianchuanBrandFirstOrderConvertCost: number;
    qianchuanBrandFirstOrderDirectPayGmv: number;
    qianchuanBrandFirstOrderDirectPayOrderRoi: number;
    qianchuanBrandFirstOrderLtv30: number;
    qianchuanBrandFirstOrderRate: number;
    qianchuanBrandFirstOrderRoi30: number;
    qianchuanCommissionConvertCnt: number;
    qianchuanEffectiveViewConvertCount: number;
    qianchuanEffectiveViewConvertRate: number;
    qianchuanEffectiveViewCpaPlatform: number;
    qianchuanEstimatedCommission: number;
    qianchuanEstimatedCommissionRoi: number;
    qianchuanFirstOrderCnt: number;
    qianchuanFirstOrderConvertCost: number;
    qianchuanFirstOrderDirectPayGmv: number;
    qianchuanFirstOrderDirectPayOrderRoi: number;
    qianchuanFirstOrderLtv30: number;
    qianchuanFirstOrderRate: number;
    qianchuanFirstOrderRoi30: number;
    showCnt: number;
    statCost: number;
    titleMaterial: string;
    totalPlay: number;
    unfinishedEstimateOrderGmv: number;
    updatedAt: string;
    videoMaterial: string;
  }
  interface GetCreativeDataTableListReq {
    advertiserIds: number[];
    agentUserIds: number[];
    analysisType: string;
    dutyUserIds: string[];
    endTime: string;
    ids: number[];
    isLowQuality: number;
    limit: number;
    offset: number;
    orderField: string;
    orderType: number;
    search: string;
    startTime: string;
    teamIds: number[];
  }
  interface GetCreativeDataTableListResp {
    records: GetCreativeDataTableListRecord[];
    summary: CreativeDataTableListSummary;
    total: number;
  }
  interface GetDetailAdBasicInfoTemplateInner {
    advertiserIds: number[];
    advertisers: BasicAdvertiserInfo[];
    detail: any;
    id: number;
    name: string;
    teamId: number;
    teamName: string;
    templateType: any;
  }
  interface GetDetailAdBasicInfoTemplateResp {
    adBasicInfoTemplate: GetDetailAdBasicInfoTemplateInner;
  }
  interface GetDetailAdTemplateInner {
    adBasicInfoTemplate: any;
    adCreativeCommons: AdCreativeCommon[];
    adCreativeGroups: AdCreativeGroup[];
    advertiserIds: number[];
    advertisers: BasicAdvertiserInfo[];
    copywriters: Copywriter[];
    id: number;
    isCollect: boolean;
    isEnable: boolean;
    name: string;
    orientationTemplates: AdTemplateOrientationTemplate[];
    submitSetting: any;
    targetDelivery: any;
    teamId: number;
    teamName: string;
    templateType: any;
  }
  interface GetDetailAdTemplateResp {
    adTemplate: GetDetailAdTemplateInner;
  }
  interface GetDetailAutoDownLossInner {
    autoDownLossModel: any;
    budget: number;
    createdAt: string;
    dynamicName: string;
    endTime: string;
    id: number;
    isEnable: boolean;
    marketingGoal: any;
    marketingScene: any;
    monitoringAdType: any;
    monitoringAdvertiserIds: number[];
    monitoringAdvertiserInners: MonitoringAdvertiserInner[];
    monitoringAdvertisers: BasicAdvertiserInfo[];
    monitoringFrequency: any;
    monitoringModel: any;
    name: string;
    notificationFrequency: any;
    roi2Goal: number;
    scanTimePeriod: any;
    scheduleTime: string;
    scheduleType: any;
    startTime: string;
    triggerMode: any;
    updatedAt: string;
    user: any;
    version: number;
  }
  interface GetDetailAutoDownLossResp {
    autoDownLoss: any;
  }
  interface GetDetailAutoHotItemInner {
    autoHotItemModel: any;
    createdAt: string;
    dynamicName: string;
    endTime: string;
    id: number;
    isEnable: boolean;
    marketingGoal: any;
    marketingScene: any;
    monitoringAdType: any;
    monitoringAdvertiserIds: number[];
    monitoringAdvertiserInners: MonitoringAdvertiserInner[];
    monitoringAdvertisers: BasicAdvertiserInfo[];
    monitoringFrequency: any;
    monitoringModel: any;
    name: string;
    notificationFrequency: any;
    roi2Goal: number;
    scanTimePeriod: any;
    scheduleTime: string;
    scheduleType: any;
    startTime: string;
    triggerMode: any;
    updatedAt: string;
    user: any;
    version: number;
  }
  interface GetDetailAutoHotItemResp {
    autoHotItem: any;
  }
  interface GetDetailNotificationReportRuleResp {
    createdAt: string;
    creator: any;
    dataDimension: any;
    feishuNotificationEnabled: boolean;
    id: number;
    notificationRoles: BasicSelectInfo[];
    notificationUsers: BasicUserInfo[];
    reportType: any;
    ruleEnabled: boolean;
    ruleName: string;
    scheduleTime: string;
    selectedDimensions: BasicSelectHashInfo[];
    updatedAt: string;
  }
  interface GetDetailOssUsedSpaceData {
    configSize: number;
    configTraffic: number;
    usedSize: number;
    usedTraffic: number;
  }
  interface GetDetailOssUsedSpaceResp {
    detail: any;
    isExistOss: boolean;
  }
  interface GetDetailOrientationTemplateInner {
    advertiserIds: number[];
    advertisers: BasicAdvertiserInfo[];
    campaignScene: any;
    detail: any;
    id: number;
    labAdType: any;
    marketingGoal: any;
    marketingScene: any;
    name: string;
    teamId: number;
    teamName: string;
    templateType: any;
  }
  interface GetDetailOrientationTemplateResp {
    orientationTemplate: GetDetailOrientationTemplateInner;
  }
  interface GetDetailUniLiveInner {
    adId: number;
    advertiser: any;
    advertiserId: number;
    aweme: any;
    awemeId: number;
    creativeSetting: any;
    deliverySetting: any;
    id: number;
    marketingGoal: any;
    optStatus: any;
    programmaticCreativeMediaList: any;
    smartBidType: any;
    status: any;
  }
  interface GetDetailUniLiveResp {
    uniLive: any;
  }
  interface GetDetailsOrientationTemplateInner {
    name: string;
    orientationTemplate: any;
    orientationTemplateId: number;
  }
  interface GetDetailsOrientationTemplateReq {
    orientationTemplateIds: number[];
  }
  interface GetDetailsOrientationTemplateResp {
    orientationTemplates: GetDetailsOrientationTemplateInner[];
  }
  interface GetFlowFileUploadConfigReq {
    signatureData: string;
  }
  interface GetIndustryInner {
    children: GetIndustryInner[];
    industryId: number;
    industryName: string;
    level: number;
  }
  interface GetIndustryReq {
    advertiserIds: number[];
  }
  interface GetIndustryResp {
    list: GetIndustryInner[];
  }
  interface GetInfoToolsDistrict {
    code: string;
    geonameId: number;
    level: any;
    name: string;
    subDistricts: GetInfoToolsDistrict[];
  }
  interface GetInfoToolsReq {
    advertiserIds: number[];
    codes: string[];
    language: any;
    subDistrict: any;
  }
  interface GetInfoToolsResp {
    districts: GetInfoToolsDistrict[];
    version: string;
  }
  interface GetMaterialDataTableListRecord {
    adId: number;
    adMaterialInfo: string;
    adMaterialInfoDetail: Record<string, any>;
    advertiserId: number;
    advertiserName: string;
    allOrderCreateRoi7days: number;
    allOrderPayCount7days: number;
    allOrderPayGmv7days: number;
    allOrderPrepayAndPayRoi7days: number;
    analysisType: string;
    attributionConvertCnt: number;
    attributionConvertCost: number;
    attributionConvertRate: number;
    attributionDeepConvertCnt: number;
    attributionDeepConvertCost: number;
    attributionDeepConvertRate: number;
    auditStatus: any;
    carouselSource: any;
    clickCnt: number;
    companyId: number;
    cpcPlatform: number;
    cpmPlatform: number;
    createOrderAmount: number;
    createOrderCount: number;
    createOrderCouponAmount: number;
    createOrderRoi: number;
    createTime: string;
    createTimeUnix: number;
    createdAt: string;
    ctr: number;
    deepConvertCnt: number;
    deepConvertCost: number;
    deepConvertRate: number;
    duration: number;
    dyComment: number;
    dyFollow: number;
    dyLike: number;
    dyShare: number;
    ecpConvertCnt: number;
    ecpConvertRate: number;
    ecpCpaPlatform: number;
    havingCost: string;
    id: number;
    imageSource: any;
    indirectOrderCreateCount7days: number;
    indirectOrderCreateGmv7days: number;
    indirectOrderPayCount7days: number;
    indirectOrderPayGmv7days: number;
    indirectOrderPrepayCount7days: number;
    indirectOrderPrepayGmv7days: number;
    indirectOrderUnfinishedEstimateGmv7days: number;
    isAutoGenerate: number;
    isDel: number;
    liveFansClubJoinCnt: number;
    livePayOrderCostPerOrder: number;
    liveWatchOneMinuteCount: number;
    lubanLiveClickProductCnt: number;
    lubanLiveCommentCnt: number;
    lubanLiveEnterCnt: number;
    lubanLiveGiftAmount: number;
    lubanLiveGiftCnt: number;
    lubanLiveShareCnt: number;
    lubanLiveSlidecartClickCnt: number;
    materialDeliveryType: FlowMaterialDeliveryType;
    materialDetail: string;
    materialId: number;
    materialMode: any;
    materialName: string;
    materialType: any;
    payOrderAmount: number;
    payOrderCount: number;
    payOrderCouponAmount: number;
    play25FeedBreak: number;
    play50FeedBreak: number;
    play75FeedBreak: number;
    playDuration3s: number;
    playOver: number;
    playOverRate: number;
    prepayAndPayOrderRoi: number;
    prepayOrderAmount: number;
    prepayOrderCount: number;
    qianchuanAuthorFirstOrderCnt: number;
    qianchuanAuthorFirstOrderConvertCost: number;
    qianchuanAuthorFirstOrderDirectPayGmv: number;
    qianchuanAuthorFirstOrderDirectPayOrderRoi: number;
    qianchuanAuthorFirstOrderLtv30: number;
    qianchuanAuthorFirstOrderRate: number;
    qianchuanAuthorFirstOrderRoi30: number;
    qianchuanBrandFirstOrderCnt: number;
    qianchuanBrandFirstOrderConvertCost: number;
    qianchuanBrandFirstOrderDirectPayGmv: number;
    qianchuanBrandFirstOrderDirectPayOrderRoi: number;
    qianchuanBrandFirstOrderLtv30: number;
    qianchuanBrandFirstOrderRate: number;
    qianchuanBrandFirstOrderRoi30: number;
    qianchuanCommissionConvertCnt: number;
    qianchuanEffectiveViewConvertCount: number;
    qianchuanEffectiveViewConvertRate: number;
    qianchuanEffectiveViewCpaPlatform: number;
    qianchuanEstimatedCommission: number;
    qianchuanEstimatedCommissionRoi: number;
    qianchuanFirstOrderCnt: number;
    qianchuanFirstOrderConvertCost: number;
    qianchuanFirstOrderDirectPayGmv: number;
    qianchuanFirstOrderDirectPayOrderRoi: number;
    qianchuanFirstOrderLtv30: number;
    qianchuanFirstOrderRate: number;
    qianchuanFirstOrderRoi30: number;
    relatedAdCnt: number;
    relatedCreativeCnt: number;
    showCnt: number;
    signature: string;
    statCost: number;
    thumbs: string[];
    totalPlay: number;
    unfinishedEstimateOrderGmv: number;
    updatedAt: string;
    urls: string[];
    videoSource: any;
  }
  interface GetMaterialDataTableListReq {
    advertiserIds: number[];
    analysisTypes: string[];
    auditStatus: any;
    endTime: string;
    havingCost: any;
    ids: number[];
    imageModes: FlowImageMode[];
    limit: number;
    materialSources: string[];
    offset: number;
    orderField: string;
    orderType: number;
    search: string;
    startTime: string;
  }
  interface GetMaterialDataTableListResp {
    records: GetMaterialDataTableListRecord[];
    summary: MaterialDataTableListSummary;
    total: number;
  }
  interface GetMaterialQianchuanDetailReq {
    advertiserId: number;
    materialId: number;
  }
  interface GetMaterialQianchuanDetailResp {
    bitRate: number;
    createTime: string;
    duration: number;
    filename: string;
    format: string;
    height: number;
    id: string;
    imageMode: QianchuanVideoGetV10DataListImageMode;
    isAiCreate: boolean;
    materialId: number;
    posterUrl: string;
    signature: string;
    size: number;
    source: QianchuanVideoGetV10DataListSource;
    tags: string[];
    url: string;
    width: number;
  }
  interface GetMovieAwemeShareListItem {
    createTime: string;
    creatorInfo: any;
    downloadType: number;
    isExpire: boolean;
    poiId: string;
    schema: string;
    shareId: string;
    shortTitle: string;
    status: any;
    title: string;
  }
  interface GetMovieAwemeShareListResp {
    list: GetMovieAwemeShareListItem[];
    total: number;
  }
  interface GetMovieRelatedAdJuAdMaterialStatResp {
    records: GetMovieRelatedAdMaterialJuAdStatRecord[];
    totalStat: JuAdMaterialStatColumns;
  }
  interface GetMovieRelatedAdKsNiuMaterialStatResp {
    records: GetMovieRelatedAdMaterialKsNiuStatRecord[];
    totalStat: KsNiuMaterialStatColumns;
  }
  interface GetMovieRelatedAdMaterialJuAdStatRecord {
    adMaterialId: number;
    adMaterialName: string;
    advertiserId: number;
    advertiserName: string;
    advertiserPlatformId: string;
    stat: any;
  }
  interface GetMovieRelatedAdMaterialKsNiuStatRecord {
    adMaterialId: number;
    adMaterialName: string;
    advertiserId: number;
    advertiserName: string;
    advertiserPlatformId: string;
    stat: any;
  }
  interface GetMovieRelatedAdMaterialLiveStatRecord {
    adMaterialId: number;
    adMaterialName: string;
    advertiserId: number;
    advertiserName: string;
    advertiserPlatformId: string;
    stat: any;
  }
  interface GetMovieRelatedAdMaterialLiveStatResp {
    records: GetMovieRelatedAdMaterialLiveStatRecord[];
    totalStat: UniMaterialLiveStatColumns;
  }
  interface GetMovieRelatedAdMaterialProductStatRecord {
    adMaterialId: number;
    adMaterialName: string;
    advertiserId: number;
    advertiserName: string;
    advertiserPlatformId: string;
    stat: any;
  }
  interface GetMovieRelatedAdMaterialProductStatResp {
    records: GetMovieRelatedAdMaterialProductStatRecord[];
    totalStat: UniMaterialProductStatColumns;
  }
  interface GetMovieRelatedAdMaterialStatReq {
    from: number;
    id: string;
    to: number;
  }
  interface GetMovieRelatedAdMaterialTxAdStatRecord {
    adMaterialId: number;
    adMaterialName: string;
    advertiserId: number;
    advertiserName: string;
    advertiserPlatformId: string;
    stat: any;
  }
  interface GetMovieRelatedAdTxAdMaterialStatResp {
    records: GetMovieRelatedAdMaterialTxAdStatRecord[];
    totalStat: TxAdMaterialStatColumns;
  }
  interface GetPreSignUrlReq {
    catalog: string;
    commitTaskId: number;
    filename: string;
    filesize: number;
    filetype: string;
    secondCatalog: any;
  }
  interface GetPreSignUrlResp {
    ossFileKey: string;
    ossPreUrlExpireAt: number;
    ossUrl: string;
    preSignUrl: string;
    uploadUid: string;
  }
  interface GetProtectBatchDetail {
    advertiserIds: number[];
  }
  interface GetProtectByIdResp {
    protect: FlowProtect;
  }
  interface GetQcDataTableConfResp {
    selected: any;
    template: Record<string, any>;
  }
  interface GetSettingResp {
  }
  interface GranularityDetailUniLiveResp {
    uniLiveGranularityList: UniLiveGranularity[];
  }
  interface ImageMaterial {
    imageIds: string[];
    materialId: string;
  }
  interface InviteeListRecord {
    code: string;
    departmentName: string;
    id: number;
    inviterInfo: BasicUserInfo;
    message: string;
    roleName: string;
    status: number;
    userCatalog: string;
    userCatalogDesc: string;
    userInfo: BasicUserInfo;
  }
  interface LiveOrientationTemplate {
    ac: FlowAc[];
    actionCategories: number[];
    actionCategoriesItems: any;
    actionDays: any;
    actionScene: FlowActionScene[];
    actionWords: number[];
    actionWordsItems: any;
    advertiserRetargetingTagsSetting: Record<string, any>;
    age: FlowAge[];
    autoExtendEnabled: any;
    autoExtendTargets: FlowAutoExtendTargets[];
    awemeFanAccounts: number[];
    awemeFanAccountsItems: any;
    awemeFanBehaviors: FlowAwemeFanBehaviors[];
    awemeFanBehaviorsDays: any;
    awemeFanCategories: number[];
    awemeFanCategoriesItems: any;
    city: number[];
    cityItems: any;
    district: any;
    districtType: boolean;
    districts: DistrictTools[];
    electricFenceRegion: any;
    excludeLimitedRegion: any;
    gender: any;
    interestCategories: number[];
    interestCategoriesItems: any;
    interestWords: number[];
    interestWordsItems: any;
    livePlatformTags: FlowLivePlatformTags[];
    locationType: any;
    morePeopleMode: any;
    newCustomer: any;
    orientationId: number;
    platform: FlowPlatform[];
    regionVersion: string;
    retargetingTagsExclude: number[];
    retargetingTagsExcludeItems: any;
    retargetingTagsInclude: number[];
    retargetingTagsIncludeItems: any;
    searchExtended: any;
    smartInterestAction: any;
  }
  interface LoginControlReq {
    accountLogout: string;
    forbiddenLogin: string;
  }
  interface MaterialAwemeShareMicroAppInfo {
    appId: string;
    appTitle: string;
    appUrl: string;
    description: string;
  }
  interface MaterialAwemeShareTitleHashtag {
    name: string;
    start: number;
  }
  interface MaterialCatalogsKeyByTypeMap {
  }
  interface MaterialDataTableListSummary {
    averagePlayTimePerPlay: number;
    clickCnt: number;
    cpmPlatform: number;
    createOrderAmount: number;
    createOrderCount: number;
    createOrderCouponAmount: number;
    createOrderRoi: number;
    ctr: number;
    dislikeCnt: number;
    dyComment: number;
    dyFollow: number;
    dyLike: number;
    dyShare: number;
    ecpConvertCnt: number;
    ecpConvertRate: number;
    ecpCpaPlatform: number;
    indirectOrderUnfinishedEstimateGmv7days: number;
    liveFansClubJoinCnt: number;
    liveWatchOneMinuteCount: number;
    lubanLiveClickProductCnt: number;
    lubanLiveCommentCnt: number;
    lubanLiveEnterCnt: number;
    lubanLiveGiftAmount: number;
    lubanLiveGiftCnt: number;
    lubanLiveShareCnt: number;
    lubanLiveSlidecartClickCnt: number;
    materialArpu: number;
    payOrderAmount: number;
    payOrderCount: number;
    payOrderCouponAmount: number;
    play25FeedBreak: number;
    play50FeedBreak: number;
    play75FeedBreak: number;
    playDuration10sRate: number;
    playDuration2sRate: number;
    playDuration3sRate: number;
    playDuration5sRate: number;
    playOver: number;
    playOverRate: number;
    prepayAndPayOrderRoi: number;
    prepayOrderAmount: number;
    prepayOrderCount: number;
    reportCnt: number;
    showCnt: number;
    statCost: number;
    totalPlay: number;
    unfinishedEstimateOrderGmv: number;
    validPlay: number;
    validPlayRate: number;
  }
  interface MaterialStatusFilterItem {
    id: number;
    name: string;
  }
  interface MaterialTypeCatalogAndTagGroupSettingsItem {
    categoryId: number;
    categoryName: string;
    isRequired: number;
    materialCatalog: MaterialTypeCatalogRelationMaterialCatalog;
    materialType: MaterialTypeCatalogRelationMaterialType;
    parentCatagoryId: number;
    parentCategoryName: string;
  }
  type MaterialTypeCatalogRelationMaterialCatalog =
    'video' |
    'vcollection' |
    'audio' |
    'image' |
    'script' |
    'doc';
  type MaterialTypeCatalogRelationMaterialType =
    'movie' |
    'own' |
    'cooperation' |
    'reference';
  interface MonitoringAdvertiserInner {
    advertiserId: number;
    advertiserName: string;
    subList: MonitoringAdvertiserInnerSub[];
  }
  interface MonitoringAdvertiserInnerSub {
    avatar: string;
    id: number;
    name: string;
  }
  interface MoveUsersToNewDepartmentReq {
    departmentIds: number[];
    userIds: string[];
  }
  interface MoveUsersToNewRolesReq {
    roleIds: number[];
    userIds: string[];
  }
  interface MovieRelatedAdPlanCountItem {
    adCatalog: any;
    count: number;
    marketingGoal: any;
  }
  interface MyTagGroupCommonDeleteReq {
    tagGroupIds: number[];
    tagIds: number[];
  }
  interface MyTagGroupListResp {
    count: number;
    records: MyTagGroupListTagGroup[];
  }
  interface MyTagGroupListTag {
    authorizeBegin: number;
    authorizeEnd: number;
    companyId: number;
    createdAt: string;
    creator: number;
    creatorInfo: BasicUserInfo;
    id: number;
    name: string;
    serialNumber: number;
    state: any;
    tagGroupId: number;
    type: any;
    updatedAt: string;
  }
  interface MyTagGroupListTagGroup {
    companyId: number;
    createdAt: string;
    creator: number;
    creatorInfo: BasicUserInfo;
    id: number;
    name: string;
    relateCategoryId: number;
    serialNumber: number;
    state: any;
    tags: MyTagGroupListTag[];
    type: any;
    updatedAt: string;
  }
  interface MyTagGroupsTagsChooseListItem {
    companyId: number;
    createdAt: string;
    creator: number;
    id: number;
    name: string;
    relateCategoryId: number;
    serialNumber: number;
    state: any;
    tags: Tag[];
    type: any;
    updatedAt: string;
  }
  interface MyUsedFrequentlyTagGroupRemoveTagsReq {
    id: number;
    tagIds: number[];
  }
  interface NotificationReportLogTaskRetryReq {
    dataTime: string;
    notificationReportLogId: number;
  }
  interface OptAdminUserLeaveReq {
    optUserId: string;
    resourceHandlerType: number;
    resourceReceiverId: string;
  }
  interface OptAdminUserRemoveReq {
    optUserId: string;
    resourceHandlerType: number;
    resourceReceiverId: string;
  }
  interface OptLeftAdminUserReq {
    userIds: string[];
  }
  interface OptStatusUniLiveReq {
    isEnable: boolean;
    uniLiveId: number;
  }
  interface OptUserInviteApprovalReq {
    ids: number[];
    message: string;
  }
  interface OrientationTemplate {
    advertiserIds: number[];
    campaignScene: any;
    detail: any;
    id: number;
    labAdType: any;
    marketingGoal: any;
    marketingScene: any;
    name: string;
    teamId: number;
    templateType: any;
  }
  interface OrientationTemplateChooseListInner {
    avatar: string;
    createdAt: string;
    id: number;
    marketingGoal: any;
    name: string;
    templateType: any;
    updatedAt: string;
  }
  interface OrientationTemplateChooseListReq {
    advertiserIds: number[];
    campaignScene: any;
    labAdType: any;
    limit: number;
    marketingGoal: any;
    marketingScene: any;
    name: string;
    offset: number;
    templateType: any;
  }
  interface OrientationTemplateChooseListResp {
    list: OrientationTemplateChooseListInner[];
  }
  interface OrientationTemplateDetail {
    audienceMode: any;
    liveOrientationTemplate: any;
    videoOrientationTemplate: any;
  }
  interface OssBatchOptionCommonReq {
    materialIds: string[];
    uploadUrls: string[];
  }
  interface OssBatchSyncResp {
    clientRequest: ClientRequest;
  }
  interface ProductChooseListAdTotalInner {
    advertiserId: number;
    advertiserName: string;
    subList: ProductChooseListAdTotalInnerSub[];
  }
  interface ProductChooseListAdTotalInnerSub {
    adTotal: number;
    avatar: string;
    id: number;
    name: string;
  }
  interface ProductChooseListAdTotalReq {
    advertiserIds: number[];
    marketingGoal: any;
    marketingScene: any;
  }
  interface ProductChooseListAdTotalResp {
    list: ProductChooseListAdTotalInner[];
  }
  interface ProductChooseListResp {
    products: BasicFlowSelectInfo[];
  }
  interface ProductListItem {
    companyId: number;
    createdAt: string;
    creator: number;
    creatorInfo: BasicUserInfo;
    id: number;
    name: string;
    serialNumber: number;
    updatedAt: string;
  }
  interface ProductListResp {
    count: number;
    records: ProductListItem[];
  }
  interface ProgrammaticCreativeCard {
    promotionCardActionButton: string;
    promotionCardButtonSmartOptimization: any;
    promotionCardMaterialId: string;
    promotionCardMaterialIdItem: any;
    promotionCardSellingPoints: string[];
    promotionCardTitle: string;
  }
  interface ProtectBatchDetailResp {
    defaultConfig: any;
    detail: Record<string, any>;
  }
  interface ProtectDefaultConfig {
    maxBid: number;
    maxRoi: number;
    minBid: number;
    minRoi: number;
  }
  interface PublicSettingsResp {
    downloadControls: GetSettingResp;
    shareControls: GetSettingResp;
    showRange: GetSettingResp;
  }
  interface PublicTagGroupItem {
    id: number;
    name: string;
    serialNumber: number;
  }
  interface PullAdDetailReq {
    adIds: number[];
  }
  interface PullAdMaterialReq {
    adIds: number[];
  }
  interface PullAdMaterialStatReq {
    adIds: number[];
    advertiserIds: number[];
    endDate: string;
    materialIds: number[];
    startDate: string;
  }
  interface PullAdvertiserAdDailyStatReq {
    advertiserIds: number[];
    endDate: string;
    startDate: string;
  }
  interface PullAdvertiserAdReq {
    advertiserIds: number[];
  }
  interface PullAdvertiserCampaignReq {
    advertiserIds: number[];
  }
  interface PullAdvertiserDailyStatReq {
    advertiserIds: number[];
    endDate: string;
    startDate: string;
  }
  interface PullAdvertiserJuAdMaterialStatReq {
    endDate: string;
    startDate: string;
  }
  interface PullAdvertiserMaterialStatReq {
    advertiserIds: number[];
    endDate: string;
    startDate: string;
  }
  interface PullAdvertiserUniMaterialStatExecReq {
    advertiserId: number;
    anchorId: number;
    dataTopic: DataTopic;
    startDate: string;
    targetCompanyId: number;
  }
  interface PullAdvertiserUniMaterialStatReq {
    endDate: string;
    startDate: string;
  }
  interface QueryAdBasicInfoTemplateInner {
    advertiserNames: string[];
    bidRoi: number;
    bidRoiModel: any;
    bidRoiType: any;
    budget: number;
    createdAt: string;
    id: number;
    isCollect: boolean;
    isEnable: boolean;
    marketingGoal: any;
    maxBidRoi: number;
    minBidRoi: number;
    name: string;
    qcpxMode: any;
    smartBidType: any;
    team: any;
    templateType: any;
    updatedAt: string;
    user: any;
  }
  interface QueryAdBasicInfoTemplateReq {
    advertiserIds: number[];
    bidRoiModel: any;
    isCollect: boolean;
    limit: number;
    name: string;
    offset: number;
    qcpxMode: any;
    smartBidType: any;
    teamIds: number[];
    templateType: any;
  }
  interface QueryAdBasicInfoTemplateResp {
    adBasicInfoTemplates: QueryAdBasicInfoTemplateInner[];
    total: number;
  }
  interface QueryAdTemplateInner {
    adBasicInfoTemplate: any;
    adCreativeCommonCount: number;
    adCreativeGroupCount: number;
    advertiserNames: string[];
    bidRoi: number;
    bidRoiModel: any;
    bidRoiType: any;
    campaignScene: any;
    copywriterCount: number;
    createdAt: string;
    id: number;
    isCollect: boolean;
    isEnable: boolean;
    labAdType: any;
    marketingGoal: any;
    marketingScene: any;
    maxBidRoi: number;
    minBidRoi: number;
    name: string;
    orientationTemplateCount: number;
    submitSetting: any;
    team: any;
    templateType: any;
    updatedAt: string;
    user: any;
  }
  interface QueryAdTemplateReq {
    advertiserIds: number[];
    campaignScene: any;
    createUserId: string;
    isCollect: boolean;
    labAdType: any;
    limit: number;
    marketingGoal: any;
    marketingScene: any;
    name: string;
    offset: number;
    teamIds: number[];
    templateType: any;
  }
  interface QueryAdTemplateResp {
    adTemplates: QueryAdTemplateInner[];
    total: number;
  }
  interface QueryAdvertiserMonitorInner {
    accountTotal: number;
    advertiser: any;
    advertiserId: number;
    agentName: string;
    isEnable: boolean;
    isProtect: boolean;
    platformName: string;
    statusName: string;
    teamName: string;
  }
  interface QueryAdvertiserMonitorResp {
    list: QueryAdvertiserMonitorInner[];
    total: number;
  }
  interface QueryAutoDownLossInner {
    autoDownLossModel: any;
    budget: number;
    createdAt: string;
    id: number;
    isEnable: boolean;
    marketingGoal: any;
    name: string;
    roi2Goal: number;
    triggerMode: any;
    updatedAt: string;
    user: any;
  }
  interface QueryAutoDownLossLogResp {
    autoDownLossLogs: AutoDownLossLog[];
    autoDownLossModel: any;
    total: number;
  }
  interface QueryAutoDownLossResp {
    list: QueryAutoDownLossInner[];
    total: number;
  }
  interface QueryAutoHotItemInner {
    autoHotItemModel: any;
    createdAt: string;
    id: number;
    isEnable: boolean;
    marketingGoal: any;
    name: string;
    roi2Goal: number;
    triggerMode: any;
    updatedAt: string;
    user: any;
  }
  interface QueryAutoHotItemLogResp {
    autoHotItemLogs: AutoHotItemLog[];
    autoHotItemModel: any;
    total: number;
  }
  interface QueryAutoHotItemResp {
    list: QueryAutoHotItemInner[];
    total: number;
  }
  interface QueryAwemeCategoryTopAuthorInner {
    authorName: string;
    avatar: string;
    awemeId: string;
    categoryName: string;
    coverNumStr: string;
    labelId: number;
    totalFansNumStr: string;
  }
  interface QueryAwemeCategoryTopAuthorReq {
    advertiserIds: number[];
    behaviors: FlowAwemeFanBehaviors[];
    categoryId: number;
  }
  interface QueryAwemeCategoryTopAuthorResp {
    authors: QueryAwemeCategoryTopAuthorInner[];
  }
  interface QueryAwemeInfoSearchReq {
    advertiserIds: number[];
    behaviors: FlowAwemeFanBehaviors[];
    queryWord: string;
  }
  interface QueryAwemeInfoSearchResp {
    authors: QueryAwemeSimilarAuthorSearchInner[];
    categories: QueryAwemeMultiLevelCategoryInner[];
  }
  interface QueryAwemeMultiLevelCategoryInner {
    children: QueryAwemeMultiLevelCategoryInner[];
    coverNumStr: string;
    fansNumStr: string;
    id: number;
    value: string;
  }
  interface QueryAwemeMultiLevelCategoryReq {
    advertiserIds: number[];
    behaviors: FlowAwemeFanBehaviors[];
  }
  interface QueryAwemeMultiLevelCategoryResp {
    categories: QueryAwemeMultiLevelCategoryInner[];
  }
  interface QueryAwemeSimilarAuthorSearchInner {
    authorName: string;
    avatar: string;
    awemeId: string;
    categoryName: string;
    coverNumStr: string;
    labelId: number;
    totalFansNumStr: string;
  }
  interface QueryAwemeSimilarAuthorSearchReq {
    advertiserIds: number[];
    awemeId: string;
    behaviors: FlowAwemeFanBehaviors[];
  }
  interface QueryAwemeSimilarAuthorSearchResp {
    list: QueryAwemeSimilarAuthorSearchInner[];
  }
  interface QueryNotificationReportLogInner {
    createdAt: string;
    dataDimension: any;
    errorMessage: string;
    id: number;
    isError: boolean;
    notificationUsers: BasicUserInfo[];
    reportType: any;
    ruleName: string;
    selectedDimensionNames: string[];
  }
  interface QueryNotificationReportLogReq {
    dataDimensions: SubscribeDataDimension[];
    endTime: string;
    limit: number;
    notificationReportRuleId: number;
    offset: number;
    reportTypes: SubscribeReportType[];
    ruleName: string;
    startTime: string;
  }
  interface QueryNotificationReportLogResp {
    list: QueryNotificationReportLogInner[];
    total: number;
  }
  interface QueryNotificationReportRuleInner {
    createdAt: string;
    creator: any;
    dataDimension: any;
    id: number;
    notificationUsers: QueryNotificationReportRuleInnerUserInfo[];
    reportType: any;
    ruleEnabled: boolean;
    ruleName: string;
    selectedDimensionNames: string[];
  }
  interface QueryNotificationReportRuleInnerUserInfo {
    avatar: string;
    department: QueryNotificationReportRuleInnerUserInfoDepartment[];
    id: string;
    name: string;
  }
  interface QueryNotificationReportRuleInnerUserInfoDepartment {
    id: number;
    name: string;
    path: string[];
  }
  interface QueryNotificationReportRuleReq {
    creatorId: string;
    dataDimensions: SubscribeDataDimension[];
    limit: number;
    offset: number;
    reportTypes: SubscribeReportType[];
    ruleEnabled: boolean;
    ruleName: string;
  }
  interface QueryNotificationReportRuleResp {
    list: QueryNotificationReportRuleInner[];
    total: number;
  }
  interface QueryNotificationResp {
    notifications: AdminNotification[];
  }
  interface QueryOrientationTemplateInner {
    advertiserNames: string[];
    campaignScene: any;
    createdAt: string;
    id: number;
    isCollect: boolean;
    isEnable: boolean;
    labAdType: any;
    marketingGoal: any;
    marketingScene: any;
    name: string;
    sourcePlatformName: string;
    team: any;
    templateType: any;
    updatedAt: string;
    user: any;
  }
  interface QueryOrientationTemplateReq {
    advertiserIds: number[];
    campaignScene: any;
    isCollect: boolean;
    labAdType: any;
    limit: number;
    marketingGoal: any;
    marketingScene: any;
    name: string;
    offset: number;
    teamIds: number[];
    templateType: any;
  }
  interface QueryOrientationTemplateResp {
    orientationTemplates: QueryOrientationTemplateInner[];
    total: number;
  }
  interface QueryToolsInterestActionItem {
    categoryKeywordType: any;
    children: QueryToolsInterestActionItem[];
    id: string;
    name: string;
    num: string;
  }
  interface QueryToolsInterestActionReq {
    actionDays: any;
    actionScene: FlowActionScene[];
    advertiserIds: number[];
    interestActionType: any;
    isBlend: boolean;
    queryWords: string;
  }
  interface QueryToolsInterestActionResp {
    list: QueryToolsInterestActionItem[];
  }
  interface QueryUniLiveInner {
    adId: number;
    advertiserId: number;
    advertiserName: string;
    awemeId: number;
    awemeName: string;
    budget: number;
    createdOrUpdatedStatus: any;
    createdOrUpdatedStatusMsg: string;
    id: number;
    isEnable: boolean;
    isRepeatSchedule: boolean;
    roi2Goal: number;
    smartBidType: any;
    statCost: number;
    statDatetime: string;
    status: any;
    tomorrowSchedule: string;
    totalCostPerPayOrderForRoi2: number;
    totalPayOrderCountForRoi2: number;
    totalPayOrderCouponAmountForRoi2: number;
    totalPayOrderGmvForRoi2: number;
    totalPrepayAndPayOrderRoi2: number;
    totalPrepayOrderCountForRoi2: number;
    totalPrepayOrderGmvForRoi2: number;
    totalUnfinishedEstimateOrderGmvForRoi2: number;
  }
  interface QueryUniLiveResp {
    records: QueryUniLiveInner[];
    summary: any;
    total: number;
  }
  interface QueryUnreadNotificationResp {
    total: number;
    unreadNotifications: NotificationRecord[];
  }
  interface QueryUserLoginLogReq {
    limit: number;
    offset: number;
  }
  interface QueryUserLoginLogResp {
    count: number;
    logs: AdminUserLoginLog[];
  }
  interface ReadAllNotificationReq {
    cursor: string;
    notificationType: number;
  }
  interface ReadNotificationReq {
    id: string;
    notificationType: number;
  }
  interface RefrenceContent {
    catalog: string;
    contentId: string;
    contentType: any;
    name: string;
    ossFileKey: string;
    type: string;
    url: string;
  }
  interface RefreshPreSignUrlReq {
    catalog: string;
    filename: string;
    filesize: number;
    filetype: string;
    ossFileKey: string;
    uploadUid: string;
  }
  interface RemoveUsersFromRoleReq {
    roleId: number;
    userIds: string[];
  }
  interface ReplacementAdvertiserReq {
    advertiserIds: number[];
    platformList: FlowPlatformType[];
    teamId: number;
  }
  type ResourceRoleSetType =
    '1' |
    '2';
  interface Role {
    companyId: number;
    createdAt: string;
    creator: number;
    id: number;
    isAdmin: number;
    name: string;
    updatedAt: string;
  }
  interface RoleAdminPermissionsResp {
    adminPermissions: AdminPermission[];
    isAdmin: number;
    publicPermissionKeys: string[];
    rolePermissionKeys: string[];
  }
  interface RoleChooseListItem {
    id: number;
    name: string;
  }
  interface ScriptCatalogListItem {
    companyId: number;
    createdAt: string;
    creator: number;
    creatorInfo: BasicUserInfo;
    id: number;
    name: string;
    serialNumber: number;
    updatedAt: string;
  }
  interface ScriptCatalogListResp {
    count: number;
    records: ScriptCatalogListItem[];
  }
  interface SearchKeyword {
    matchType: string;
    word: string;
    wordId: number;
    wordPackageId: number;
    wordPackageName: string;
  }
  interface ShareControlReq {
    cooperationSourceShareLimitDay: string;
    movieShareLimitDay: string;
    ownSourceShareLimitDay: string;
    referenceSourceShareLimitDay: string;
  }
  interface ShowRangeReq {
    showRange: string;
  }
  interface SortTargetInfo {
    hide: boolean;
    item: string;
  }
  interface SubmitSetting {
    batchesInterval: number;
    batchesNumber: number;
    flowAllocateRule: any;
    flowSubmitRule: any;
    flowSubmitTime: number;
    groupRules: FlowGroupRule[];
    isBatches: boolean;
    taskName: string;
  }
  interface Tag {
    authorizeBegin: number;
    authorizeEnd: number;
    companyId: number;
    createdAt: string;
    creator: number;
    id: number;
    name: string;
    serialNumber: number;
    state: any;
    tagGroupId: number;
    type: any;
    updatedAt: string;
  }
  interface TagGroup {
    companyId: number;
    createdAt: string;
    creator: number;
    id: number;
    name: string;
    relateCategoryId: number;
    serialNumber: number;
    state: any;
    type: any;
    updatedAt: string;
  }
  interface TagGroupCategorySettings {
    categoryId: number;
    categoryName: string;
    isRequired: number;
    parentCatagoryId: number;
    parentCategoryName: string;
  }
  interface TagGroupDetailTagItem {
    authorizeBegin: number;
    authorizeEnd: number;
    id: number;
    name: string;
    serialNumber: number;
    state: TagState;
  }
  type TagGroupState =
    '1' |
    '2';
  type TagGroupType =
    '1' |
    '2' |
    '3' |
    '4';
  type TagState =
    '1' |
    '2';
  type TagType =
    '1' |
    '2' |
    '3' |
    '4' |
    '5' |
    '6';
  interface TargetDelivery {
    awemeProducerAndShops: AdTemplateAwemeProducer[];
    campaignScene: any;
    deepBidType: any;
    deepExternalAction: any;
    externalAction: any;
    externalActionJson: string;
    labAdType: any;
    marketingGoal: any;
    marketingScene: any;
    newCustomer: any;
  }
  interface TargetInfo {
    item: string;
    value: number;
    valueType: number;
    weight: number;
  }
  interface TeamChooseListItem {
    id: number;
    name: string;
  }
  interface UniAweme {
    anchorForbidden: boolean;
    awemeAvatar: string;
    awemeId: number;
    awemeName: string;
    awemeShowId: string;
    canApplyUniprom: boolean;
    canControlUniprom: boolean;
    hasLivePermission: boolean;
    hasRoi2DeliveryLimit: boolean;
    hasRoi2GroupCreated: boolean;
    hasShopPermission: boolean;
  }
  interface UniLive {
    adId: number;
    advertiserId: number;
    awemeId: number;
    creativeSetting: any;
    deliverySetting: any;
    id: number;
    marketingGoal: any;
    optStatus: any;
    programmaticCreativeMediaList: any;
    smartBidType: any;
    status: any;
  }
  interface UniLiveBlockVideoMaterialInner {
    awemeItemId: number;
    materialId: string;
  }
  interface UniLiveBlockVideoMaterialItem {
    duration: number;
    id: number;
    thumb: string;
    title: string;
    url: string;
  }
  interface UniLiveCreativeSetting {
    creativeCombineType: boolean;
    creativeCombineTypelive: boolean;
    hideInAweme: boolean;
    smartSelectMaterial: boolean;
  }
  interface UniLiveDeliverySetting {
    budget: number;
    endTime: string;
    liveScheduleType: any;
    qcpxMode: any;
    roi2Goal: number;
    smartBidType: any;
    startTime: string;
  }
  interface UniLiveGranularity {
    statCost: number;
    statDatetime: string;
    totalCostPerPayOrderForRoi2: number;
    totalPayOrderCountForRoi2: number;
    totalPayOrderCouponAmountForRoi2: number;
    totalPayOrderGmvForRoi2: number;
    totalPrepayAndPayOrderRoi2: number;
    totalPrepayOrderCountForRoi2: number;
    totalPrepayOrderGmvForRoi2: number;
    totalUnfinishedEstimateOrderGmvForRoi2: number;
  }
  interface UniLiveProgrammaticCreativeMediaList {
    blockVideoMaterial: UniLiveBlockVideoMaterialInner[];
    blockVideoMaterialItems: UniLiveBlockVideoMaterialItem[];
    titleMaterial: UniLiveTitleMaterialInner[];
    videoMaterial: UniLiveVideoMaterialInner[];
    videoMaterialItems: UniLiveVideoMaterialItem[];
  }
  interface UniLiveTitleMaterialInner {
    title: string;
  }
  interface UniLiveVideoMaterialInner {
    awemeItemId: number;
    imageMode: any;
    isTranscode: boolean;
    videoCoverId: string;
    videoId: string;
    videoMaterial: any;
  }
  interface UniLiveVideoMaterialItem {
    adCreative: UniLiveVideoMaterialInner;
    alias: string;
    catalog: string;
    duration: number;
    id: string;
    isTranscode: boolean;
    md5: string;
    thumb: string;
    transcodeMd5: string;
  }
  interface UpdateAdBasicInfoTemplateReq {
    adBasicInfoTemplateId: number;
    detail: any;
    templateType: any;
  }
  interface UpdateAdTemplateReq {
    adTemplateId: number;
    detail: any;
    templateType: any;
  }
  interface UpdateAdminDepartmentReq {
    director: string;
    name: string;
    parentId: number;
  }
  interface UpdateAdminMaterialStatusReq {
    id: number;
    materialTypeCatalogRelations: any;
    name: string;
    serialNumber: number;
    style: string;
  }
  interface UpdateAdminRoleReq {
    id: number;
    name: string;
  }
  interface UpdateAdminTeamReq {
    director: string;
    id: number;
    name: string;
  }
  interface UpdateAnnotationTagReq {
    id: number;
    materialTypeCatalogs: MaterialCatalogsKeyByTypeMap;
    name: string;
    serialNumber: number;
  }
  interface UpdateAutoDownLossReq {
    autoDownLoss: any;
    autoDownLossId: number;
  }
  interface UpdateAutoHotItemReq {
    autoHotItem: any;
    autoHotItemId: number;
  }
  interface UpdateBudgetUniLiveReq {
    budget: number;
    uniLiveId: number;
  }
  interface UpdateMyTagGroupReq {
    id: number;
    name: string;
    serialNumber: number;
  }
  interface UpdateMyTagReq {
    id: number;
    name: string;
    serialNumber: number;
  }
  interface UpdateMyUsedFrequentlyTagGroupReq {
    categoryId: number;
    id: number;
    name: string;
    tagIds: number[];
    type: any;
  }
  interface UpdateNotificationReportRuleReq {
    feishuNotificationEnabled: boolean;
    id: number;
    notificationRoleIds: number[];
    notificationUserIds: string[];
    ruleEnabled: boolean;
    ruleName: string;
    scheduleTime: string;
    selectedDimensionIds: string[];
  }
  interface UpdateOrientationTemplateReq {
    detail: any;
    orientationTemplateId: number;
    templateType: any;
  }
  interface UpdateProductReq {
    id: number;
    name: string;
    serialNumber: number;
  }
  interface UpdateProtectReq {
    advertiserIds: number[];
    protect: FlowProtect;
  }
  interface UpdatePublicTagGroupReq {
    name: string;
    serialNumber: number;
    tagGroupCategorySettings: Record<string, any>;
    updateTags: TagGroupDetailTagItem[];
  }
  interface UpdateQcDataTableConfReq {
    confType: string;
    selectInfo: any[];
  }
  interface UpdateRoiUniLiveReq {
    roi2Goal: number;
    uniLiveId: number;
  }
  interface UpdateRoleAdminPermissionsReq {
    id: number;
    permissionKeys: string[];
  }
  interface UpdateScriptCatalogReq {
    id: number;
    name: string;
    serialNumber: number;
  }
  interface UpdateUniLiveReq {
    uniLive: UniLive;
    uniLiveId: number;
  }
  interface UpdateUniLiveResp {
    qianchuanFileUploadTaskParams: string;
    qianchuanFileUploadTaskUrl: string;
  }
  interface UsedFrequentlyTagGroupItem {
    tag: Tag;
    tagGroup: TagGroup;
  }
  interface UsedFrequentlyTagGroupRecord {
    companyId: number;
    createdAt: string;
    creator: number;
    id: number;
    items: UsedFrequentlyTagGroupItem[];
    name: string;
    relateCategoryId: number;
    relateCategoryMaterialCatalog: MaterialTypeCatalogRelationMaterialCatalog;
    relateCategoryMaterialType: MaterialTypeCatalogRelationMaterialType;
    serialNumber: number;
    state: any;
    type: any;
    updatedAt: string;
  }
  interface UserBasicInfoUpdateReq {
    avatar: string;
    name: string;
    password: string;
    username: string;
  }
  interface UserClientQianchuanFileUploadCallbackReq {
    signatureData: string;
  }
  interface UserCompanies {
    auditStatus: number;
    catalog: string;
    companyId: string;
    companyName: string;
    isCreator: boolean;
    isDirector: boolean;
    isLastLogin: boolean;
  }
  interface UserInfoDepartment {
    id: number;
    name: string;
    path: string[];
  }
  interface UserInfoResp {
    avatar: string;
    companies: any;
    departments: UserInfoDepartment[];
    id: string;
    innerDomain: string;
    name: string;
    outerDomain: string;
    password: string;
    permissionKeys: string[];
    requestBody: string;
    requestUrl: string;
    roles: IdName[];
    saasFsDomain: string;
    statsConfig: PersonalStatsConfig[];
    teams: IdName[];
    tel: string;
    terminalVersion: string;
    username: string;
    wechatAlias: string;
  }
  interface UserInviteInfoResp {
    auditSwitch: number;
    catalog: string;
    companyName: string;
    inviterInfo: any;
  }
  interface UserSelectSearchDepartmentItem {
    id: number;
    name: string;
  }
  interface UserSelectSearchReq {
    : number;
    all: number;
    catalog: string;
    keyword: string;
    parentDepartmentId: number;
    parentTeamId: number;
    projectId: string;
  }
  interface UserSelectSearchResp {
    departments: UserSelectSearchDepartmentItem[];
    teams: UserSelectSearchTeamItem[];
    users: BasicUserInfo[];
  }
  interface UserSelectSearchTeamItem {
    id: number;
    name: string;
  }
  interface UserinfoCompanies {
    joined: AdminCompanyBasicInfoItem[];
    my: AdminCompanyBasicInfoItem[];
  }
  interface VideoMaterial {
    awemeItemId: number;
    materialId: string;
    videoCoverId: string;
    videoId: string;
  }
  interface VideoOrientationTemplate {
    ac: FlowAc[];
    actionCategories: number[];
    actionCategoriesItems: any;
    actionDays: any;
    actionScene: FlowActionScene[];
    actionWords: number[];
    actionWordsItems: any;
    advertiserRetargetingTagsSetting: Record<string, any>;
    age: FlowAge[];
    autoExtendEnabled: any;
    autoExtendTargets: FlowAutoExtendTargets[];
    awemeFanAccounts: number[];
    awemeFanAccountsItems: any;
    awemeFanBehaviors: FlowAwemeFanBehaviors[];
    awemeFanBehaviorsDays: any;
    awemeFanCategories: number[];
    awemeFanCategoriesItems: any;
    city: number[];
    cityItems: any;
    district: any;
    districtType: boolean;
    electricFenceRegion: any;
    excludeLimitedRegion: any;
    gender: any;
    interestCategories: number[];
    interestCategoriesItems: any;
    interestWords: number[];
    interestWordsItems: any;
    livePlatformTags: FlowLivePlatformTags[];
    locationType: any;
    morePeopleMode: any;
    newCustomer: any;
    orientationId: number;
    platform: FlowPlatform[];
    regionVersion: string;
    retargetingTagsExclude: number[];
    retargetingTagsExcludeItems: any;
    retargetingTagsInclude: number[];
    retargetingTagsIncludeItems: any;
    searchExtended: any;
    smartInterestAction: any;
  }
  interface Campaign {
    advertiserId: number;
    budget: number;
    budgetMode: FlowBudgetMode;
    campaignId: number;
    campaignName: string;
    createdAt: string;
    id: number;
    marketingGoal: FlowMarketingGoal;
    marketingScene: FlowMarketingScene;
    status: string;
    updatedAt: string;
  }
  interface FlowProtect {
    advertiserId: number;
    clickProductAction: number;
    commentLive: number;
    companyId: number;
    createdAt: string;
    followAction: number;
    id: number;
    payRoi: number;
    qcFollowAction: number;
    qcMustBuy: number;
    shopping: number;
    successorderAction: number;
    successorderPay: number;
    successorderSettle: number;
    toLive: number;
    updatedAt: string;
  }
  interface JuAdMaterialStatColumns {
    active: number;
    attributionGameInAppLtv1day: number;
    attributionGameInAppLtv2days: number;
    attributionGameInAppLtv3days: number;
    attributionGameInAppLtv4days: number;
    attributionGameInAppLtv5days: number;
    attributionGameInAppLtv6days: number;
    attributionGameInAppLtv7days: number;
    attributionGameInAppLtv8days: number;
    attributionGameInAppRoi1day: number;
    attributionGameInAppRoi2days: number;
    attributionGameInAppRoi3days: number;
    attributionGameInAppRoi4days: number;
    attributionGameInAppRoi5days: number;
    attributionGameInAppRoi6days: number;
    attributionGameInAppRoi7days: number;
    attributionGameInAppRoi8days: number;
    attributionWorkWechatDialogCount: number;
    bankcardInformationCount: number;
    certificationInformationCount: number;
    clickCnt: number;
    conversionCost: number;
    conversionRate: number;
    convertCnt: number;
    cpcPlatform: number;
    cpmPlatform: number;
    ctr: number;
    dyComment: number;
    dyLike: number;
    dyShare: number;
    firstClassCount: number;
    form: number;
    highLoanCreditCount: number;
    inWechatPayCount: number;
    insuranceLtRoi: number;
    loan: number;
    loanCompletion: number;
    loanCompletionCost: number;
    loanCompletionRate: number;
    loanCost: number;
    loanCredit: number;
    loanCreditCost: number;
    loanCreditRate: number;
    loanRate: number;
    lowLoanCreditCount: number;
    openAccountCount: number;
    personalInformationCount: number;
    preLoanCredit: number;
    preLoanCreditCost: number;
    premiumPaymentCost: number;
    premiumPaymentCount: number;
    secondClassCount: number;
    showCnt: number;
    statCost: number;
    totalPlay: number;
    unfollowInWechatCount: number;
    withdrawM2Count: number;
  }
  interface KsNiuMaterialStatColumns {
    actionRatio: number;
    actionbarClick: number;
    actionbarClickCost: number;
    adItemClickCount: number;
    adLivePlayCnt: number;
    adLivePlayCntCost: number;
    adShow: number;
    adShow1kCost: number;
    block: number;
    click: number;
    comment: number;
    costTotal: number;
    effectivePlayCount: number;
    effectivePlayRatio: number;
    espClickRatio: number;
    espLivePlayedSeconds: number;
    gmv: number;
    goodsClickRatio: number;
    impression: number;
    itemNegative: number;
    likes: number;
    liveAudienceCost: number;
    liveComment: number;
    liveEventGoodsView: number;
    liveReward: number;
    liveShare: number;
    merchantRecoFans: number;
    orderRatio: number;
    paiedOrder: number;
    photoClick: number;
    photoClickRatio: number;
    play3sRatio: number;
    play5sRatio: number;
    playEndRatio: number;
    playedEnd: number;
    playedFiveSeconds: number;
    playedThreeSeconds: number;
    report: number;
    reservationCost: number;
    reservationSuccess: number;
    roi: number;
    share: number;
    standardLivePlayedStarted: number;
    t15Retention: number;
    t1Retention: number;
    t30Retention: number;
    t7Retention: number;
  }
  interface NotificationRecord {
    createdAt: string;
    delTime: string;
    notificationType: number;
    readTime: string;
    total: number;
    updatedAt: string;
  }
  interface TxAdMaterialStatColumns {
    conversionsCost: number;
    conversionsCount: number;
    conversionsRate: number;
    cost: number;
    cpc: number;
    ctr: number;
    deepConversionsCost: number;
    deepConversionsCount: number;
    deepConversionsRate: number;
    previewConversionsCount: number;
    previewDeepConversionsCount: number;
    thousandDisplayPrice: number;
    validClickCount: number;
    videoOuterPlay100Count: number;
    videoOuterPlay10Count: number;
    videoOuterPlay25Count: number;
    videoOuterPlay3sCount: number;
    videoOuterPlay50Count: number;
    videoOuterPlay5sCount: number;
    videoOuterPlay75Count: number;
    videoOuterPlay7sCount: number;
    videoOuterPlay95Count: number;
    videoOuterPlayCost: number;
    videoOuterPlayCount: number;
    videoOuterPlayRate: number;
    viewCount: number;
  }
  interface UniMaterialLiveStatColumns {
    basicStatCostForRoi2V2: number;
    clickCntForRoi2Assist: number;
    convertRateForRoi2Assist: number;
    costRateForRoi2: number;
    ctrForRoi2Assist: number;
    heatStatCostForRoi2: number;
    heatTotalPayOrderCountForRoi2: number;
    heatTotalPayOrderGmvForRoi2: number;
    heatTotalPrepayAndPayOrderRoi2: number;
    liveConvertRateForRoi2V2: number;
    liveCvrRateForRoi2V2: number;
    liveShowCountForRoi2V2: number;
    liveWatchCountForRoi2V2: number;
    payConvertCntForRoi2Assist: number;
    payConvertCostForRoi2Assist: number;
    showCntForRoi2Assist: number;
    statCostForRoi2: number;
    statCostForRoi2Assist: number;
    totalCostPerPayOrderForRoi2: number;
    totalPayOrderCountForRoi2: number;
    totalPayOrderCountForRoi2Assist: number;
    totalPayOrderCouponAmountForRoi2: number;
    totalPayOrderCouponAmountForRoi2Assist: number;
    totalPayOrderGmvForRoi2: number;
    totalPayOrderGmvForRoi2Assist: number;
    totalPayOrderGmvRateForRoi2: number;
    totalPrepayAndPayOrderRoi2: number;
    totalPrepayAndPayOrderRoi2Assist: number;
    totalPrepayOrderCountForRoi2: number;
    totalPrepayOrderGmvForRoi2: number;
    totalUnfinishedEstimateOrderGmvForRoi2: number;
    totalUnfinishedEstimateOrderGmvForRoi2Assist: number;
    videoAvgWatchDurationForRoi2: number;
    videoCommentCountForRoi2V2: number;
    videoFollowCountForRoi2: number;
    videoLikeCountForRoi2: number;
    videoPlayCountForRoi2V2: number;
    videoPlayDuration10sRateForRoi2: number;
    videoPlayDuration2sRateForRoi2: number;
    videoPlayDuration3sRateForRoi2: number;
    videoPlayDuration5sRateForRoi2: number;
    videoPlayFinishCountForRoi2V2: number;
    videoPlayFinishRateForRoi2V2: number;
  }
  interface UniMaterialProductStatColumns {
    productClickCountForRoi2: number;
    productConvertRateForRoi2: number;
    productCvrRateForRoi2: number;
    productShowCountForRoi2: number;
    statCostForRoi2: number;
    totalCostPerPayOrderForRoi2: number;
    totalPayOrderCountForRoi2: number;
    totalPayOrderCouponAmountForRoi2: number;
    totalPayOrderGmvForRoi2: number;
    totalPrepayAndPayOrderRoi2: number;
    totalUnfinishedEstimateOrderGmvForRoi2: number;
    videoAvgWatchDurationForRoi2: number;
    videoCommentCountForRoi2V2: number;
    videoFollowCountForRoi2: number;
    videoLikeCountForRoi2: number;
    videoPlayCountForRoi2V2: number;
    videoPlayDuration10sRateForRoi2: number;
    videoPlayDuration2sRateForRoi2: number;
    videoPlayDuration3sRateForRoi2: number;
    videoPlayDuration5sRateForRoi2: number;
    videoPlayFinishRateForRoi2V2: number;
  }
  interface GetContentDownloadUrlResp {
    downloadOssUrls: string[];
    downloadUrl: string;
    requestBody: string;
  }
  interface GetMaterialStatReq {
    catalog: string;
    categoryIds: number[];
    desc: boolean;
    endTime: number;
    items: string[];
    labelIds: number[];
    limit: number;
    offset: number;
    orderBy: string;
    platformType: any;
    projectId: string;
    retain1: boolean;
    retain2: number[];
    retain3: Record<string, any>;
    retain4: number;
    startTime: number;
    targetType: any;
    targets: string[];
    type: string;
  }
  interface GetMaterialTotalStatResp {
    records: MaterialTotalStatInfo[];
  }
  interface SimpleTargetInfo {
    name: string;
    targetId: string;
  }
  interface SimpleUserInfo {
    alias: string;
    avatar: string;
    cardId: string;
    id: string;
    targetType: number;
  }
  interface UploadFileInfo {
    finished: boolean;
    name: string;
    ossUid: string;
    uid: string;
    uploadUrl: string;
  }
  interface GetContentDownloadUrlResp {
    downloadUrl: string;
    requestBody: string;
  }
  interface SimpleTargetInfo {
    name: string;
    targetId: string;
  }
  interface SimpleUserInfo {
    alias: string;
    avatar: string;
    id: string;
  }
  interface UploadFileInfo {
    name: string;
    uploadUrl: string;
  }
  type FlowPlatformType =
    '-1' |
    '1' |
    '2' |
    '3' |
    '4' |
    '5';
  interface CheckGroupInfo {
    fields: StatFieldInfo[];
    name: string;
  }
  interface GetStatFieldResp {
    defaultFileds: StatFieldInfo[];
    groups: StatGroupInfo[];
  }
  interface StatFieldInfo {
    checkGroup: string;
    chineseField: string;
    defaultFlag: number;
    englishField: string;
    labelGroup: string;
    statDot: string;
  }
  interface StatGroupInfo {
    checkGroups: CheckGroupInfo[];
    name: string;
  }
  type QianchuanAdRecommendKeywordsGetV10DataListSuggestReason =
    'CLICK' |
    'DARKHORSE' |
    'LOW_COST' |
    'POTENTIAL' |
    'PREFERENCE';
  interface QianchuanAdRecommendKeywordsGetV10ResponseDataListInner {
    degree: number;
    keyword: string;
    searchSum: number;
    suggestReason: QianchuanAdRecommendKeywordsGetV10DataListSuggestReason;
  }
  type QianchuanDmpAudiencesGetV10DataRetargetingTagsHasOfflineTag =
    '0' |
    '1';
  type QianchuanDmpAudiencesGetV10DataRetargetingTagsIsCommon =
    '0' |
    '1';
  type QianchuanDmpAudiencesGetV10DataRetargetingTagsRetargetingTagsOp =
    'ALL' |
    'EXCLUDE' |
    'INCLUDE';
  type QianchuanDmpAudiencesGetV10DataRetargetingTagsSource =
    'CUSTOM_AUDIENCE_TYPE_BRAND' |
    'CUSTOM_AUDIENCE_TYPE_DATA_SOURCE' |
    'CUSTOM_AUDIENCE_TYPE_DOU_PLUS' |
    'CUSTOM_AUDIENCE_TYPE_EXTEND' |
    'CUSTOM_AUDIENCE_TYPE_FRIEND' |
    'CUSTOM_AUDIENCE_TYPE_ONE_KEY' |
    'CUSTOM_AUDIENCE_TYPE_OPERATE' |
    'CUSTOM_AUDIENCE_TYPE_PACK_RULE' |
    'CUSTOM_AUDIENCE_TYPE_RULE' |
    'CUSTOM_AUDIENCE_TYPE_THEME' |
    'CUSTOM_AUDIENCE_TYPE_THIRD_PARTY' |
    'CUSTOM_AUDIENCE_TYPE_UPLOAD' |
    'FINANCECUSTOM_AUDIENCE_TYPE_FINANCE';
  interface QianchuanDmpAudiencesGetV10ResponseData {
    offset: number;
    retargetingTags: QianchuanDmpAudiencesGetV10ResponseDataRetargetingTagsInner[];
    totalNum: number;
  }
  interface QianchuanDmpAudiencesGetV10ResponseDataRetargetingTagsInner {
    coverNum: number;
    hasOfflineTag: QianchuanDmpAudiencesGetV10DataRetargetingTagsHasOfflineTag;
    isCommon: QianchuanDmpAudiencesGetV10DataRetargetingTagsIsCommon;
    name: string;
    retargetingTagsId: number;
    retargetingTagsOp: QianchuanDmpAudiencesGetV10DataRetargetingTagsRetargetingTagsOp;
    retargetingTagsTip: string;
    source: QianchuanDmpAudiencesGetV10DataRetargetingTagsSource;
    status: number;
  }
  interface QianchuanToolsEstimateAudienceV10ResponseData {
    crowdCoverTotal: number;
    showCntTotal: number;
  }
  type QianchuanVideoGetV10DataListImageMode =
    'LARGE' |
    'LARGE_VERTICAL' |
    'SMALL' |
    'UNION_SPLASH' |
    'VIDEO_LARGE' |
    'VIDEO_VERTICAL';
  type QianchuanVideoGetV10DataListSource =
    'AGENT' |
    'ARTHUR' |
    'AUTO_GENERATE' |
    'BP' |
    'CREATIVE_CENTER' |
    'E_COMMERCE' |
    'JI_CHUANG' |
    'LIVE_HIGHLIGHT' |
    'QUNFENG' |
    'STAR' |
    'TADA' |
    'VIDEO_CAPTURE';
  interface AddCollectionReq {
    ids: string[];
    source: any;
  }
  interface AddContentAttachmentReq {
    files: UploadFileInfo[];
    id: string;
  }
  interface AddContentManualLabelReq {
    ids: string[];
    privateLabel: string;
    publishLabel: string;
  }
  interface AddContentToInventoryReq {
    ids: string[];
    type: string;
  }
  interface AddContentToPkListReq {
    ids: string[];
    listId: string;
  }
  interface AddContentToRecycleReq {
    ids: string[];
  }
  interface AddInnerShareReq {
    assignDepartment: string[];
    assignGroup: string[];
    assignTeam: string[];
    assignUser: string[];
    contentIds: string[];
    expiresAt: number;
    noticeMessage: string;
    projectId: string;
    title: string;
  }
  interface AddMovieHistoryReq {
    file: any;
    id: string;
    statusId: number;
  }
  interface AddMovieRelationReq {
    materialIds: string[];
    movieId: string;
  }
  interface AddNotifyChannelReq {
    channels: Record<string, any>[];
  }
  interface AddOuterShareReq {
    accessTimesLimit: number;
    canAnnotation: boolean;
    canDownloadOrigin: boolean;
    canDownloadTranscode: boolean;
    canReview: boolean;
    canUpdate: boolean;
    contentIds: string[];
    expiresAt: number;
    password: string;
    projectId: string;
    title: string;
  }
  interface AddProjectCommentReq {
    attachment: UploadFileInfo[];
    content: string;
    status: any;
    targetId: string;
    targetType: number;
    type: any;
  }
  interface AddProjectFileReq {
    assignDepartment: string[];
    assignGroup: string[];
    assignTeam: string[];
    assignUsers: string[];
    autoRelation: boolean;
    files: UploadFileInfo[];
    id: string;
    permissionType: string;
  }
  interface AddProjectRoleReq {
    permissions: string[];
    projectId: string;
    roleName: string;
  }
  interface AddProjectUserReq {
    departmentIds: number[];
    memberType: string;
    projectId: string;
    teamIds: number[];
    userIds: string[];
  }
  interface AddVideoCommentReq {
    attachment: any;
    content: string;
    endSecond: number;
    id: string;
    imageMeta: string;
    labelId: number;
    referUsers: string[];
    startSecond: number;
    uploadUid: string;
    viewPermission: any;
  }
  interface AddVideoHistoryPkListReq {
    ids: string[];
    name: string;
  }
  interface AddVideoReplayCommentReq {
    content: string;
    endSecond: number;
    id: string;
    imageMeta: string;
    labelId: number;
    referUsers: string[];
    startSecond: number;
    uploadUid: string;
  }
  interface AdminPermission {
    children: AdminPermission[];
    key: string;
    name: string;
  }
  interface AssignInfo {
    director: any;
    percent: number;
    value: number;
  }
  interface AssignObject {
    alias: string;
    hashId: string;
    id: number;
  }
  interface AssignTargetInfo {
    id: number;
    name: string;
  }
  interface CancelCollectionReq {
    id: string;
    targetType: any;
  }
  interface ClearRecycleReq {
    materialIds: string[];
  }
  interface ClientRequest {
    params: string;
    url: string;
  }
  interface CollectInfo {
    collectTime: number;
    contentInfo: any;
    shareInfo: any;
    source: any;
    targetId: string;
    targetType: any;
  }
  interface CollectionInfo {
    alias: string;
    id: string;
  }
  interface CollectionItem {
    alias: string;
    files: FileInfo[];
    id: string;
  }
  interface CommitTaskInfo {
    fileCount: number;
    files: UploadFileInfo[];
    finishCount: number;
    preAssignedId: number;
  }
  interface CompanyTaskInfo {
    assignDepartment: AssignTargetInfo[];
    assignTeam: AssignTargetInfo[];
    assignUser: SimpleUserInfo[];
    id: string;
    openDate: number;
    title: string;
    viewPermission: string;
  }
  interface ContentDetail {
    alias: string;
    assignDepartment: ShareTarget[];
    assignGroup: ShareTarget[];
    assignTeam: ShareTarget[];
    assignUser: SimpleUserInfo[];
    attachments: FileInfo[];
    auditReason: string;
    authEnd: number;
    authStart: number;
    brief: string;
    canAnnotation: boolean;
    canDownloadOrigin: boolean;
    canDownloadTranscode: boolean;
    canReview: boolean;
    canUpdate: boolean;
    catalog: string;
    categoryId: number;
    categoryInfo: string;
    clipDate: number;
    collections: CollectionItem[];
    companyId: string;
    contentCount: number;
    copyJyCount: number;
    copyJyMemberCount: number;
    creator: string;
    creatorAvatar: string;
    deliverCount: number;
    deliverMemberCount: number;
    departmentPaths: PathInfo[];
    downloadCount: number;
    downloadMemberCount: number;
    frameRate: number;
    getTranscodeProgress: string;
    id: string;
    isCollect: boolean;
    openDate: number;
    ossSyncStatus: any;
    payload: any;
    platformLabels: QianchuanMaterialLabel[];
    privateLabels: LabelInfo[];
    projectAlias: string;
    projectFiles: JyProjectInfo[];
    projectId: string;
    publicLabels: LabelInfo[];
    publishTime: number;
    shareId: string;
    showAuditMark: boolean;
    showHotMark: boolean;
    size: number;
    sourceId: string;
    status: any;
    systemLabels: string[];
    taskAlias: string;
    taskId: string;
    thumb: string;
    transcodeStatus: any;
    type: string;
    url: string;
    viewCount: number;
    viewMemberCount: number;
    viewPermission: string;
  }
  interface ContentEditDetail {
    alias: string;
    assignDepartment: ShareTarget[];
    assignGroup: ShareTarget[];
    assignTeam: ShareTarget[];
    assignUser: SimpleUserInfo[];
    authEnd: number;
    authStart: number;
    brief: string;
    catalog: string;
    categories: ShareTarget[];
    clipDate: number;
    collectionAlias: string;
    collectionId: string;
    collectionInfo: any;
    id: string;
    openDate: number;
    payload: any;
    privateLabels: LabelInfo[];
    publicLabels: LabelInfo[];
    taskAlias: string;
    taskId: string;
    taskInfo: any;
    thumb: string;
    transcodeStatus: any;
    transcodeUrl: string;
    type: string;
    url: string;
    versionInfo: any;
    viewPermission: string;
  }
  interface ContentInfo {
    alias: string;
    catalog: string;
    categoryId: number;
    contentCount: number;
    copyJyMemberCount: number;
    createTime: number;
    creativeType: any;
    creator: string;
    creatorAvatar: string;
    deliverMemberCount: number;
    downloadMemberCount: number;
    duration: number;
    getTranscodeProgress: string;
    id: string;
    isCollect: boolean;
    md5: string;
    movieCheck: number;
    ossSyncStatus: any;
    platformLabels: QianchuanMaterialLabel[];
    status: any;
    statusId: number;
    systemLabels: string[];
    taskAlias: string;
    taskHashId: string;
    thumbs: string[];
    todayCost: number;
    todayCostKsNiu: number;
    todayCostKsNiuUniv: number;
    todayCostOceanAd: number;
    todayCostStd: number;
    todayCostTencentAd: number;
    todayCostUniv: number;
    totalCost: number;
    totalCostKsNiu: number;
    totalCostKsNiuUniv: number;
    totalCostOceanAd: number;
    totalCostStd: number;
    totalCostTencentAd: number;
    totalCostUniv: number;
    transcodeMd5: string;
    transcodeStatus: any;
    type: string;
    urls: string[];
    viewMemberCount: number;
    viewTime: number;
  }
  interface CreateInventoryReq {
    materialIds: string[];
    name: string;
    type: string;
  }
  interface CreateProjectGroupReq {
    id: string;
    name: string;
    projectIds: string[];
    remark: string;
  }
  interface CreateProjectReq {
    announcement: string;
    cycleEnd: number;
    cycleStart: number;
    director: string;
    groupIds: string[];
    id: string;
    theme: string;
  }
  interface CreateProjectTargetReq {
    id: string;
    remark: string;
    targets: TargetInfo[];
  }
  interface CreateTaskReq {
    contentCount: number;
    deadline: number;
    director: string;
    id: string;
    productId: number;
    projectId: string;
    refrenceContents: RefrenceContent[];
    remark: string;
    scriptId: number;
    subTargetId: string;
    title: string;
    videoContent: string;
    viewPermission: any;
  }
  interface CreateVideoCollectionReq {
    categoryId: number;
    name: string;
    remark: string;
    type: string;
  }
  interface DailyStatByTargetInfo {
    startTime: number;
    stats: Record<string, any>;
    user: any;
  }
  interface DatePointInfo {
    day: string;
    value: number;
  }
  interface DelContentAttachmentReq {
    attachmentId: string;
    id: string;
  }
  interface DelNotifyChannelsReq {
    ids: string[];
  }
  interface DelUserSearchViewReq {
    ids: string[];
  }
  interface DelVideoHistoryPkListReq {
    ids: string[];
  }
  interface DeleteInventoryReq {
    ids: string[];
  }
  interface DeleteProjectCommentReq {
    ids: string[];
  }
  interface DeleteProjectFileReq {
    projectId: string;
  }
  interface DeleteProjectGroupReq {
    id: string;
  }
  interface DeleteProjectReq {
    id: string;
  }
  interface DeleteProjectRoleReq {
    roleId: string;
  }
  interface DeleteProjectTargetSplitRecordReq {
    id: string;
  }
  interface DeleteShareReq {
    ids: string[];
  }
  interface DeleteTaskReq {
    id: string;
  }
  interface DeleteVideoCommentReq {
    ids: string[];
  }
  interface DeleteVideoReplayCommentReq {
    ids: string[];
  }
  interface DepartmentMaterialDetailTotalStat {
    count: number;
    records: PersonalMaterialDetailTotalStat[];
    summary: any;
  }
  interface DepartmentTotalStat {
    count: number;
    records: PersonalTotalStat[];
    summary: any;
  }
  interface DocumentTaskInfo {
    comment: string;
    commentTask: any;
    text: string;
    textTask: any;
  }
  interface DownloadProjectFileReq {
    projectId: string;
  }
  interface DownloadTaskReferenceContentReq {
    id: string;
  }
  interface EditCollectionReq {
    alias: string;
    brief: string;
    categoryId: number;
    id: string;
  }
  interface EditDocumentReq {
    categoryId: number;
    documents: UploadDocInfo[];
    id: string;
    noticeInfo: any;
    pid: number;
    privateLabel: string;
    projectId: string;
    publicLabel: string;
    taskId: string;
    tid: number;
    type: string;
    viewPermission: any;
  }
  interface EditImageReq {
    brief: string;
    categoryId: number;
    custom: string;
    files: UploadFileInfo[];
    groups: UploadFileGroupInfo[];
    id: string;
    isSyncOss: boolean;
    name: string;
    nameRegulation: string;
    noticeInfo: any;
    pid: number;
    prefix: string;
    privateLabel: string;
    projectId: string;
    publicLabel: string;
    singlePublish: boolean;
    taskId: string;
    tid: number;
    type: string;
    viewPermission: any;
  }
  interface EditProjectCommentReq {
    attachment: UploadFileInfo[];
    content: string;
    id: string;
    status: any;
  }
  interface EditProjectRolePermissionReq {
    permissionKeys: string[];
    roleId: string;
  }
  interface EditProjectRoleReq {
    roleId: string;
    roleName: string;
  }
  interface EditScriptReq {
    categoryId: number;
    file: any;
    id: string;
    name: string;
    noticeInfo: any;
    pid: number;
    privateLabel: string;
    projectId: string;
    publicLabel: string;
    scriptTemplateId: number;
    scriptTypeId: number;
    taskId: string;
    tid: number;
    type: string;
    viewPermission: any;
  }
  interface EditVideoCommentReq {
    attachment: any;
    content: string;
    endSecond: number;
    id: string;
    imageMeta: string;
    labelId: number;
    referUsers: string[];
    startSecond: number;
    viewPermission: any;
  }
  interface EditVideoReq {
    authEnd: number;
    authStart: number;
    brief: string;
    catalog: string;
    categoryId: number;
    cid: number;
    clipDate: number;
    collectionId: string;
    custom: string;
    files: UploadFileInfo[];
    id: string;
    isSyncOss: boolean;
    nameRegulation: string;
    noticeInfo: any;
    pid: number;
    prefix: string;
    privateLabel: string;
    projectId: string;
    publicLabel: string;
    taskId: string;
    tid: number;
    type: string;
    viewPermission: any;
  }
  interface EnableNotifyChannelReq {
    id: string;
    status: any;
  }
  interface ExportTaskInfo {
    createTime: number;
    downloadUrl: string;
    errMessage: string;
    id: number;
    name: string;
    postId: string;
    status: any;
    updateTime: number;
  }
  interface FeishuBindCheckTelReq {
    code: string;
    companyId: string;
    tel: string;
  }
  interface FeishuBindCheckTelResp {
    bindStatus: number;
    feishuCompanyName: string;
  }
  interface FeishuCompanyInfoResp {
    feishuAdminName: string;
    feishuCompanyName: string;
  }
  interface FocusProjectReq {
    enable: boolean;
    id: string;
  }
  interface FocusTaskReq {
    enable: boolean;
    id: string;
  }
  interface GetCompanyFeishuBindStatusResp {
    status: number;
  }
  interface GetCompanyTaskListResp {
    count: number;
    records: CompanyTaskInfo[];
  }
  interface GetContentLocalUrlResp {
    clipboardContent: string;
    requestBody: string;
    requestUrl: string;
  }
  interface GetContentPermissionResp {
    assignDepartment: AssignObject[];
    assignGroup: AssignObject[];
    assignTeam: AssignObject[];
    assignUser: AssignObject[];
    openDate: number;
    viewPermission: string;
  }
  interface GetContentViewHistoryResp {
    count: number;
    records: ContentInfo[];
  }
  interface GetDocumentTxtContentReq {
    : string;
    fileUrl: string;
    id: string;
  }
  interface GetExportRecordsResp {
    count: number;
    records: ExportTaskInfo[];
  }
  interface GetInventoryResp {
    count: number;
    records: InventoryInfo[];
  }
  interface GetMaterialCostStatResp {
    records: MaterialCostStatInfo[];
  }
  interface GetMaterialDetailDailyStatByTargetReq {
    catalog: string;
    categoryIds: number[];
    endTime: number;
    items: string[];
    labelIds: number[];
    platformType: any;
    projectId: string;
    startTime: number;
    targetId: string;
    targetType: any;
    type: string;
  }
  interface GetMaterialDetailDailyStatByTargetResp {
    records: MaterialDetailDailyStatByTargetInfo[];
  }
  interface GetMaterialDetailListStatResp {
    count: number;
    records: MaterialDetailListInfo[];
    summary: any;
  }
  interface GetMaterialDetailTotalStatResp {
    department: any;
    personal: any;
    team: any;
    user: any;
  }
  interface GetMaterialReuseStatResp {
    records: MaterialReuseStat[];
  }
  interface GetMaterialTrendStatResp {
    records: MaterialTrendStatInfo[];
  }
  interface GetMovieHistoryResp {
    count: number;
    records: MovieHistoryInfo[];
  }
  interface GetMovieQualityEvaluateResp {
    records: PlatformLabelStatInfo[];
  }
  interface GetMyCollectionsResp {
    count: number;
    records: CollectInfo[];
  }
  interface GetNoticeContentsReq {
    ids: string[];
  }
  interface GetNotifyChannelsResp {
    count: number;
    records: NotifyChannelInfo[];
  }
  interface GetPersonalStatisticReq {
    items: PersonalStatsItem[];
  }
  interface GetProjectCommentListResp {
    count: number;
    records: ProjectCommentInfo[];
  }
  interface GetProjectGroupListResp {
    count: number;
    records: SimpleProjectGroup[];
  }
  interface GetProjectListResp {
    count: number;
    records: SimpleProjectInfo[];
  }
  interface GetProjectMainDataResp {
    infos: MainDataInfo[];
  }
  interface GetProjectPermissionResp {
    assignDepartment: AssignObject[];
    assignGroup: AssignObject[];
    assignTeam: AssignObject[];
    assignUser: AssignObject[];
    permissionType: string;
  }
  interface GetProjectRoleListResp {
    count: number;
    records: ProjectRoleInfo[];
  }
  interface GetProjectRolePermissionResp {
    adminPermissions: AdminPermission[];
    isAdmin: number;
    publicPermissionKeys: string[];
    rolePermissionKeys: string[];
  }
  interface GetProjectTargetFieldResp {
    fields: TargetField[];
  }
  interface GetProjectTargetListResp {
    projectId: string;
    targets: ProjectTargetInfo[];
  }
  interface GetProjectTargetSplitResp {
    count: number;
    records: SplitRecordInfo[];
  }
  interface GetProjectTargetSplitTrendResp {
    curves: TargetTrendInfo[];
    projectId: string;
    subTargetId: string;
  }
  interface GetProjectTargetTrendResp {
    curves: TargetTrendInfo[];
    projectId: string;
  }
  interface GetProjectUserListResp {
    count: number;
    records: SimpleUserInfo[];
  }
  interface GetRecycleListResp {
    count: number;
    records: RecycleItemInfo[];
  }
  interface GetRelationContentResp {
    contentCount: number;
    contents: ContentInfo[];
  }
  interface GetShareRecordResp {
    count: number;
    records: ShareRecordInfo[];
  }
  interface GetTaskContentListResp {
    count: number;
    records: ContentInfo[];
    total: number;
  }
  interface GetTaskDataDailyStatByTargetReq {
    endTime: number;
    id: string;
    startTime: number;
    targetId: string;
    targetType: any;
  }
  interface GetTaskDataDailyStatByTargetResp {
    records: DailyStatByTargetInfo[];
  }
  interface GetTaskDataReq {
    desc: boolean;
    endTime: number;
    id: string;
    item: string;
    limit: number;
    offset: number;
    orderBy: string;
    retain1: number[];
    retain2: number;
    startTime: number;
    targetType: any;
    targets: string[];
  }
  interface GetTaskDataTrendResp {
    points: MonthPointInfo[];
  }
  interface GetTaskDataUserTop10Resp {
    records: ValueUserInfo[];
  }
  interface GetTaskMovieStatisticReq {
    fields: string[];
    platformType: StatPlatformType;
    taskId: string;
  }
  interface GetTaskMovieStatisticResp {
    stat: Record<string, any>;
  }
  interface GetTaskSummaryDataResp {
    finishedPercent: number;
    records: TaskSummaryDataInfo[];
  }
  interface GetTaskTotalDataResp {
    department: any;
    personal: any;
    team: any;
    user: any;
  }
  interface GetTempWorkListResp {
    count: number;
    records: InventoryItemInfo[];
  }
  interface GetUploadContentDetailReq {
    uploadUrl: string;
  }
  interface GetUploadContentDetailResp {
    detail: any;
    success: boolean;
  }
  interface GetUploadTaskIdResp {
    taskId: string;
  }
  interface GetUserSearchViewResp {
    count: number;
    records: SearchViewInfo[];
  }
  interface GetUserTerminalStatusResp {
    online: number;
    version: string;
  }
  interface GetVideoCollectionResp {
    count: number;
    records: CollectionInfo[];
  }
  interface GetVideoHistoryPkListResp {
    count: number;
    records: HistoryPkListInfo[];
  }
  interface GetVideoPkListFlowDataReq {
    items: string[];
    listId: string;
  }
  interface GetVideoPkListFlowDataResp {
    count: number;
    records: VideoPkListFlowDataInfo[];
  }
  interface GetVideoPkListInteractDataResp {
    count: number;
    records: VideoPkListInteractDataInfo[];
  }
  interface GetVideoReplayCommentResp {
    count: number;
    records: VideoReplayCommentInfo[];
  }
  interface HistoryPkListInfo {
    id: string;
    name: string;
  }
  interface InventoryInfo {
    createTime: number;
    id: string;
    name: string;
  }
  interface InventoryItemInfo {
    alias: string;
    catalog: string;
    materialId: string;
    thumb: string;
    type: string;
    uid: string;
    url: string;
  }
  interface JyProjectInfo {
    alias: string;
    createTime: number;
    hasPermission: boolean;
    id: string;
    showDownload: boolean;
    thumb: string;
    userId: string;
  }
  interface LabelInfo {
    groupId: number;
    groupName: string;
    labelId: number;
    labelName: string;
  }
  interface MainDataInfo {
    item: string;
    itemChinese: string;
    projectId: string;
    unitType: any;
    value: number;
  }
  interface MaterialCostStatInfo {
    catalog: string;
    costRatio: number;
    count: number;
  }
  interface MaterialDetailDailyStatByTargetInfo {
    startTime: number;
    stats: Record<string, any>;
    user: any;
  }
  interface MaterialDetailListInfo {
    departments: string[];
    material: any;
    platformLabels: string[];
    platformLabelsEn: string[];
    stats: Record<string, any>;
    teams: string[];
    user: any;
  }
  interface MaterialDetailListSummaryInfo {
    departmentCount: number;
    materialCount: number;
    stats: Record<string, any>;
    teamCount: number;
    userCount: number;
  }
  interface MaterialDetailTotalStatInfo {
    endTime: number;
    startTime: number;
    stats: Record<string, any>;
  }
  interface MaterialReuseStat {
    count: number;
    point: ReuseInfo;
  }
  interface MaterialTotalStatInfo {
    item: string;
    momRatio: number;
    previousTotal: number;
    total: number;
  }
  interface MaterialTrendStatInfo {
    item: string;
    points: StatPointInfo[];
  }
  interface ModifyNotifyChannelReq {
    channelType: any;
    id: string;
    name: string;
    secret: string;
    selfKeyword: string;
    webhookUrl: string;
  }
  interface MonthPointInfo {
    month: string;
    value: number;
  }
  interface MoveContentToCategoryReq {
    categoryId: number;
    ids: string[];
  }
  interface MovieHistoryInfo {
    createAlias: string;
    createTime: number;
    duration: number;
    id: string;
    isCurrent: boolean;
    thumb: string;
    uploadUid: string;
    url: string;
    version: number;
  }
  interface NotifyChannelInfo {
    channelType: any;
    createTime: number;
    creator: string;
    creatorAvatar: string;
    id: string;
    name: string;
    status: any;
    webhookUrl: string;
  }
  interface PathInfo {
    ownName: string;
    parentName: string;
  }
  interface PersonalMaterialDetailTotalStat {
    departments: string[];
    statInfo: any;
    target: any;
    teams: string[];
  }
  interface PersonalStatisticInfo {
    item: any;
    total: number;
    yesterday: number;
  }
  interface PersonalTotalStat {
    departments: string[];
    statInfo: any;
    target: any;
    teams: string[];
  }
  interface PlatformLabelStatInfo {
    chineseLabel: string;
    count: number;
    label: string;
  }
  interface ProjectCommentInfo {
    attachment: UploadFileInfo[];
    content: string;
    createTime: number;
    id: string;
    replies: ProjectCommentInfo[];
    replyCount: number;
    status: any;
    type: any;
    user: any;
  }
  interface ProjectDetail {
    announcement: string;
    cycleEnd: number;
    cycleStart: number;
    director: any;
    followed: boolean;
    groups: SimpleProjectGroup[];
    id: string;
    members: SimpleUserInfo[];
    permissionKeys: string[];
    status: any;
    theme: string;
  }
  interface ProjectGroupEditDetail {
    alias: string;
    id: string;
    projectIDs: string[];
    remark: string;
  }
  interface ProjectInfo {
    announcement: string;
    cycleEnd: number;
    cycleStart: number;
    director: any;
    followed: boolean;
    id: string;
    members: SimpleUserInfo[];
    percent: number;
    sortTargets: SortTargetInfo[];
    status: any;
    targets: ProjectTargetInfo[];
    theme: string;
  }
  interface ProjectRoleInfo {
    id: string;
    isDefault: number;
    name: string;
  }
  interface ProjectTargetDetail {
    announcement: string;
    cycleEnd: number;
    cycleStart: number;
    departments: AssignTargetInfo[];
    director: any;
    id: string;
    percent: number;
    status: any;
    targets: ProjectTargetInfo[];
    theme: string;
  }
  interface ProjectTargetEditDetail {
    projectId: string;
    remark: string;
    targets: TargetInfo[];
  }
  interface ProjectTargetInfo {
    assignedList: AssignInfo[];
    assignedPercent: number;
    assignedValue: number;
    finishedPercent: number;
    finishedValue: number;
    item: string;
    itemChinese: string;
    targetValue: number;
    unitType: any;
    weight: number;
  }
  interface ProjectTargetSplitDetail {
    cycleEnd: number;
    cycleStart: number;
    departments: AssignTargetInfo[];
    director: any;
    id: string;
    percent: number;
    projectId: string;
    remark: string;
    status: any;
    targets: ProjectTargetInfo[];
  }
  interface ProjectUserInfo {
    departments: UserDepartmentInfo[];
    inviter: any;
    joinTime: number;
    memberType: string;
    projectRoles: ProjectRoleInfo[];
    status: number;
    tel: string;
    user: any;
  }
  interface PublishContentResp {
    clientRequest: any;
    status: string;
  }
  interface PublishDocReq {
    categoryId: number;
    documents: DocumentTaskInfo[];
    noticeInfo: any;
    pid: number;
    privateLabel: string;
    projectId: string;
    publicLabel: string;
    statusId: number;
    taskId: string;
    tid: number;
    type: string;
    viewPermission: any;
  }
  interface PublishImageReq {
    brief: string;
    categoryId: number;
    custom: string;
    files: UploadFileInfo[];
    groupTasks: CommitTaskInfo[];
    isSyncOss: boolean;
    name: string;
    nameRegulation: string;
    noticeInfo: any;
    pid: number;
    prefix: string;
    privateLabel: string;
    projectId: string;
    publicLabel: string;
    singlePublish: boolean;
    singleTask: any;
    statusId: number;
    taskId: string;
    tid: number;
    type: string;
    viewPermission: any;
  }
  interface PublishScriptReq {
    categoryId: number;
    name: string;
    noticeInfo: any;
    pid: number;
    preAssignedId: number;
    privateLabel: string;
    projectId: string;
    publicLabel: string;
    scriptTemplateId: number;
    scriptTypeId: number;
    statusId: number;
    taskId: string;
    tid: number;
    type: string;
    viewPermission: any;
  }
  interface PublishVideoReq {
    authEnd: number;
    authStart: number;
    brief: string;
    catalog: string;
    categoryId: number;
    cid: number;
    clipDate: number;
    collectionId: string;
    custom: string;
    fileCount: number;
    files: UploadFileInfo[];
    finishCount: number;
    isSyncOss: boolean;
    nameRegulation: string;
    noticeInfo: any;
    pid: number;
    preAssignedId: number;
    prefix: string;
    privateLabel: string;
    projectId: string;
    publicLabel: string;
    statusId: number;
    taskId: string;
    tid: number;
    type: string;
    viewPermission: any;
  }
  interface RecoverRecycleReq {
    materialIds: string[];
  }
  interface RecycleItemInfo {
    alias: string;
    catalog: string;
    createTime: number;
    creator: string;
    creatorAvatar: string;
    deleteTime: number;
    materialId: string;
    operator: string;
    operatorAvatar: string;
    thumbs: string[];
    type: string;
    uid: string;
    urls: string[];
  }
  interface RelateContentToCollectionReq {
    collectionIds: string[];
    ids: string[];
  }
  interface RemoveProjectRoleUserReq {
    roleId: string;
    userIds: string[];
  }
  interface RemoveProjectUserReq {
    projectId: string;
    userIds: string[];
  }
  interface RenameInventoryReq {
    inventoryId: string;
    name: string;
  }
  interface ReplyProjectCommentReq {
    attachment: UploadFileInfo[];
    content: string;
    id: string;
    status: any;
  }
  interface ReplyVideoCommentReq {
    attachment: any;
    content: string;
    id: string;
    referUsers: string[];
  }
  interface ReuseInfo {
    copyJyCount: number;
    downloadCount: number;
  }
  interface SaveMyPersonalStatisticConfigReq {
    config: PersonalStatsConfig[];
  }
  interface SaveSearchViewReq {
    catalog: string;
    materialType: string;
    meta: string;
    name: string;
    type: string;
  }
  interface SearchContentReq {
    catalog: string;
    categoryIds: number[];
    collectionId: string;
    costCatalog: any;
    createFrom: number;
    createTo: number;
    creativeType: any;
    creator: string;
    durationEnd: number;
    durationStart: number;
    keyword: string;
    labelAndOr: string;
    limit: number;
    offset: number;
    ossSyncStatus: any;
    platformLabel: string;
    privateLabel: number[];
    projectId: string;
    publicLabel: number[];
    sortBy: string;
    statusId: number;
    systemLabel: string;
    type: string;
  }
  interface SearchContentResp {
    count: number;
    records: ContentInfo[];
  }
  interface SearchProjectListReq {
    createEnd: number;
    createStart: number;
    groupId: string;
    isDirector: boolean;
    isFollower: boolean;
    isMember: boolean;
    keyword: string;
    limit: number;
    offset: number;
    status: any;
  }
  interface SearchProjectListResp {
    count: number;
    records: ProjectInfo[];
  }
  interface SearchProjectUserReq {
    keyword: string;
    limit: number;
    memberType: string;
    offset: number;
    projectId: string;
  }
  interface SearchProjectUserResp {
    count: number;
    records: ProjectUserInfo[];
  }
  interface SearchTaskListReq {
    and: boolean;
    asc: boolean;
    createEnd: number;
    createStart: number;
    creators: string[];
    deadlineEnd: number;
    deadlineStart: number;
    directors: string[];
    followers: string[];
    keyword: string;
    limit: number;
    offset: number;
    orderBy: string;
    projectId: string;
    status: number;
    subTargetId: string;
  }
  interface SearchTaskListResp {
    count: number;
    records: TaskInfo[];
  }
  interface SearchVideoCommentListReq {
    commentUser: string;
    desc: boolean;
    id: string;
    keyword: string;
    labelId: number;
    referMe: boolean;
    replyMe: boolean;
    sortBy: string;
    status: number;
    uploadUid: string;
  }
  interface SearchVideoCommentListResp {
    count: number;
    records: VideoCommentInfo[];
  }
  interface SearchViewInfo {
    catalog: string;
    id: string;
    materialType: string;
    meta: string;
    name: string;
    type: string;
  }
  interface SendNoticeReq {
    ids: string[];
    noticeInfo: any;
  }
  interface SetProjectFilePermissionReq {
    assignDepartment: string[];
    assignGroup: string[];
    assignTeam: string[];
    assignUsers: string[];
    permissionType: string;
    projectId: string;
  }
  interface ShareInventoryReq {
    inventoryId: string;
    noticeMessage: string;
    targetUser: string[];
  }
  interface ShareProjectFileReq {
    assignUsers: string[];
    projectId: string;
  }
  interface ShareRecordInfo {
    accessTimes: number;
    accessTimesLimit: number;
    canAnnotation: boolean;
    canDownloadOrigin: boolean;
    canDownloadTranscode: boolean;
    canReview: boolean;
    canUpdate: boolean;
    catalog: any;
    contentCatalog: string;
    contentCount: number;
    contentInfos: ContentInfo[];
    contentType: string;
    createTime: number;
    id: string;
    isCollect: boolean;
    lastViewTime: number;
    link: string;
    password: string;
    redo: boolean;
    shareCompany: any;
    shareUser: any;
    status: any;
    title: string;
  }
  interface ShareSettingDetail {
    accessTimesLimit: number;
    assignDepartment: ShareTarget[];
    assignGroup: ShareTarget[];
    assignTeam: ShareTarget[];
    assignUser: ShareTarget[];
    canAnnotation: boolean;
    canDownloadOrigin: boolean;
    canDownloadTranscode: boolean;
    canReview: boolean;
    canUpdate: boolean;
    catalog: any;
    expiresAt: number;
    id: string;
    noticeMessage: string;
    password: string;
    title: string;
  }
  interface ShareStatus {
    expireAt: number;
    isExpired: boolean;
  }
  interface ShareTarget {
    hashId: string;
    id: number;
    name: string;
    targetType: number;
  }
  interface SimpleCompanyInfo {
    id: number;
    name: string;
  }
  interface SimpleContentInfo {
    catalog: string;
    id: string;
    thumbs: string[];
    title: string;
    type: string;
    urls: string[];
  }
  interface SimpleProjectGroup {
    alias: string;
    id: string;
  }
  interface SimpleProjectInfo {
    cycleEnd: number;
    cycleStart: number;
    director: any;
    id: string;
    theme: string;
  }
  interface SplitProjectTargetReq {
    assignDepartment: string[];
    assignGroup: string[];
    assignTeam: string[];
    assignUser: string[];
    director: string;
    projectId: string;
    remark: string;
    splitId: string;
    targets: TargetInfo[];
  }
  interface SplitRecordInfo {
    createTime: number;
    departments: AssignTargetInfo[];
    director: any;
    finishedPercent: number;
    id: string;
    projectId: string;
    remark: string;
    sortTargets: SortTargetInfo[];
    status: any;
    targets: SplitTargetInfo[];
  }
  interface SplitTargetInfo {
    finishedPercent: number;
    finishedValue: number;
    item: string;
    itemChinese: string;
    targetValue: number;
    unitType: any;
    weight: number;
  }
  interface StatPointInfo {
    statDate: string;
    value: number;
  }
  interface StatusInfo {
    name: string;
    style: string;
  }
  interface SwitchMovieVersionReq {
    movieId: string;
    versionId: string;
  }
  interface TargetField {
    item: string;
    itemChinese: string;
    unitType: any;
  }
  interface TargetSplitEditDetail {
    assignDepartment: AssignTargetInfo[];
    assignTeam: AssignTargetInfo[];
    assignUser: SimpleUserInfo[];
    director: any;
    id: string;
    projectId: string;
    remark: string;
    targets: TargetInfo[];
  }
  interface TargetTrendInfo {
    item: string;
    itemChinese: string;
    points: DatePointInfo[];
  }
  interface TaskDetail {
    assignDepartment: AssignTargetInfo[];
    assignTeam: AssignTargetInfo[];
    assignUser: SimpleUserInfo[];
    contentCount: number;
    createTime: number;
    creator: any;
    deadline: number;
    director: any;
    finishCount: number;
    followed: boolean;
    id: string;
    openDate: number;
    productName: string;
    projectTitle: string;
    refrenceContents: RefrenceContent[];
    remark: string;
    scriptName: string;
    status: number;
    subTargetTitle: string;
    title: string;
    uid: string;
    videoContent: string;
    viewPermission: string;
  }
  interface TaskEditDetail {
    assignDepartment: AssignTargetInfo[];
    assignGroup: AssignTargetInfo[];
    assignTeam: AssignTargetInfo[];
    assignUser: SimpleUserInfo[];
    contentCount: number;
    deadline: number;
    director: any;
    id: string;
    openDate: number;
    productId: number;
    productName: string;
    projectId: string;
    projectTitle: string;
    refrenceContents: RefrenceContent[];
    remark: string;
    scriptId: number;
    scriptName: string;
    subTargetId: string;
    subTargetTitle: string;
    title: string;
    videoContent: string;
    viewPermission: string;
  }
  interface TaskInfo {
    contentCount: number;
    createTime: number;
    creator: any;
    deadline: number;
    director: any;
    finishCount: number;
    followed: boolean;
    followers: SimpleUserInfo[];
    id: string;
    productName: string;
    projectTitle: string;
    refrenceContents: RefrenceContent[];
    relateContents: SimpleContentInfo[];
    remark: string;
    status: number;
    subTargetTitle: string;
    title: string;
    uid: string;
    updateTime: number;
    videoContent: string;
  }
  interface TaskSummaryDataInfo {
    item: string;
    momRatio: number;
    previousTotal: number;
    total: number;
  }
  interface TeamMaterialDetailTotalStat {
    count: number;
    records: PersonalMaterialDetailTotalStat[];
    summary: any;
  }
  interface TeamTotalStat {
    count: number;
    records: PersonalTotalStat[];
    summary: any;
  }
  interface TotalStatInfo {
    endTime: number;
    startTime: number;
    stats: Record<string, any>;
  }
  interface TranscodeContentReq {
    id: string;
  }
  interface TranscodeContentResp {
    requestBody: string;
    requestUrl: string;
  }
  interface UpdateContentPermissionReq {
    ids: string[];
    noticeInfo: any;
    viewPermission: any;
  }
  interface UpdateContentRelationReq {
    contentIds: string[];
    id: string;
  }
  interface UpdateContentStatusReq {
    ids: string[];
    noticeInfo: any;
    status: number;
  }
  interface UpdateContentTitleReq {
    ids: string[];
    keyword: string;
    nameRegulation: string;
  }
  interface UpdateDocumentTxtContentReq {
    content: string;
    fileUrl: string;
    id: string;
  }
  interface UpdateInnerShareReq {
    assignDepartment: string[];
    assignGroup: string[];
    assignTeam: string[];
    assignUser: string[];
    expiresAt: number;
    id: string;
    noticeMessage: string;
    title: string;
  }
  interface UpdateInventoryReq {
    id: string;
    materialIds: string[];
  }
  interface UpdateOuterShareReq {
    accessTimesLimit: number;
    canAnnotation: boolean;
    canDownloadOrigin: boolean;
    canDownloadTranscode: boolean;
    canReview: boolean;
    canUpdate: boolean;
    expiresAt: number;
    id: string;
    password: string;
    title: string;
  }
  interface UpdateProjectGroupReq {
    groupIds: string[];
    id: string;
  }
  interface UpdateProjectStatusReq {
    id: string;
    status: any;
  }
  interface UpdateProjectTargetSplitStatusReq {
    id: string;
    status: any;
  }
  interface UpdateProjectUserRoleReq {
    projectId: string;
    roleIds: string[];
    userIds: string[];
  }
  interface UpdateTargetSortSettingReq {
    settings: SortTargetInfo[];
    targetId: string;
  }
  interface UpdateTaskReferenceContentReq {
    id: string;
    refrenceContents: RefrenceContent[];
  }
  interface UpdateTaskReferenceContentResp {
    refrenceContents: RefrenceContent[];
  }
  interface UpdateTempWorkListReq {
    materialIds: string[];
    type: string;
  }
  interface UpdateUserSearchViewReq {
    id: string;
    meta: string;
    name: string;
  }
  interface UpdateVideoCommentStatusReq {
    id: string;
    status: any;
  }
  interface UploadDocInfo {
    comment: string;
    commentFiles: UploadFileInfo[];
    finished: boolean;
    text: string;
    textFiles: UploadFileInfo[];
  }
  interface UploadFileGroupInfo {
    files: UploadFileInfo[];
    finished: boolean;
    name: string;
  }
  interface UserDepartmentInfo {
    id: number;
    name: string;
    path: string[];
  }
  interface UserMaterialDetailTotalStat {
    count: number;
    records: PersonalMaterialDetailTotalStat[];
  }
  interface UserTotalStat {
    count: number;
    records: PersonalTotalStat[];
  }
  interface ValueUserInfo {
    user: any;
    value: number;
  }
  interface VideoCommentInfo {
    attachment: any;
    content: string;
    createTime: number;
    endSecond: number;
    id: string;
    imageMeta: string;
    label: any;
    referUsers: SimpleUserInfo[];
    replies: VideoCommentInfo[];
    replyCount: number;
    startSecond: number;
    status: any;
    taggedReply: boolean;
    type: any;
    user: any;
  }
  interface VideoPkListFlowDataInfo {
    alias: string;
    hashId: string;
    itemMap: Record<string, any>;
  }
  interface VideoPkListInteractDataInfo {
    alias: string;
    copyJyCount: number;
    copyJyMemberCount: number;
    deliverCount: number;
    deliverMemberCount: number;
    downloadCount: number;
    downloadMemberCount: number;
    hashId: string;
    viewCount: number;
    viewMemberCount: number;
  }
  interface VideoReplayCommentInfo {
    content: string;
    createTime: number;
    endSecond: number;
    id: string;
    imageMeta: string;
    label: any;
    startSecond: number;
    user: any;
  }
  interface AdAccountInfo {
    accountId: number;
    accountName: string;
  }
  interface AdMaterialInfo {
    createTime: number;
    materialId: string;
    materialName: string;
  }
  interface AdTemplateAccountInfo {
    accounts: AdAccountInfo[];
    templateAlias: string;
    templateId: number;
  }
  interface AddMovieRelatedAdMaterialReq {
    id: string;
    materials: AddMovieRelatedAdMaterialReqMaterial[];
  }
  interface AddMovieRelatedAdMaterialReqMaterial {
    adMaterialId: string;
    adMaterialName: string;
    advertiserId: number;
    flowPlatform: any;
  }
  interface AdvertiserInfo {
    advertiserId: number;
    advertiserName: string;
    flowPlatform: any;
  }
  interface CancelMovieDeriveReq {
    ids: string[];
    movieId: string;
  }
  interface CheckDeliverVideoInfo {
    errMsg: string;
    id: string;
    isErr: boolean;
    isPlatformUploadRepeat: boolean;
    isTranscode: boolean;
  }
  interface CheckDeliverVideoReq {
    isTranscode: boolean;
    materialsConfig: MaterialTranscodeConfig[];
    platform: any;
  }
  interface CheckDeliverVideoResp {
    list: CheckDeliverVideoInfo[];
  }
  interface CreativityGroupInfo {
    materialIds: string[];
    name: string;
  }
  interface DelMovieRelatedAdMaterialReq {
    ids: string[];
    movieId: string;
  }
  interface DeliverAndCreateAdReq {
    creativityGroups: CreativityGroupInfo[];
    deliverTargets: DeliverTargetInfo[];
    isTranscode: boolean;
    statusId: number;
    videoName: string;
  }
  interface DeliverAndCreateAdResp {
    requestBody: string;
    requestUrl: string;
    rollbackBody: string;
    rollbackUrl: string;
  }
  interface DeliverTargetInfo {
    adTemplateId: number;
    advertiserIds: number[];
  }
  interface DeliverVideoReq {
    advertiserIds: number[];
    derive: any;
    isTranscode: boolean;
    materialIds: string[];
    materialsConfig: MaterialTranscodeConfig[];
    platform: any;
    statusId: number;
    videoName: string;
  }
  interface DeriveConfig {
    enable: boolean;
    type: number;
    value: number;
  }
  interface DerivedMovieDeliverInfo {
    advertiserId: number;
    advertiserName: string;
    createTime: number;
    deliverId: number;
    flowMaterialAlias: string;
    flowMaterialId: number;
    flowPlatform: any;
    materialUid: string;
    movieAlias: string;
    msg: string;
    opUser: any;
    qichuanMaterialAlias: string;
    qichuanMaterialId: number;
    status: any;
    updateTime: number;
    urlType: any;
  }
  interface DerivedMovieFlowInfo {
    adId: number;
    adName: string;
    adTemplateId: number;
    adTemplateName: string;
    advertiserId: number;
    advertiserName: string;
    createTime: number;
    deliverId: number;
    flowPlatform: any;
    marketingGoal: any;
    materialUid: string;
    movieAlias: string;
    opUser: any;
    reportMsg: string;
    reportStatus: any;
    updateTime: number;
    urlType: any;
  }
  interface ExportMovieRelatedAdMaterialStatReq {
    adCatalog: any;
    cid: number;
    companyId: number;
    fields: string[];
    from: number;
    id: string;
    marketingGoal: any;
    to: number;
    userId: number;
  }
  interface FileInfo {
    id: string;
    name: string;
    thumb: string;
    transcodeStatus: any;
    transcodeUrl: string;
    url: string;
  }
  interface GetAdTemplateAccountListReq {
    ids: number[];
  }
  interface GetAdTemplateAccountListResp {
    records: AdTemplateAccountInfo[];
  }
  interface GetAdVideoListResp {
    count: number;
    records: AdMaterialInfo[];
  }
  interface GetDerivedMovieDeliverRecordsResp {
    count: number;
    records: DerivedMovieDeliverInfo[];
  }
  interface GetDerivedMovieFlowRecordsResp {
    count: number;
    records: DerivedMovieFlowInfo[];
  }
  interface GetMovieAuditHistoryResp {
    count: number;
    records: MovieAuditHistoryInfo[];
  }
  interface GetMovieDeliverRecordsResp {
    count: number;
    records: MovieDeliverInfo[];
    statusStat: Record<string, any>;
  }
  interface GetMovieDeriveRecordsResp {
    count: number;
    records: MovieDeriveInfo[];
  }
  interface GetMovieMonitorAdvertiserResp {
    count: number;
    records: AdvertiserInfo[];
  }
  interface GetMovieRelatedAdMaterialResp {
    count: number;
    records: RelateAdMaterialInfo[];
  }
  interface GetMovieRelatedAdMaterialStatResp {
    records: MovieRelatedAdMaterialStatInfo[];
    totalStat: Record<string, any>;
  }
  interface GetMovieRelatedAdPlanCountResp {
    records: MovieRelatedAdPlanCountItem[];
  }
  interface GetMovieRelatedAdPlanStatReq {
    adCatalog: any;
    from: number;
    id: string;
    marketingGoal: any;
    to: number;
  }
  interface GetMovieRelatedAdPlanStatResp {
    lastUpdateAt: string;
    records: MovieRelatedAdPlanStatInfo[];
    totalStat: Record<string, any>;
  }
  interface GetMovieReplayStatisticResp {
    points: PointInfo[];
  }
  interface GetVideoPkListLossDataResp {
    count: number;
    records: VideoPkListLossDataInfo[];
  }
  interface LossPoint {
    hSecond: number;
    value: number;
  }
  interface MaterialTranscodeConfig {
    isTranscode: boolean;
    materialId: string;
  }
  interface MovieAuditHistoryInfo {
    adMaterialId: number;
    adPlanId: number;
    adPlanName: string;
    advertiserId: number;
    advertiserName: string;
    auditTime: number;
    flowPlatform: any;
    id: string;
    materialAlias: string;
    rejectReason: string;
    suggestions: string;
    urlType: any;
  }
  interface MovieDeliverInfo {
    advertiserId: number;
    advertiserName: string;
    advertiserPlatformId: string;
    createTime: number;
    flowMaterialAlias: string;
    flowMaterialId: number;
    id: string;
    materialAlias: string;
    msg: string;
    platform: any;
    platformName: string;
    status: any;
  }
  interface MovieDeriveInfo {
    alias: string;
    createTime: number;
    deriveUser: any;
    id: string;
    lastOpUser: any;
    status: any;
    thumbUrl: string;
    uid: string;
    updateTime: number;
    videoUrl: string;
  }
  interface MovieRelatedAdMaterialStatInfo {
    adMaterialId: number;
    adMaterialName: string;
    advertiserId: number;
    advertiserName: string;
    advertiserPlatformId: string;
    stat: Record<string, any>;
  }
  interface MovieRelatedAdPlanStatInfo {
    adMaterialId: number;
    adMaterialName: string;
    adPlanId: number;
    adPlanName: string;
    advertiserId: number;
    advertiserName: string;
    advertiserPlatformId: string;
    stat: Record<string, any>;
  }
  interface NoticeInfo {
    departmentIds: string[];
    groupIds: string[];
    message: string;
    teamIds: string[];
    userIds: string[];
  }
  interface PermissionInfo {
    assignDepartment: string[];
    assignGroup: string[];
    assignTeam: string[];
    assignUser: string[];
    openDate: number;
    type: string;
  }
  interface PointInfo {
    clickCnt: number;
    dyComment: number;
    dyFollow: number;
    dyLike: number;
    hSec: number;
    userLoseCnt: number;
  }
  interface RedoVideoDeliverReq {
    id: string;
  }
  interface RelateAdMaterialInfo {
    adMaterialId: number;
    adMaterialName: string;
    advertiserId: number;
    advertiserName: string;
    advertiserPlatformId: string;
    flowPlatform: any;
    flowPlatformName: string;
    id: string;
    opUser: any;
    relateMode: number;
    relatedAt: number;
  }
  interface SimpleUserInfo {
    alias: string;
    avatar: string;
    id: string;
  }
  interface UpdateMovieMonitorAdvertiserReq {
    addTargets: AdvertiserInfo[];
    id: string;
  }
  interface VideoPkListLossDataInfo {
    alias: string;
    hashId: string;
    statMp: Record<string, any>;
  }
}