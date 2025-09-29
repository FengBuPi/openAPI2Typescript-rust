
declare namespace MyAPI {
        interface BasicAdvertiserInfo {
              advertiser_platform_id: string;
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
        enum AdPlanCatalog {
              REPORT = "report",
              UNI_PROMOTION = "uni_promotion",
              UNI_PROMOTION_PRODUCT = "uni_promotion_product",
              XIAODIAN = "xiaodian",
        }
        enum AdReportStatus {
              SUCCESS = "SUCCESS",
              FAIL = "FAIL",
              PROCESSING = "PROCESSING",
              WAITING = "WAITING",
              COPYING = "COPYING",
        }
        enum AdReportTaskStatus {
              PROCESSING = "PROCESSING",
              COPYING = "COPYING",
              ALL_SUCCESS = "ALL_SUCCESS",
              PART_SUCCESS = "PART_SUCCESS",
              ALL_FAIL = "ALL_FAIL",
              PART_FAIL = "PART_FAIL",
        }
        enum CollectTargetType {
              VALUE_1 = 1,
              VALUE_2 = 2,
        }
        enum CollectionSource {
              MOVIE = "movie",
              OWN = "own",
              COOPERATION = "cooperation",
              REFERENCE = "reference",
              INNER_SHARE = "inner_share",
              OUTER_SHARE = "outer_share",
        }
        enum CommentStatus {
              VALUE_1 = 1,
              VALUE_2 = 2,
        }
        enum CommentType {
              VALUE_1 = 1,
              VALUE_2 = 2,
              VALUE_3 = 3,
        }
        enum CostCatalog {
              VALUE_1 = 1,
              VALUE_2 = 2,
              VALUE_3 = 3,
              VALUE_4 = 4,
              VALUE_5 = 5,
              VALUE_6 = 6,
              VALUE_7 = 7,
              VALUE_8 = 8,
              VALUE_9 = 9,
              VALUE_10 = 10,
              VALUE_11 = 11,
        }
        enum CreativeType {
              VALUE_1 = "",
              H_VIDEO = "h_video",
              V_VIDEO = "v_video",
              H_BIG_IMG = "h_big_img",
              V_BIG_IMG = "v_big_img",
              H_SMALL_IMG = "h_small_img",
              CARD_SQUARE_IMG = "card_square_img",
        }
        enum DataTopic {
              SITE_PROMOTION_POST_DATA_LIVE = "SITE_PROMOTION_POST_DATA_LIVE",
              SITE_PROMOTION_POST_DATA_VIDEO = "SITE_PROMOTION_POST_DATA_VIDEO",
              SITE_PROMOTION_POST_DATA_OTHER = "SITE_PROMOTION_POST_DATA_OTHER",
              SITE_PROMOTION_POST_DATA_TITLE = "SITE_PROMOTION_POST_DATA_TITLE",
              SITE_PROMOTION_PRODUCT_POST_DATA_TITLE = "SITE_PROMOTION_PRODUCT_POST_DATA_TITLE",
              SITE_PROMOTION_PRODUCT_POST_DATA_IMAGE = "SITE_PROMOTION_PRODUCT_POST_DATA_IMAGE",
              SITE_PROMOTION_PRODUCT_POST_DATA_VIDEO = "SITE_PROMOTION_PRODUCT_POST_DATA_VIDEO",
              SITE_PROMOTION_PRODUCT_POST_DATA_OTHER = "SITE_PROMOTION_PRODUCT_POST_DATA_OTHER",
        }type DeliverVideoUrlType = string;
        enum ExportTaskStatus {
              VALUE_1 = 1,
              VALUE_2 = 2,
              VALUE_3 = 3,
              VALUE_4 = 4,
        }
        enum FlowAc {
              VALUE_2G = "2G",
              VALUE_3G = "3G",
              VALUE_4G = "4G",
              VALUE_5G = "5G",
              WIFI = "WIFI",
        }
        enum FlowActionDays {
              VALUE_7 = 7,
              VALUE_15 = 15,
              VALUE_30 = 30,
              VALUE_60 = 60,
              VALUE_90 = 90,
              VALUE_180 = 180,
              VALUE_365 = 365,
        }
        enum FlowActionScene {
              APP = "APP",
              E_COMMERCE = "E-COMMERCE",
              NEWS = "NEWS",
              SEARCH = "SEARCH",
        }
        enum FlowAge {
              AGE_ABOVE_50 = "AGE_ABOVE_50",
              AGE_BETWEEN_18_23 = "AGE_BETWEEN_18_23",
              AGE_BETWEEN_24_30 = "AGE_BETWEEN_24_30",
              AGE_BETWEEN_31_40 = "AGE_BETWEEN_31_40",
              AGE_BETWEEN_41_49 = "AGE_BETWEEN_41_49",
        }
        enum FlowAllocateRule {
              VALUE_1 = 1,
              VALUE_2 = 2,
        }
        enum FlowAudienceMode {
              AUTO = "AUTO",
              AUTO_ORIENTATION = "AUTO_ORIENTATION",
              CUSTOM = "CUSTOM",
              NONE = "NONE",
              ORIENTATION_PACKAGE = "ORIENTATION_PACKAGE",
        }
        enum FlowAuditStatus {
              PASS = "PASS",
              REJECT = "REJECT",
              IN_PROGRESS = "IN_PROGRESS",
        }
        enum FlowAutoDownLossModel {
              VALUE_1 = 1,
              VALUE_2 = 2,
              VALUE_3 = 3,
        }
        enum FlowAutoExtendEnabled {
              VALUE_0 = 0,
              VALUE_1 = 1,
        }
        enum FlowAutoExtendTargets {
              AGE = "AGE",
              CUSTOM_AUDIENCE = "CUSTOM_AUDIENCE",
              GENDER = "GENDER",
              INTEREST_ACTION = "INTEREST_ACTION",
              REGION = "REGION",
        }
        enum FlowAutoHotItemModel {
              VALUE_1 = 1,
              VALUE_2 = 2,
              VALUE_3 = 3,
        }
        enum FlowAwemeFanBehaviors {
              COMMENTED_USER = "COMMENTED_USER",
              FOLLOWED_USER = "FOLLOWED_USER",
              GOODS_CARTS_CLICK = "GOODS_CARTS_CLICK",
              GOODS_CARTS_ORDER = "GOODS_CARTS_ORDER",
              LIKED_USER = "LIKED_USER",
              LIVE_COMMENT = "LIVE_COMMENT",
              LIVE_EFFECTIVE_WATCH = "LIVE_EFFECTIVE_WATCH",
              LIVE_EXCEPTIONAL = "LIVE_EXCEPTIONAL",
              LIVE_GOODS_CLICK = "LIVE_GOODS_CLICK",
              LIVE_GOODS_ORDER = "LIVE_GOODS_ORDER",
              LIVE_WATCH = "LIVE_WATCH",
              SHARED_USER = "SHARED_USER",
        }
        enum FlowAwemeFanBehaviorsDays {
              DAYS_15 = "DAYS_15",
              DAYS_30 = "DAYS_30",
              DAYS_60 = "DAYS_60",
        }
        enum FlowAwemeStatus {
              ANCHOR_FORBID = "ANCHOR_FORBID",
              ANCHOR_REACH_UPPER_LIMIT_TODAY = "ANCHOR_REACH_UPPER_LIMIT_TODAY",
              NORMAL = "NORMAL",
              UNKNOWN = "UNKNOWN",
        }
        enum FlowBidRoiModel {
              RANDOM = "random",
              FIXED = "fixed",
              LADDER = "ladder",
        }
        enum FlowBidRoiType {
              BID = "bid",
              ROI = "roi",
        }
        enum FlowBindType {
              AWEME_COOPERATOR = "AWEME_COOPERATOR",
              DOU_SHOP_LIVE_SELF = "DOU_SHOP_LIVE_SELF",
              EXPIRED = "EXPIRED",
              OFFICIAL = "OFFICIAL",
              SELF = "SELF",
              TALENT_USER_OWNER = "TALENT_USER_OWNER",
              UNAUTHORIZED = "UNAUTHORIZED",
              UNKNOWN = "UNKNOWN",
        }
        enum FlowBudgetMode {
              BUDGET_MODE_DAY = "BUDGET_MODE_DAY",
              BUDGET_MODE_SEVEN_DAY_CYCLE = "BUDGET_MODE_SEVEN_DAY_CYCLE",
              BUDGET_MODE_TOTAL = "BUDGET_MODE_TOTAL",
        }
        enum FlowCampaignScene {
              DAILY_SALE = "DAILY_SALE",
              NEW_CUSTOMER_TRANSFORMATION = "NEW_CUSTOMER_TRANSFORMATION",
              NEW_PRODUCT_BOOST = "NEW_PRODUCT_BOOST",
        }
        enum FlowCarouselSource {
              JI_CHUANG = "JI_CHUANG",
              AWEME = "AWEME",
              E_COMMERCE = "E_COMMERCE",
        }
        enum FlowCategoryKeywordType {
              VALUE_1 = 1,
              VALUE_2 = 2,
        }
        enum FlowCreativeAutoGenerate {
              VALUE_0 = 0,
              VALUE_1 = 1,
        }
        enum FlowCreativeMaterialMode {
              CUSTOM_CREATIVE = "CUSTOM_CREATIVE",
              PROGRAMMATIC_CREATIVE = "PROGRAMMATIC_CREATIVE",
        }
        enum FlowDeepBidType {
              COMM_ROI = "COMM_ROI",
              MIN = "MIN",
              MIN_SECOND_STAGE = "MIN_SECOND_STAGE",
              PACING = "PACING",
              PAY_ROI = "PAY_ROI",
        }
        enum FlowDeepExternalAction {
              AD_CONVERT_TYPE_CARD_ACTIVE = "AD_CONVERT_TYPE_CARD_ACTIVE",
              AD_CONVERT_TYPE_LIVE_PAY_ROI = "AD_CONVERT_TYPE_LIVE_PAY_ROI",
        }
        enum FlowDescription {
              COUNTRY = "COUNTRY",
              STATE = "STATE",
              REGION = "REGION",
        }
        enum FlowDimension {
              TIME_GRANULARITY_DAILY = "TIME_GRANULARITY_DAILY",
              TIME_GRANULARITY_HOURLY = "TIME_GRANULARITY_HOURLY",
        }
        enum FlowDistrict {
              CITY = "CITY",
              COUNTY = "COUNTY",
              NONE = "NONE",
        }
        enum FlowElectricFenceRegion {
              VALUE_1 = 1,
              VALUE_2 = 2,
        }
        enum FlowExcludeLimitedRegion {
              VALUE_0 = 0,
              VALUE_1 = 1,
        }
        enum FlowExternalAction {
              AD_CONVERT_TYPE_CARD_ACTIVE = "AD_CONVERT_TYPE_CARD_ACTIVE",
              AD_CONVERT_TYPE_LIVE_CLICK_PRODUCT_ACTION = "AD_CONVERT_TYPE_LIVE_CLICK_PRODUCT_ACTION",
              AD_CONVERT_TYPE_LIVE_PAY_ROI = "AD_CONVERT_TYPE_LIVE_PAY_ROI",
              AD_CONVERT_TYPE_LIVE_SUCCESSORDER_ACTION = "AD_CONVERT_TYPE_LIVE_SUCCESSORDER_ACTION",
              AD_CONVERT_TYPE_LIVE_SUCCESSORDER_PAY = "AD_CONVERT_TYPE_LIVE_SUCCESSORDER_PAY",
              AD_CONVERT_TYPE_LIVE_SUCCESSORDER_PAY_7DAYS = "AD_CONVERT_TYPE_LIVE_SUCCESSORDER_PAY_7DAYS",
              AD_CONVERT_TYPE_LIVE_SUCCESSORDER_SETTLE = "AD_CONVERT_TYPE_LIVE_SUCCESSORDER_SETTLE",
              AD_CONVERT_TYPE_NEW_FOLLOW_ACTION = "AD_CONVERT_TYPE_NEW_FOLLOW_ACTION",
              AD_CONVERT_TYPE_QC_FOLLOW_ACTION = "AD_CONVERT_TYPE_QC_FOLLOW_ACTION",
              AD_CONVERT_TYPE_QC_MUST_BUY = "AD_CONVERT_TYPE_QC_MUST_BUY",
              AD_CONVERT_TYPE_SHOPPING = "AD_CONVERT_TYPE_SHOPPING",
        }
        enum FlowFileUploadStatus {
              SUCCESS = "SUCCESS",
              FAIL = "FAIL",
              PROCESSING = "PROCESSING",
        }
        enum FlowGender {
              GENDER_FEMALE = "GENDER_FEMALE",
              GENDER_MALE = "GENDER_MALE",
              NONE = "NONE",
        }
        enum FlowGroupRule {
              VALUE_1 = 1,
              VALUE_2 = 2,
              VALUE_3 = 3,
              VALUE_4 = 4,
              VALUE_5 = 5,
        }
        enum FlowHasMore {
              VALUE_0 = 0,
              VALUE_1 = 1,
        }
        enum FlowImageMode {
              SQUARE = "SQUARE",
              SMALL = "SMALL",
              LARGE = "LARGE",
              VIDEO_LARGE = "VIDEO_LARGE",
              VIDEO_VERTICAL = "VIDEO_VERTICAL",
              LARGE_VERTICAL = "LARGE_VERTICAL",
              UNION_SPLASH = "UNION_SPLASH",
              AWEME_LIVE_ROOM = "AWEME_LIVE_ROOM",
        }
        enum FlowImageSource {
              E_COMMERCE = "E_COMMERCE",
              CREATIVE_CENTER = "CREATIVE_CENTER",
              SQUARE = "SQUARE",
              JI_CHUANG = "JI_CHUANG",
        }
        enum FlowInterestActionType {
              VALUE_1 = 1,
              VALUE_2 = 2,
        }
        enum FlowIsHomepageHide {
              VALUE_0 = 0,
              VALUE_1 = 1,
        }
        enum FlowIsRecommend {
              VALUE_0 = 0,
              VALUE_1 = 1,
        }
        enum FlowLabAdType {
              NOT_LAB_AD = "NOT_LAB_AD",
              LAB_AD = "LAB_AD",
        }
        enum FlowLanguage {
              ZH_CN = "ZH_CN",
              ZH_CN_GOV = "ZH_CN_GOV",
        }
        enum FlowLevel {
              FOUR_LEVEL = "FOUR_LEVEL",
              NONE = "NONE",
              ONE_LEVEL = "ONE_LEVEL",
              THREE_LEVEL = "THREE_LEVEL",
              TWO_LEVEL = "TWO_LEVEL",
        }
        enum FlowLivePlatformTags {
              ABNORMAL_ACTIVE = "ABNORMAL_ACTIVE",
              AWEME_FANS = "AWEME_FANS",
              LARGE_FANSCOUNT = "LARGE_FANSCOUNT",
        }
        enum FlowLiveScheduleType {
              SCHEDULE_FROM_NOW = "SCHEDULE_FROM_NOW",
              SCHEDULE_START_END = "SCHEDULE_START_END",
              SCHEDULE_TIME_FIXEDRANGE = "SCHEDULE_TIME_FIXEDRANGE",
        }
        enum FlowLocationType {
              ALL = "ALL",
              CURRENT = "CURRENT",
              HOME = "HOME",
              TRAVEL = "TRAVEL",
        }
        enum FlowMarketingGoal {
              VIDEO_PROM_GOODS = "VIDEO_PROM_GOODS",
              LIVE_PROM_GOODS = "LIVE_PROM_GOODS",
        }
        enum FlowMarketingScene {
              FEED = "FEED",
              SEARCH = "SEARCH",
              SHOPPING_MALL = "SHOPPING_MALL",
        }
        enum FlowMaterialAwemeShareStatus {
              PENDING = "PENDING",
              SUCCESS = "SUCCESS",
        }
        enum FlowMaterialDeliveryType {
              ADVERTISER_OFFLINE_BUDGET = "ADVERTISER_OFFLINE_BUDGET",
              ADVERTISER_PRE_OFFLINE_BUDGET = "ADVERTISER_PRE_OFFLINE_BUDGET",
              AD_AUDIT = "AD_AUDIT",
              AD_DISABLE = "AD_DISABLE",
              AD_EXTERNAL_URL_DISABLE = "AD_EXTERNAL_URL_DISABLE",
              AD_OFFLINE_AUDIT = "AD_OFFLINE_AUDIT",
              AD_OFFLINE_BUDGET = "AD_OFFLINE_BUDGET",
              AD_PRE_OFFLINE_BUDGET = "AD_PRE_OFFLINE_BUDGET",
              AD_REAUDIT = "AD_REAUDIT",
              AUDIT = "AUDIT",
              AWEME_ITEM_DISABLED = "AWEME_ITEM_DISABLED",
              CAMPAIGN_DISABLE = "CAMPAIGN_DISABLE",
              CAMPAIGN_OFFLINE_BUDGET = "CAMPAIGN_OFFLINE_BUDGET",
              CAMPAIGN_PRE_OFFLINE_BUDGET = "CAMPAIGN_PRE_OFFLINE_BUDGET",
              CREATE = "CREATE",
              DELETE = "DELETE",
              DELIVERY_OK = "DELIVERY_OK",
              DISABLE = "DISABLE",
              ERROR = "ERROR",
              FROZEN = "FROZEN",
              LIVE_CAN_NOT_LAUNCH = "LIVE_CAN_NOT_LAUNCH",
              NO_SCHEDULE = "NO_SCHEDULE",
              OFFLINE_AUDIT = "OFFLINE_AUDIT",
              OFFLINE_BALANCE = "OFFLINE_BALANCE",
              PRE_ONLINE = "PRE_ONLINE",
              REAUDIT = "REAUDIT",
              TIME_DONE = "TIME_DONE",
              TIME_NO_REACH = "TIME_NO_REACH",
        }
        enum FlowMaterialType {
              VIDEO = "VIDEO",
              IMAGE = "IMAGE",
              CAROUSEL = "CAROUSEL",
              TITLE = "TITLE",
              LIVE_ROOM = "LIVE_ROOM",
        }
        enum FlowMonitoringAdType {
              VALUE_1 = 1,
              VALUE_2 = 2,
        }
        enum FlowMonitoringFrequency {
              VALUE_1 = 1,
              VALUE_2 = 2,
              VALUE_3 = 3,
              VALUE_5 = 5,
              VALUE_10 = 10,
              VALUE_30 = 30,
        }
        enum FlowMonitoringModel {
              ALL = "All",
              SPECIFY = "Specify",
        }
        enum FlowMorePeopleMode {
              CUSTOM = "CUSTOM",
              NONE = "NONE",
        }
        enum FlowNewCustomer {
              NONE = "NONE",
              NO_BUY = "NO_BUY",
              NO_BUY_BRAND = "NO_BUY_BRAND",
              NO_BUY_DOUYIN = "NO_BUY_DOUYIN",
        }
        enum FlowNotificationFrequency {
              VALUE_1 = 1,
              VALUE_3 = 3,
              VALUE_10 = 10,
              VALUE__1 = -1,
        }
        enum FlowOptStatus {
              DELETE = "DELETE",
              DISABLE = "DISABLE",
              ENABLE = "ENABLE",
              QUOTA_DISABLE = "QUOTA_DISABLE",
              ROI2_DISABLE = "ROI2_DISABLE",
              SYSTEM_DISABLE = "SYSTEM_DISABLE",
        }
        enum FlowOrderField {
              COMPETITION = "COMPETITION",
              DEFAULT = "DEFAULT",
              PV = "PV",
              RELEVANCE = "RELEVANCE",
        }
        enum FlowOrderType {
              ASC = "ASC",
              DESC = "DESC",
        }
        enum FlowPlatform {
              ANDROID = "ANDROID",
              IOS = "IOS",
        }
        enum FlowPromotionCardButtonSmartOptimization {
              VALUE_0 = 0,
              VALUE_1 = 1,
        }
        enum FlowQcpxMode {
              QCPX_MODE_DEFAULT = "QCPX_MODE_DEFAULT",
              QCPX_MODE_OFF = "QCPX_MODE_OFF",
              QCPX_MODE_ON = "QCPX_MODE_ON",
        }
        enum FlowScanTimePeriod {
              VALUE_1 = 1,
              VALUE_2 = 2,
              VALUE_3 = 3,
              VALUE_7 = 7,
        }
        enum FlowScheduleType {
              SCHEDULE_FROM_NOW = "SCHEDULE_FROM_NOW",
              SCHEDULE_START_END = "SCHEDULE_START_END",
        }
        enum FlowSearchExtended {
              VALUE_1 = 1,
              VALUE_2 = 2,
        }
        enum FlowSmartBidType {
              SMART_BID_CONSERVATIVE = "SMART_BID_CONSERVATIVE",
              SMART_BID_CUSTOM = "SMART_BID_CUSTOM",
        }
        enum FlowSmartInterestAction {
              CUSTOM = "CUSTOM",
              RECOMMEND = "RECOMMEND",
        }
        enum FlowStatus {
              ADVERTISER_OFFLINE_BUDGET = "ADVERTISER_OFFLINE_BUDGET",
              ADVERTISER_PRE_OFFLINE_BUDGET = "ADVERTISER_PRE_OFFLINE_BUDGET",
              AUDIT = "AUDIT",
              AUDIT_STATUS_ERROR = "AUDIT_STATUS_ERROR",
              AWEME_ACCOUNT_DISABLED = "AWEME_ACCOUNT_DISABLED",
              CAMPAIGN_DISABLE = "CAMPAIGN_DISABLE",
              CAMPAIGN_OFFLINE_BUDGET = "CAMPAIGN_OFFLINE_BUDGET",
              CAMPAIGN_PRE_OFFLINE_BUDGET = "CAMPAIGN_PRE_OFFLINE_BUDGET",
              CREATE = "CREATE",
              DELETE = "DELETE",
              DELIVERY_OK = "DELIVERY_OK",
              DISABLE = "DISABLE",
              DRAFT = "DRAFT",
              ERROR = "ERROR",
              EXTERNAL_URL_DISABLE = "EXTERNAL_URL_DISABLE",
              FROZEN = "FROZEN",
              LIVE_ROOM_OFF = "LIVE_ROOM_OFF",
              NO_SCHEDULE = "NO_SCHEDULE",
              OFFLINE_AUDIT = "OFFLINE_AUDIT",
              OFFLINE_BALANCE = "OFFLINE_BALANCE",
              OFFLINE_BUDGET = "OFFLINE_BUDGET",
              PRE_OFFLINE_BUDGET = "PRE_OFFLINE_BUDGET",
              PRE_ONLINE = "PRE_ONLINE",
              QUOTA_DISABLE = "QUOTA_DISABLE",
              REAUDIT = "REAUDIT",
              SYSTEM_DISABLE = "SYSTEM_DISABLE",
              TIME_DONE = "TIME_DONE",
              TIME_NO_REACH = "TIME_NO_REACH",
        }
        enum FlowSubDistrict {
              FOUR_LEVEL = "FOUR_LEVEL",
              NONE = "NONE",
              ONE_LEVEL = "ONE_LEVEL",
              THREE_LEVEL = "THREE_LEVEL",
              TWO_LEVEL = "TWO_LEVEL",
        }
        enum FlowSubmitRule {
              VALUE_1 = 1,
              VALUE_2 = 2,
        }
        enum FlowSuggestReason {
              CLICK = "CLICK",
              DARKHORSE = "DARKHORSE",
              LOW_COST = "LOW_COST",
              POTENTIAL = "POTENTIAL",
              PREFERENCE = "PREFERENCE",
        }
        enum FlowTemplateType {
              VALUE_1 = 1,
              VALUE_2 = 2,
        }
        enum FlowTitleType {
              AWEME_CAROUSEL = "AWEME_CAROUSEL",
              COMMODITY_CARD = "COMMODITY_CARD",
              CUSTOM = "CUSTOM",
        }
        enum FlowTriggerMode {
              VALUE_1 = 1,
              VALUE_2 = 2,
        }
        enum FlowVideoScheduleType {
              SCHEDULE_FROM_NOW = "SCHEDULE_FROM_NOW",
              SCHEDULE_START_END = "SCHEDULE_START_END",
        }
        enum FlowVideoSource {
              E_COMMERCE = "E_COMMERCE",
              LIVE_HIGHLIGHT = "LIVE_HIGHLIGHT",
              BP = "BP",
              VIDEO_CAPTURE = "VIDEO_CAPTURE",
              ARTHUR = "ARTHUR",
              STAR_即合共享素材 = "STAR&即合共享素材",
              TADA = "TADA",
              CREATIVE_CENTER = "CREATIVE_CENTER",
              AWEME = "AWEME",
              AGENT = "AGENT",
        }
        enum HavingCostType {
              YES = "YES",
              NO = "NO",
        }
        enum MovieDeriveStatus {
              VALUE_1 = 1,
              VALUE_2 = 2,
              VALUE_3 = 3,
              VALUE_4 = 4,
              VALUE_5 = 5,
              VALUE_6 = 6,
        }
        enum NoticeChannelStatus {
              VALUE_1 = 1,
              VALUE_2 = 2,
        }
        enum NoticeChannelType {
              DINGTALK = "dingtalk",
              FEISHU = "feishu",
        }
        enum OssSyncStatus {
              VALUE_0 = 0,
              VALUE_1 = 1,
              VALUE_2 = 2,
        }
        interface PersonalStatsConfig {
              /** 字段英文名（传给后端用于查询统计数据） */
              item: any;
              /** 字段中文名称 */
              name: string;
        }
        enum PersonalStatsItem {
              UPLOAD_MOVIE = "upload_movie",
              UPLOAD_VIDEO = "upload_video",
              UPLOAD_IMAGE = "upload_image",
              UPLOAD_DOC = "upload_doc",
              UPLOAD_SCRIPT = "upload_script",
              UPLOAD_AUDIO = "upload_audio",
              UPLOAD_MATERIAL = "upload_material",
              UPLOAD_OWN_MATERIAL = "upload_own_material",
              UPLOAD_COOPER_MATERIAL = "upload_cooper_material",
              UPLOAD_REFER_MATERIAL = "upload_refer_material",
              HOT_MOVIE = "hot_movie",
              HOT_VIDEO_MATERIAL = "hot_video_material",
              AD_PLAN = "ad_plan",
              AD_COST = "ad_cost",
              AD_DEAL = "ad_deal",
        }
        enum ProjectStatus {
              VALUE_1 = 1,
              VALUE_2 = 2,
              VALUE_3 = 3,
              VALUE_4 = 4,
              VALUE_5 = 5,
              VALUE_6 = 6,
        }
        enum PublishQueueSecondCatalog {
              IMAGE = "image",
              ATLAS = "atlas",
              COPYWRITING = "copywriting",
              ADCOMMENT = "adcomment",
        }
        enum QianchuanMaterialLabel {
              FIRST_PUB = "first_pub",
              HIGH_QUALITY = "high_quality",
              LOW_QUALITY = "low_quality",
              INEFFICIENT = "inefficient",
              SIMILAR = "similar",
              SIMILAR_QUEUE = "similar_queue",
              CARRY = "carry",
        }
        enum RefrenctContentType {
              UPLOAD = "upload",
              RELATE = "relate",
              LINK = "link",
        }
        enum ShareCatalog {
              OUTER = "outer",
              INNER = "inner",
        }
        enum StatPlatformType {
              VALUE_0 = 0,
              VALUE_1 = 1,
              VALUE_2 = 2,
              VALUE_3 = 3,
        }
        enum StatTargetType {
              VALUE_0 = 0,
              VALUE_1 = 1,
              VALUE_2 = 2,
              VALUE_3 = 3,
              VALUE_4 = 4,
        }
        enum SubscribeDataDimension {
              PERSONAL = "personal",
              PROJECT = "project",
              DEPARTMENT = "department",
              ENTERPRISE = "enterprise",
        }
        enum SubscribeReportType {
              HOURLY = "hourly",
              DAILY = "daily",
              WEEKLY = "weekly",
              MONTHLY = "monthly",
        }
        enum TranscodeStatus {
              VALUE_0 = 0,
              VALUE_1 = 1,
              VALUE_2 = 2,
              VALUE_3 = 3,
        }
        enum UniLiveCreatedOrUpdatedStatus {
              CREATE_SUCCESS = "CREATE_SUCCESS",
              CREATE_FAILED = "CREATE_FAILED",
              UPDATE_SUCCESS = "UPDATE_SUCCESS",
              UPDATE_FAILED = "UPDATE_FAILED",
              MATERIAL_PENDING = "MATERIAL_PENDING",
        }
        enum UnitType {
              VALUE_0 = 0,
              VALUE_1 = 1,
              VALUE_2 = 2,
        }
        interface CreateCompanyReq {
              name: string;
        }
        interface DiskToolScanCallbackResp {
              /** 组织hash id */
              company_id: string;
              /** 公司名称 */
              company_name: string;
              /** 内网域名 */
              inner_domain: string;
              /** 密码 */
              password: string;
              /** 审核状态:0 用户未注册、1 未加入任何组织、2 正常 */
              status: number;
              /** 用户hash id */
              user_id: string;
              /** 用户名 */
              user_name: string;
        }
        interface GetCaptchaResp {
              /** 验证码id */
              id: string;
              /** 验证码图片 */
              img: string;
        }
        interface GetLicenseReq {
              /** 公司名称 */
              company: string;
              /** 远程端口 */
              rport: number;
              /** 服务端ip地址 */
              sip: string;
              /** 服务端端口 */
              sport: number;
              /** 连接服务端token */
              token: string;
        }
        interface GetSmsVerifyCodeReq {
              /** 图型验证码id */
              id: string;
              /** 对手机号等进行加密传输 */
              signature: string;
              /** 图像验证码答案 */
              value: string;
        }
        interface JoinCompanyResp {
              joined_company_id: string;
        }
        interface QrLoginReq {
              /** 登录携带信息，目前主要使用的是邀请码 */
              data: any;
              /** 浏览器版本 */
              env: string;
              /** 登录类型 */
              terminal_type: string;
        }
        interface QrLoginResp {
              scene_id: string;
              url: string;
        }
        interface RegisterReq {
              /** 飞书组织记录，hash id */
              company_id: string;
              company_name: string;
              name: string;
              /** 密码 */
              password: string;
              register_code: string;
              tel: string;
              /** 用户名 */
              user_name: string;
              vcode: string;
        }
        interface ReportDiskToolVersionReq {
              /** 签名字符串 */
              signature: string;
        }
        interface ScanCallbackReq {
              agree_to_user_and_privacy: boolean;
              company_id: string;
              scene_id: string;
        }
        interface ScanCallbackResp {
              /** 头像 */
              avatar: string;
              /** 用户所在企业 */
              compaines: UserCompanies[];
              /** 是否有在审核中的组织，包括自己创建的和邀请加入的 */
              has_auditing_company: boolean;
              /** 绑定过程中是否创建了新组织 */
              has_created_company: boolean;
              /** 邀请码,邀请加入的时候的邀请码 */
              invite_code: string;
              /** 微信是否绑定电话号码 */
              is_bind: boolean;
              /** 姓名 */
              name: string;
              /** 注册使用的临时码 */
              register_code: string;
              /** 登录token */
              token: string;
              /** 微信昵称 */
              wechat_alias: string;
        }
        interface SelectCompanyResp {
              token: string;
        }
        interface TerminalScanCallbackResp {
              /** 审核状态:0 未注册、1 审核中、2 审核通过、3 审核未通过、4 已加入其他组织 */
              audit_status: number;
              /** 公司名称 */
              company_name: string;
              /** 内网域名 */
              inner_domain: string;
              /** 终端授权码 */
              license: string;
        }
        interface AdAsAdTemplateResp {
              ad_template: GetDetailAdTemplateInner;
        }
        interface AdBasicInfoTemplate {
              /** 广告主ids */
              advertiser_ids: number[];
              /** 详情 */
              detail: any;
              id: number;
              /** 名称 */
              name: string;
              /** 团队id（当创建团队模板时生效） */
              team_id: number;
              /** 模板类型 */
              template_type: any;
        }
        interface AdBasicInfoTemplateChooseListResp {
              /** 列表 */
              list: BasicSelectInfo[];
        }
        interface AdBasicInfoTemplateDetail {
              /** 广告计划名称 */
              ad_name: string;
              /** 动态词包计算出来的名称 */
              ad_real_name: string;
              /** 是否生成更多创意 0 否 1 是 */
              creative_auto_generate: any;
              /** 设置投放（预算与出价） */
              delivery_setting: any;
              /** 抖音主页是否隐藏视频，和抖音号关系类型相关 */
              is_homepage_hide: any;
              /** 广告营销目标 */
              marketing_goal: any;
              /** 程序化创意推广卡片 */
              programmatic_creative_card: any;
        }
        interface AdBasicInfoTemplatePromotionCardMaterialIdItem {
              id: string;
              url: string;
        }
        interface AdBatchOptReq {
              ad_ids: number[];
        }
        interface AdBatchOptResp {
              results: AdBatchOptResult[];
        }
        interface AdBatchOptResult {
              ad_id: number;
              ad_name: string;
              msg: string;
              opt_result: boolean;
              /** 广告计划操作类型 */
              opt_type: any;
        }
        interface AdBidBatchUpdate {
              /** 广告计划ID */
              ad_id: number;
              /** 出价 两位小数， 如果是降低和提高，则由前端算出来具体的值后传递到后端 */
              bid: number;
        }
        interface AdBidBatchUpdateReq {
              /** 批量更新数据 */
              updates: AdBidBatchUpdate[];
        }
        interface AdBidRoiBatchUpdate {
              ad_id: number;
              bid_roi: number;
        }
        interface AdBidRoiBatchUpdateReq {
              updates: AdBidRoiBatchUpdate[];
        }
        interface AdBudgetBatchUpdateReq {
              ad_ids: number[];
              /** 预期 两位小数 */
              budget: number;
        }
        interface AdChooseListInner {
              /** 广告账户 */
              advertiser_id: number;
              /** 广告账户名称 */
              advertiser_name: string;
              /** 子列表 */
              sub_list: BasicFlowSelectInfo[];
        }
        interface AdChooseListReq {
              /** 广告账户id */
              advertiser_ids: number[];
              /** 营销目标 */
              marketing_goal: any;
              /** 广告类型 */
              marketing_scene: any;
        }
        interface AdChooseListResp {
              /** 列表 */
              list: AdChooseListInner[];
        }
        interface AdCreative {
              /** CarouselMaterial      *CarouselMaterial      `json:"carousel_material,omitempty"`       //图文信息 */
              image_material: any;
              /** 素材类型 */
              image_mode: any;
              /** 视频类型：true 转码后视频、false 原视频 */
              is_transcode: boolean;
              /** PromotionCardMaterial *PromotionCardMaterial `json:"promotion_card_material,omitempty"` //推广卡片素材
TitleMaterial         *TitleMaterial         `json:"title_material,omitempty"`          //标题类型素材 */
              video_material: any;
        }
        interface AdCreativeCommon {
              /** 创意标签。最多20个标签 */
              ad_keywords: string[];
              /** 创意呈现方式，和抖音号关系类型相关 */
              creative_material_mode: any;
              /** 创意一级行业ID */
              first_industry_id: number;
              /** 创意一级行业ID详情 */
              first_industry_id_item: any;
              /** 创意标签组名称 */
              name: string;
              /** 创意二级行业ID */
              second_industry_id: number;
              /** 创意二级行业ID详情 */
              second_industry_id_item: any;
              /** 创意三级行业ID */
              third_industry_id: number;
              /** 创意三级行业ID详情 */
              third_industry_id_item: any;
        }
        interface AdCreativeGroup {
              ad_creatives: AdCreative[];
              /** 创意组原数据 */
              ad_creatives_arr: AdTemplateAdCreativesArrInner[];
              /** 程序化创意还是自定义创意 */
              creative_material_mode: any;
              image_checked: boolean;
              /** 是否包含直播间画面 */
              is_aweme_live_room: boolean;
              name: string;
              video_checked: boolean;
        }
        interface AdDataTableListSummary {
              /** 直接订单结算率(14天) */
              ad_all_order_count_settle_rate_14d: number;
              /** 直接订单结算率(7天) */
              ad_all_order_count_settle_rate_7d: number;
              /** 直接成交金额结算率(14天) */
              ad_all_order_gmv_settle_rate_14d: number;
              /** 直接成交金额结算率(7天) */
              ad_all_order_gmv_settle_rate_7d: number;
              /** 直接结算金额(14天) */
              ad_all_order_settle_amount_14d: number;
              /** 直接结算金额(7天) */
              ad_all_order_settle_amount_7d: number;
              /** 直接结算成本(14天) */
              ad_all_order_settle_cost_14d: number;
              /** 直接结算成本(7天) */
              ad_all_order_settle_cost_7d: number;
              /** 直接结算订单数(14天) */
              ad_all_order_settle_count_14d: number;
              /** 直接结算订单数(7天) */
              ad_all_order_settle_count_7d: number;
              /** 直接结算ROI(14天) */
              ad_all_order_settle_roi_14d: number;
              /** 直接结算ROI(7天) */
              ad_all_order_settle_roi_7d: number;
              /** 直接退款率(14天) */
              ad_order_gmv_refund_rate_14d: number;
              /** 直接退款率(7天) */
              ad_order_gmv_refund_rate_7d: number;
              /** 直接订单数退货率(14天) */
              ad_order_refund_rate_14d: number;
              /** 直接订单数退货率(7天) */
              ad_order_refund_rate_7d: number;
              /** 7日总下单ROI */
              all_order_create_roi_7days: number;
              /** 7日总成交订单 */
              all_order_pay_count_7days: number;
              /** 7日总成交金额 */
              all_order_pay_gmv_7days: number;
              /** 7日总支付ROI */
              all_order_pay_roi_7days: number;
              /** 直接退款金额(14天) */
              all_order_refund_amount_14d: number;
              /** 直接退款金额(7天) */
              all_order_refund_amount_7d: number;
              /** 直接退款订单数(14天) */
              all_order_refund_count_14d: number;
              /** 直接退款订单数(7天) */
              all_order_refund_count_7d: number;
              /** 转化数（计费时间） */
              attribution_convert_cnt: number;
              /** 转化成本（计费时间） */
              attribution_convert_cost: number;
              /** 转化率（计费时间） */
              attribution_convert_rate: number;
              /** 深度转化次数（计费时间） */
              attribution_deep_convert_cnt: number;
              /** 深度转化成本（计费时间） */
              attribution_deep_convert_cost: number;
              /** 深度转化率（计费时间） */
              attribution_deep_convert_rate: number;
              /** 点击次数 */
              click_cnt: number;
              /** 平均点击单价 */
              cpc_platform: number;
              /** 平均千次展示费用 */
              cpm_platform: number;
              /** 直接下单金额 */
              create_order_amount: number;
              /** 直接下单订单数 */
              create_order_count: number;
              /** 下单智能优惠券金额 */
              create_order_coupon_amount: number;
              /** 直接下单roi */
              create_order_roi: number;
              /** 点击率 */
              ctr: number;
              /** 深度转化次数 */
              deep_convert_cnt: number;
              /** 深度转化成本 */
              deep_convert_cost: number;
              /** 深度转化率 */
              deep_convert_rate: number;
              /** 评论次数 */
              dy_comment: number;
              /** 新增粉丝数 */
              dy_follow: number;
              /** 点赞次数 */
              dy_like: number;
              /** 分享次数 */
              dy_share: number;
              /** 转化数 */
              ecp_convert_cnt: number;
              /** 转化率 */
              ecp_convert_rate: number;
              /** 转化成本 */
              ecp_cpa_platform: number;
              /** 间接下单订单数 */
              indirect_order_create_count_7days: number;
              /** 间接下单金额 */
              indirect_order_create_gmv_7days: number;
              /** 间接成交订单数 */
              indirect_order_pay_count_7days: number;
              /** 间接成交金额 */
              indirect_order_pay_gmv_7days: number;
              /** 间接预售订单数 */
              indirect_order_prepay_count_7days: number;
              /** 间接预售金额 */
              indirect_order_prepay_gmv_7days: number;
              /** 未完结间接预售订单预估金额 */
              indirect_order_unfinished_estimate_gmv_7days: number;
              /** 直播间新加团人次 */
              live_fans_club_join_cnt: number;
              /** 成交客单价 */
              live_pay_order_cost_per_order: number;
              /** 直播间超过1分钟观看人次 */
              live_watch_one_minute_count: number;
              /** 直播间商品点击次数 */
              luban_live_click_product_cnt: number;
              /** 直播间评论次数 */
              luban_live_comment_cnt: number;
              /** 直播间观看人次 */
              luban_live_enter_cnt: number;
              /** 直播间音浪收入 */
              luban_live_gift_amount: number;
              /** 直播间打赏次数 */
              luban_live_gift_cnt: number;
              /** 直播间分享次数 */
              luban_live_share_cnt: number;
              /** 直播间查看购物车次数 */
              luban_live_slidecart_click_cnt: number;
              /** 直接成交金额 */
              pay_order_amount: number;
              /** 直接成交客单价 */
              pay_order_cost_per_order: number;
              /** 直接成交订单数 */
              pay_order_count: number;
              /** 成交智能优惠券金额 */
              pay_order_coupon_amount: number;
              /** 25%进度播放数 */
              play_25_feed_break: number;
              /** 50%进度播放数 */
              play_50_feed_break: number;
              /** 75%进度播放数 */
              play_75_feed_break: number;
              /** 3s播放数 */
              play_duration_3s: number;
              /** 播放完成次数 */
              play_over: number;
              /** 完播率 */
              play_over_rate: number;
              /** 3s 完播率 */
              play_over_rate_3s: number;
              /** 直接支付roi */
              prepay_and_pay_order_roi: number;
              /** 直接预售金额 */
              prepay_order_amount: number;
              /** 直接预售订单数 */
              prepay_order_count: number;
              /** 抖音号首单新客数 */
              qianchuan_author_first_order_cnt: number;
              /** 抖音号首单新客转化成本 */
              qianchuan_author_first_order_convert_cost: number;
              /** 抖音号首单新客直接成交金额 */
              qianchuan_author_first_order_direct_pay_gmv: number;
              /** 抖音号首单新客直接支付roi */
              qianchuan_author_first_order_direct_pay_order_roi: number;
              /** 抖音号首单新客30天累计成交金额 */
              qianchuan_author_first_order_ltv30: number;
              /** 抖音号首单新客订单占比 */
              qianchuan_author_first_order_rate: number;
              /** 抖音号首单新客30天累计支付roi */
              qianchuan_author_first_order_roi30: number;
              /** 品牌首单新客数 */
              qianchuan_brand_first_order_cnt: number;
              /** 品牌首单新客转化成本 */
              qianchuan_brand_first_order_convert_cost: number;
              /** 品牌首单新客直接成交金额 */
              qianchuan_brand_first_order_direct_pay_gmv: number;
              /** 品牌首单新客直接支付roi */
              qianchuan_brand_first_order_direct_pay_order_roi: number;
              /** 品牌首单新客30天累计成交金额 */
              qianchuan_brand_first_order_ltv30: number;
              /** 品牌首单新客订单占比 */
              qianchuan_brand_first_order_rate: number;
              /** 品牌首单新客30天累计支付roi */
              qianchuan_brand_first_order_roi30: number;
              /** 店铺首单新客人数 */
              qianchuan_first_order_cnt: number;
              /** 店铺首单新客转化成本 */
              qianchuan_first_order_convert_cost: number;
              /** 店铺首单新客直接成交金额 */
              qianchuan_first_order_direct_pay_gmv: number;
              /** 店铺首单新客直接支付ROI */
              qianchuan_first_order_direct_pay_order_roi: number;
              /** 店铺首单新客30天累计成交金额 */
              qianchuan_first_order_ltv30: number;
              /** 店铺首单新客订单占比 */
              qianchuan_first_order_rate: number;
              /** 店铺首单新客30天累计支付ROI */
              qianchuan_first_order_roi30: number;
              /** 展示次数 */
              show_cnt: number;
              /** TODO 统计字段类型一个个确认 */
              stat_cost: number;
              /** 播放数 */
              total_play: number;
              /** 未完结直接预售订单预估金额 */
              unfinished_estimate_order_gmv: number;
        }
        interface AdRecommendKeywordsReq {
              /** 广告账户id */
              advertiser_ids: number[];
              /** 抖音号 id */
              aweme_ids: number[];
              /** 排序字段 排序字段：允许值: COMPETITION: 竞争程度 DEFAULT: 推荐度（默认） PV: 月搜索量 RELEVANCE: 相关性 */
              order_field: any;
              /** 排序方式，允许值： ASC: 升序  DESC: 降序 */
              order_type: any;
              /** 页码，默认值：1 */
              page: number;
              /** 页面大小，允许值：500, 1000，默认值：500 */
              page_size: number;
              /** 产品 id */
              product_ids: number[];
              /** 搜索关键词 */
              search_word: string;
              /** 推荐理由类型，枚举值: CLICK: 高点买词 DARKHORSE: 黑马词 LOW_COST: 低成本词 POTENTIAL: 蓝海词 PREFERENCE: 同行买词 */
              suggest_reason: any;
        }
        interface AdRecommendKeywordsResp {
              records: QianchuanAdRecommendKeywordsGetV10ResponseDataListInner[];
              total: number;
        }
        interface AdReportStatusCountStat {
              count: number;
              report_status: AdReportStatus;
        }
        interface AdReportTaskAsAdTemplateResp {
              ad_template: GetDetailAdTemplateInner;
        }
        interface AdReportTaskDetailListRecord {
              /** 广告计划id 创建成功后更新 */
              ad_id: number;
              ad_real_name: string;
              /** 投放任务id */
              ad_report_task_uuid: string;
              /** 广告计划模板名称 */
              ad_template_id: number;
              /** 广告账号 id */
              advertiser_id: number;
              /** 广告账号名称 */
              advertiser_name: string;
              /** 出价/Roi */
              bid_roi: number;
              /** 广告组 id */
              campaign_id: number;
              /** 广告组 名称 */
              campaign_name: string;
              /** 组织 id */
              company_id: number;
              /** 文案组名称 */
              copywriter_name: string;
              created_at: string;
              /** 创意标签名称 */
              creative_common_name: string;
              /** 创意组名称 */
              creative_group_name: string;
              /** 定时创建广告计划时间，如果不是定时则为 0 */
              custom_report_time: number;
              /** id */
              id: number;
              /** 定向组名称 */
              orientation_name: string;
              /** 失败原因，当状态是失败的时候展示 */
              report_msg: string;
              /** 状态 */
              report_status: any;
              /** 请求详情 */
              req_params: string;
              /** 队列任务 id 可以不管 */
              task_id: string;
              updated_at: string;
              /** 广告计划提交人 */
              user_id: number;
        }
        interface AdReportTaskDetailListResp {
              records: AdReportTaskDetailListRecord[];
              /** 统计各种状态下的计划数量 */
              status_count: Record<string, any>;
              total: number;
        }
        interface AdReportTaskListRecord {
              /** 计划数量 */
              ad_count: number;
              /** 广告计划模板名称 */
              ad_template_id: number;
              /** 广告计划模板名称 */
              ad_template_name: string;
              /** 出价/Roi */
              bid_roi_count: number;
              /** 营销场景 */
              campaign_scene: any;
              /** 组织 id */
              company_id: number;
              /** 文案个数 */
              copywriter_count: number;
              created_at: string;
              /** 创建时间戳 */
              created_time: number;
              /** 创意分类标签个数 */
              creative_common_count: number;
              /** 创意组个数 */
              creative_group_count: number;
              /** 详情 */
              detail: string;
              /** 投放任务实际的 id，用于展示 */
              id: string;
              /** 推广方式 */
              lab_ad_type: any;
              /** 营销目标 */
              marketing_goal: any;
              /** 广告类型 */
              marketing_scene: any;
              /** 任务名称 */
              name: string;
              /** 定向组个数 */
              orientation_count: number;
              /** 任务状态 */
              status: any;
              /** 提交方式 */
              submit_rule: any;
              updated_at: string;
              userInfo: BasicUserInfo;
              /** 广告计划提交人 id */
              user_id: number;
        }
        interface AdReportTaskListResp {
              records: AdReportTaskListRecord[];
              /** 各状态记录数 */
              status_stat: Record<string, any>;
              total: number;
        }
        interface AdReportTaskRetryReq {
              ad_report_task_uuid: string;
        }
        interface AdTemplate {
              /** 基础信息模板 */
              ad_basic_info_template: any;
              /** 创意分类标签组 */
              ad_creative_commons: AdCreativeCommon[];
              /** 创意组分组 */
              ad_creative_groups: AdCreativeGroup[];
              /** 广告主ids */
              advertiser_ids: number[];
              /** 文案组 */
              copywriters: Copywriter[];
              /** 广告计划id */
              id: number;
              /** 是否收藏 */
              is_collect: boolean;
              /** 是否启用 */
              is_enable: boolean;
              /** 名称 */
              name: string;
              /** 定向模板组 */
              orientation_templates: AdTemplateOrientationTemplate[];
              /** 提交设置 */
              submit_setting: any;
              /** 广告投放目标 */
              target_delivery: any;
              /** 仅在团队模板中生效 */
              team_id: number;
              /** 模板类型 */
              template_type: any;
        }
        interface AdTemplateAdBasicInfoTemplate {
              /** 基础信息模板 */
              ad_basic_info_template: any;
              /** 基础信息模板ID */
              ad_basic_info_template_id: number;
              /** 广告组 */
              campaigns: AdTemplateCampaign[];
              /** 营销目标 */
              marketing_goal: any;
              /** 搜索关键词 */
              search_keywords: SearchKeyword[];
        }
        interface AdTemplateAdCreativesArrInner {
              ad_creative: AdCreative;
              alias: string;
              catalog: string;
              duration: number;
              id: string;
              is_transcode: boolean;
              md5: string;
              thumb: string;
              transcode_md5: string;
        }
        interface AdTemplateAwemeProducer {
              /** 广告主简单信息 */
              advertiser: any;
              /** 广告主id */
              advertiser_id: number;
              /** 抖音号简单信息 */
              aweme: any;
              /** 抖音id */
              aweme_id: number;
              /** 品牌简单信息 */
              brand: any;
              /** 品牌id */
              brand_id: number;
              /** 抖音商品简单信息 */
              product: any;
              /** 抖音商品id */
              product_id: number;
              /** 店铺简单信息 */
              shop: any;
              /** 店铺id */
              shop_id: number;
        }
        interface AdTemplateCampaign {
              advertiser_id: number;
              /** 广告组预算 */
              budget: number;
              /** 广告组预算类型 */
              budget_mode: any;
              /** 广告组id */
              flow_campaign_id: number;
              /** 广告组名称 */
              name: string;
        }
        interface AdTemplateChooseListResp {
              /** 列表 */
              list: BasicSelectInfo[];
        }
        interface AdTemplateGJsonCheckReq {
              /** 基础信息模板 */
              ad_basic_info_template: any;
              /** 创意分类标签组 */
              ad_creative_commons: AdCreativeCommon[];
              /** 创意组分组 */
              ad_creative_groups: AdCreativeGroup[];
              /** 广告主ids */
              advertiser_ids: number[];
              /** 文案组 */
              copywriters: Copywriter[];
              /** 广告计划id */
              id: number;
              /** 是否检查出价保护 */
              is_check_protect: boolean;
              /** 是否收藏 */
              is_collect: boolean;
              /** 是否启用 */
              is_enable: boolean;
              /** 名称 */
              name: string;
              /** 定向模板组 */
              orientation_templates: AdTemplateOrientationTemplate[];
              /** 提交设置 */
              submit_setting: any;
              /** 广告投放目标 */
              target_delivery: any;
              /** 模板类型 */
              template_type: any;
        }
        interface AdTemplateGJsonCheckResp {
              /** 错误列表 */
              err_list: GJsonCheckErrSub[];
              /** 错误类型 */
              g_json_check_err_type: any;
        }
        interface AdTemplateOrientationTemplate {
              /** 名称 */
              name: string;
              /** 定向模板 */
              orientation_template: any;
              /** 定向模板ID */
              orientation_template_id: number;
        }
        interface AddUsersToRoleReq {
              /** 角色 ID */
              role_id: number;
              /** 用户 hash id 数组 */
              user_ids: string[];
        }
        interface AdminCategories {
              children: AdminCategories[];
              id: number;
              name: string;
              parent_id: number;
              serial_number: number;
        }
        interface AdminCategoriesFilterByTypeCatalogsReq {
              material_type_catalogs: MaterialCatalogsKeyByTypeMap;
        }
        interface AdminCategoryDetailResp {
              /** 应用内容设置 类型 movie 成片， own 企业/自有素材， cooperation 合作素材，reference 对标素材；设置值 video 视频， vcollection 视频集，audio 音频，image 图片，script 脚本，doc 文案 */
              category_material_type_catalog_relations: any;
              /** 权限设置 类型 1 查看，2 下载，3 投送，4 分享； 设置值 1 指定范围，2 公开不限制 */
              category_role_settings: any;
              category_tag_group_settings: CategoryTagGroupsItem[];
              created_at: string;
              creator_info: BasicUserInfo;
              id: number;
              /** 内容类型 */
              material_catalog: any;
              /** 内容分区 */
              material_type: any;
              name: string;
              parent_category_name: string;
              parent_id: number;
              serial_number: number;
        }
        interface AdminCategoryGlobalRequiredSetting {
              is_required: number;
              material_catalogs: MaterialCatalogsKeyByTypeMap;
        }
        interface AdminCategoryGlobalRequiredSettingReq {
              is_required: number;
              material_catalogs: MaterialCatalogsKeyByTypeMap;
        }
        interface AdminCompanyBasicInfoItem {
              avatar: string;
              catalog: string;
              id: string;
              inner_count: number;
              name: string;
              outer_count: number;
        }
        interface AdminCompanyBasicInfoUpdateReq {
              /** 图片上传后的图片url */
              avatar: string;
              /** 组织名称 */
              name: string;
        }
        interface AdminCompanyInfo {
              /** 广告主用户数量 */
              advertisement_user_count: number;
              /** 广告主用户数量限制 */
              advertisement_user_limit: number;
              avatar: string;
              created_at: string;
              /** 抖音号数量 */
              douyin_account_count: number;
              /** 抖音号数量限制 */
              douyin_account_limit: number;
              /** 剩余存储空间 */
              free_storage: number;
              id: string;
              /** 内部用户数量 */
              inner_count: number;
              inner_domain: string;
              /** 内部用户席位限制 */
              inner_limit: number;
              /** 是否是负责人 */
              is_director: boolean;
              /** 是否存在OSS存储 */
              is_exist_oss: boolean;
              /** 终端最后上报时间 */
              last_report_time: number;
              license: string;
              name: string;
              /** OSSBucket空间大小 */
              oss_bucket_config_size: number;
              /** OSSBucket流量包 */
              oss_bucket_config_traffic: number;
              /** 外部用户数量 */
              outer_count: number;
              outer_domain: string;
              /** 外部用户席位限制 */
              outer_limit: number;
              /** 存储空间使用量 */
              size_count: number;
              /** 存储空间限制 */
              size_limit: number;
              /** 存储空间限制描述 */
              size_limit_desc: string;
              /** 终端ip地址 */
              terminal_ip: string;
              /** 终端版本 */
              terminal_version: string;
              /** 总存储空间 */
              total_storage: number;
              updated_at: string;
        }
        interface AdminCompanyUserLimitResp {
              advertisement_user_count: number;
              advertisement_user_limit: number;
              douyin_account_count: number;
              douyin_account_limit: number;
              inner_count: number;
              inner_limit: number;
              outer_count: number;
              outer_limit: number;
        }
        interface AdminCreatePublicTagReq {
              authorize_begin: number;
              authorize_end: number;
              name: string;
              serial_number: number;
              state: TagState;
        }
        interface AdminDepartment {
              catalog: string;
              children: AdminDepartment[];
              id: number;
              layer: number;
              name: string;
              parent_id: number;
              path: string[];
        }
        interface AdminDepartmentAddUsersReq {
              department_ids: number[];
              ids: string[];
              team_ids: number[];
        }
        interface AdminDepartmentBasicInfo {
              director_info: BasicUserInfo;
              id: number;
              name: string;
              parent_id: number;
        }
        interface AdminDepartmentCompany {
              avatar: string;
              director_info: BasicUserInfo;
              id: number;
              name: string;
        }
        interface AdminDepartmentHash {
              catalog: string;
              children: AdminDepartmentHash[];
              id: string;
              layer: number;
              name: string;
              parent_id: number;
              path: string[];
        }
        interface AdminDepartmentUserRecord {
              avatar: string;
              departments: AdminDepartment[];
              id: string;
              is_director: boolean;
              name: string;
              tel: string;
              wechat_alias: string;
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
              before_leave_department_names: string;
              before_leave_role_names: string;
              id: string;
              leave_at: number;
              leave_days: number;
              name: string;
              tel: string;
        }
        interface AdminLeftUsersResp {
              count: number;
              records: AdminLeftUserRecord[];
        }
        interface AdminMaterialStatusItem {
              /** 企业id */
              company_id: number;
              created_at: string;
              /** 创建人id */
              creator: number;
              creator_info: BasicUserInfo;
              id: number;
              /** 是否默认：0 否、1 是 */
              is_default: number;
              /** 应用内容设置 */
              material_type_catalog_relations: any;
              /** 名称 */
              name: string;
              /** 排序序号 */
              serial_number: number;
              /** 修改状态时，是否开启通知操作区域：0 不显示、1 显示 */
              show_notify: number;
              /** 样式 */
              style: string;
              updated_at: string;
        }
        interface AdminMaterialStatusSetReq {
              /** 1 标识为强制更新 */
              force: number;
              id: number;
        }
        interface AdminMaterialStatusesResp {
              count: number;
              records: AdminMaterialStatusItem[];
        }
        interface AdminNotification {
              company_id: string;
              created_at: string;
              detail: any;
              id: string;
              /** 是否已读 0表示未读 1表示已读 */
              is_read: number;
              /** 通知内容 */
              notification_content: string;
              /** 通知类型 */
              notification_type: number;
              notification_type_name: string;
              receiver_user: BasicUserInfo;
              sender_user: BasicUserInfo;
              updated_at: string;
        }
        interface AdminPermission {
              children: AdminPermission[];
              created_at: string;
              id: number;
              key: string;
              name: string;
              parent_id: number;
              updated_at: string;
        }
        interface AdminPublicTagBatchDeleteReq {
              tag_ids: number[];
        }
        interface AdminPublicTagGroupCategoryIsRequiredSettingReq {
              category_id: number;
              is_required: number;
              material_catalog: MaterialTypeCatalogRelationMaterialCatalog;
              material_type: MaterialTypeCatalogRelationMaterialType;
        }
        interface AdminPublicTagGroupDetailResp {
              category_settings: TagGroupCategorySettings[];
              created_at: string;
              creator_info: BasicUserInfo;
              id: number;
              material_type_catalog_and_tag_group_settings: MaterialTypeCatalogAndTagGroupSettingsItem[];
              name: string;
              serial_number: number;
              state: TagGroupState;
              tags: TagGroupDetailTagItem[];
        }
        interface AdminPublicTagMoveReq {
              tag_group_id: number;
        }
        interface AdminRoleUsersRecord {
              avatar: string;
              catalog: string;
              departments: AdminDepartment[];
              id: string;
              is_company_creator: boolean;
              name: string;
              tel: string;
              wechat_alias: string;
        }
        interface AdminRoleUsersResp {
              count: number;
              records: AdminRoleUsersRecord[];
        }
        interface AdminTeamAddUsersReq {
              department_ids: number[];
              team_id: number;
              team_ids: number[];
              user_ids: string[];
        }
        interface AdminTeamItem {
              director_info: BasicUserInfo;
              id: number;
              name: string;
        }
        interface AdminTeamMoveUsersToReq {
              from_team_id: number;
              to_team_id: number;
              user_ids: string[];
        }
        interface AdminTeamRemoveUsersReq {
              from_team_id: number;
              user_ids: string[];
        }
        interface AdminTeamUserRecord {
              avatar: string;
              departments: AdminDepartment[];
              id: string;
              is_director: boolean;
              name: string;
              tel: string;
              wechat_alias: string;
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
              /** 城市 */
              city: string;
              /** 企业 ID */
              company_id: number;
              created_at: string;
              id: number;
              /** IP */
              ip_addr: string;
              name: string;
              /** 省份 */
              province: string;
              /** 登录状态 */
              status: number;
              updated_at: string;
              /** 用户 ID */
              user_id: number;
        }
        interface AdminUserRecord {
              avatar: string;
              /** 注册时间 */
              created_at: string;
              departments: AdminUserItemDepartment[];
              id: string;
              inviter: BasicUserInfo;
              /** 是否是组织创始人 */
              is_company_creator: boolean;
              /** 加入时间 */
              joined_at: number;
              last_login_ip: string;
              last_login_ip_location: string;
              last_login_time: number;
              name: string;
              roles: AdminUserItemRole[];
              status: number;
              status_desc: string;
              tel: string;
              wechat_alias: string;
        }
        interface AdminUserTransferResourcesReq {
              /** 变更人 hash id */
              from_user_id: string;
              /** 接收人 hash id */
              receive_user_id: string;
        }
        interface AdminUsersResp {
              count: number;
              records: AdminUserRecord[];
        }
        interface Advertiser {
              /** 负责人 */
              admin_user: any;
              /** 千川广告主id */
              advertiser_id: number;
              /** 千川账户所属代理商账户id */
              agent_id: number;
              /** 千川账户所属代理商的名称 */
              agent_name: string;
              created_at: string;
              id: number;
              /** 是否收藏 */
              is_collect: boolean;
              /** 是否开启账户 */
              is_enable: boolean;
              /** 是否开启出价保护 */
              is_protect: boolean;
              name: string;
              /** 平台 */
              platform: number;
              /** 平台名称 */
              platform_name: string;
              /** 最近更新时间 */
              refresh_time: string;
              /** 账户状态 */
              status: number;
              /** 账户状态名称 */
              status_name: string;
              /** 负责的团队id */
              team_id: number;
              /** 团队名称 */
              team_name: string;
              /** 成员 */
              users: BasicUserInfo[];
        }
        interface AdvertiserAgentChooseListItem {
              /** 代理商ID */
              agent_id: number;
              /** 代理商名称 */
              agent_name: string;
        }
        interface AdvertiserChooseListAdTotalInner {
              /** 绑定广告账户数量 */
              ad_total: number;
              advertiser_platform_id: string;
              id: number;
              name: string;
              platform: number;
        }
        interface AdvertiserChooseListAdTotalResp {
              /** 列表 */
              list: AdvertiserChooseListAdTotalInner[];
        }
        interface AdvertiserChooseListItem {
              advertiser_id: number;
              is_collect: boolean;
              name: string;
              /** 状态 【0正常，1无权限请重新授权，2授权过期】 */
              status: number;
        }
        interface AdvertiserDataTableListRecord {
              account_general_total: number;
              account_total: number;
              /** 直接订单结算率(14天) */
              ad_all_order_count_settle_rate_14d: number;
              /** 直接订单结算率(7天) */
              ad_all_order_count_settle_rate_7d: number;
              /** 直接成交金额结算率(14天) */
              ad_all_order_gmv_settle_rate_14d: number;
              /** 直接成交金额结算率(7天) */
              ad_all_order_gmv_settle_rate_7d: number;
              /** 直接结算金额(14天) */
              ad_all_order_settle_amount_14d: number;
              /** 直接结算金额(7天) */
              ad_all_order_settle_amount_7d: number;
              /** 直接结算成本(14天) */
              ad_all_order_settle_cost_14d: number;
              /** 直接结算成本(7天) */
              ad_all_order_settle_cost_7d: number;
              /** 直接结算订单数(14天) */
              ad_all_order_settle_count_14d: number;
              /** 直接结算订单数(7天) */
              ad_all_order_settle_count_7d: number;
              /** 直接结算ROI(14天) */
              ad_all_order_settle_roi_14d: number;
              /** 直接结算ROI(7天) */
              ad_all_order_settle_roi_7d: number;
              /** 直接退款率(14天) */
              ad_order_gmv_refund_rate_14d: number;
              /** 直接退款率(7天) */
              ad_order_gmv_refund_rate_7d: number;
              /** 直接订单数退货率(14天) */
              ad_order_refund_rate_14d: number;
              /** 直接订单数退货率(7天) */
              ad_order_refund_rate_7d: number;
              /** 千川广告主id */
              advertiser_id: number;
              advertiser_is_valid: boolean;
              advertiser_name: string;
              /** 千川账户所属代理商账户id */
              agent_id: number;
              /** 千川账户所属代理商的名称 */
              agent_name: string;
              /** 7日总下单ROI */
              all_order_create_roi_7days: number;
              /** 7日总成交订单 */
              all_order_pay_count_7days: number;
              /** 7日总成交金额 */
              all_order_pay_gmv_7days: number;
              /** 7日总支付ROI */
              all_order_pay_roi_7days: number;
              /** 直接退款金额(14天) */
              all_order_refund_amount_14d: number;
              /** 直接退款金额(7天) */
              all_order_refund_amount_7d: number;
              /** 直接退款订单数(14天) */
              all_order_refund_count_14d: number;
              /** 直接退款订单数(7天) */
              all_order_refund_count_7d: number;
              /** 转化数（计费时间） */
              attribution_convert_cnt: number;
              /** 转化成本（计费时间） */
              attribution_convert_cost: number;
              /** 转化率（计费时间） */
              attribution_convert_rate: number;
              /** 深度转化次数（计费时间） */
              attribution_deep_convert_cnt: number;
              /** 深度转化成本（计费时间） */
              attribution_deep_convert_cost: number;
              /** 深度转化率（计费时间） */
              attribution_deep_convert_rate: number;
              /** 点击次数 */
              click_cnt: number;
              /** 企业id */
              company_id: number;
              /** 转化次数 */
              convert_cnt: number;
              /** 转化成本 */
              convert_cost: number;
              /** 转化率 */
              convert_rate: number;
              /** 平均点击单价 */
              cpc_platform: number;
              /** 平均千次展示费用 */
              cpm_platform: number;
              /** 直接下单金额 */
              create_order_amount: number;
              /** 直接下单订单数 */
              create_order_count: number;
              /** 下单智能优惠券金额 */
              create_order_coupon_amount: number;
              /** 直接下单roi */
              create_order_roi: number;
              created_at: string;
              /** 添加人ID 账户负责人/协作者 */
              creator: number;
              /** 点击率 */
              ctr: number;
              /** 深度转化次数 */
              deep_convert_cnt: number;
              /** 深度转化成本 */
              deep_convert_cost: number;
              /** 深度转化率 */
              deep_convert_rate: number;
              /** AdvertiserID   int64          `json:"advertiser_id"` */
              duty_user_name: string;
              /** 评论次数 */
              dy_comment: number;
              /** 新增粉丝数 */
              dy_follow: number;
              /** 点赞次数 */
              dy_like: number;
              /** 分享次数 */
              dy_share: number;
              id: number;
              /** 间接下单订单数 */
              indirect_order_create_count_7days: number;
              /** 间接下单金额 */
              indirect_order_create_gmv_7days: number;
              /** 间接成交订单数 */
              indirect_order_pay_count_7days: number;
              /** 间接成交金额 */
              indirect_order_pay_gmv_7days: number;
              /** 间接预售订单数 */
              indirect_order_prepay_count_7days: number;
              /** 间接预售金额 */
              indirect_order_prepay_gmv_7days: number;
              /** 未完结间接预售订单预估金额 */
              indirect_order_unfinished_estimate_gmv_7days: number;
              is_collect: boolean;
              /** 是否开启账户 */
              is_enable: boolean;
              /** 是否开启出价保护 */
              is_protect: boolean;
              /** 成交客单价 */
              live_pay_order_cost_per_order: number;
              /** 直播间商品点击次数 */
              luban_live_click_product_cnt: number;
              /** 直播间观看人次 */
              luban_live_enter_cnt: number;
              /** 广告主名称 */
              name: string;
              /** 直接成交金额 */
              pay_order_amount: number;
              /** 直接成交客单价 */
              pay_order_cost_per_order: number;
              /** 直接成交订单数 */
              pay_order_count: number;
              /** 成交智能优惠券金额 */
              pay_order_coupon_amount: number;
              /** 平台 */
              platform: number;
              /** 25%进度播放数 */
              play_25_feed_break: number;
              /** 50%进度播放数 */
              play_50_feed_break: number;
              /** 75%进度播放数 */
              play_75_feed_break: number;
              /** 3s播放数 */
              play_duration_3s: number;
              /** 播放完成数 */
              play_over: number;
              /** 完播率 */
              play_over_rate: number;
              /** 3s 完播率 */
              play_over_rate_3s: number;
              /** 直接支付roi */
              prepay_and_pay_order_roi: number;
              /** 直接预售金额 */
              prepay_order_amount: number;
              /** 直接预售订单数 */
              prepay_order_count: number;
              /** 抖音号首单新客数 */
              qianchuan_author_first_order_cnt: number;
              /** 抖音号首单新客转化成本 */
              qianchuan_author_first_order_convert_cost: number;
              /** 抖音号首单新客直接成交金额 */
              qianchuan_author_first_order_direct_pay_gmv: number;
              /** 抖音号首单新客直接支付roi */
              qianchuan_author_first_order_direct_pay_order_roi: number;
              /** 抖音号首单新客30天累计成交金额 */
              qianchuan_author_first_order_ltv30: number;
              /** 抖音号首单新客订单占比 */
              qianchuan_author_first_order_rate: number;
              /** 抖音号首单新客30天累计支付roi */
              qianchuan_author_first_order_roi30: number;
              /** 品牌首单新客数 */
              qianchuan_brand_first_order_cnt: number;
              /** 品牌首单新客转化成本 */
              qianchuan_brand_first_order_convert_cost: number;
              /** 品牌首单新客直接成交金额 */
              qianchuan_brand_first_order_direct_pay_gmv: number;
              /** 品牌首单新客直接支付roi */
              qianchuan_brand_first_order_direct_pay_order_roi: number;
              /** 品牌首单新客30天累计成交金额 */
              qianchuan_brand_first_order_ltv30: number;
              /** 品牌首单新客订单占比 */
              qianchuan_brand_first_order_rate: number;
              /** 品牌首单新客30天累计支付roi */
              qianchuan_brand_first_order_roi30: number;
              /** 店铺首单新客人数 */
              qianchuan_first_order_cnt: number;
              /** 店铺首单新客转化成本 */
              qianchuan_first_order_convert_cost: number;
              /** 店铺首单新客直接成交金额 */
              qianchuan_first_order_direct_pay_gmv: number;
              /** 店铺首单新客直接支付ROI */
              qianchuan_first_order_direct_pay_order_roi: number;
              /** 店铺首单新客30天累计成交金额 */
              qianchuan_first_order_ltv30: number;
              /** 店铺首单新客订单占比 */
              qianchuan_first_order_rate: number;
              /** 店铺首单新客30天累计支付ROI */
              qianchuan_first_order_roi30: number;
              quota_info: Record<string, any>;
              /** 最近更新时间 */
              refresh_time: string;
              /** 展示次数 */
              show_cnt: number;
              /** TODO 每种类型的字段类型梳理。 */
              stat_cost: number;
              /** 账户状态 */
              status: number;
              /** 负责的团队id */
              team_id: number;
              /** 播放数 */
              total_play: number;
              /** 未完结直接预售订单预估金额 */
              unfinished_estimate_order_gmv: number;
              updated_at: string;
        }
        interface AdvertiserDataTableListResp {
              records: AdvertiserDataTableListRecord[];
              summary: AdvertiserDataTableListSummary;
              total: number;
        }
        interface AdvertiserDataTableListSummary {
              account_general_total: number;
              account_total: number;
              /** 直接订单结算率(14天) */
              ad_all_order_count_settle_rate_14d: number;
              /** 直接订单结算率(7天) */
              ad_all_order_count_settle_rate_7d: number;
              /** 直接成交金额结算率(14天) */
              ad_all_order_gmv_settle_rate_14d: number;
              /** 直接成交金额结算率(7天) */
              ad_all_order_gmv_settle_rate_7d: number;
              /** 直接结算金额(14天) */
              ad_all_order_settle_amount_14d: number;
              /** 直接结算金额(7天) */
              ad_all_order_settle_amount_7d: number;
              /** 直接结算成本(14天) */
              ad_all_order_settle_cost_14d: number;
              /** 直接结算成本(7天) */
              ad_all_order_settle_cost_7d: number;
              /** 直接结算订单数(14天) */
              ad_all_order_settle_count_14d: number;
              /** 直接结算订单数(7天) */
              ad_all_order_settle_count_7d: number;
              /** 直接结算ROI(14天) */
              ad_all_order_settle_roi_14d: number;
              /** 直接结算ROI(7天) */
              ad_all_order_settle_roi_7d: number;
              /** 直接退款率(14天) */
              ad_order_gmv_refund_rate_14d: number;
              /** 直接退款率(7天) */
              ad_order_gmv_refund_rate_7d: number;
              /** 直接订单数退货率(14天) */
              ad_order_refund_rate_14d: number;
              /** 直接订单数退货率(7天) */
              ad_order_refund_rate_7d: number;
              /** 7日总下单ROI */
              all_order_create_roi_7days: number;
              /** 7日总成交订单 */
              all_order_pay_count_7days: number;
              /** 7日总成交金额 */
              all_order_pay_gmv_7days: number;
              /** 7日总支付ROI */
              all_order_pay_roi_7days: number;
              /** 直接退款金额(14天) */
              all_order_refund_amount_14d: number;
              /** 直接退款金额(7天) */
              all_order_refund_amount_7d: number;
              /** 直接退款订单数(14天) */
              all_order_refund_count_14d: number;
              /** 直接退款订单数(7天) */
              all_order_refund_count_7d: number;
              /** 转化数（计费时间） */
              attribution_convert_cnt: number;
              /** 转化成本（计费时间） */
              attribution_convert_cost: number;
              /** 转化率（计费时间） */
              attribution_convert_rate: number;
              /** 深度转化次数（计费时间） */
              attribution_deep_convert_cnt: number;
              /** 深度转化成本（计费时间） */
              attribution_deep_convert_cost: number;
              /** 深度转化率（计费时间） */
              attribution_deep_convert_rate: number;
              /** 点击次数 */
              click_cnt: number;
              /** 转化次数 */
              convert_cnt: number;
              /** 转化成本 */
              convert_cost: number;
              /** 转化率 */
              convert_rate: number;
              /** 平均点击单价 */
              cpc_platform: number;
              /** 平均千次展示费用 */
              cpm_platform: number;
              /** 直接下单金额 */
              create_order_amount: number;
              /** 直接下单订单数 */
              create_order_count: number;
              /** 下单智能优惠券金额 */
              create_order_coupon_amount: number;
              /** 直接下单roi */
              create_order_roi: number;
              /** 点击率 */
              ctr: number;
              /** 深度转化次数 */
              deep_convert_cnt: number;
              /** 深度转化成本 */
              deep_convert_cost: number;
              /** 深度转化率 */
              deep_convert_rate: number;
              /** 评论次数 */
              dy_comment: number;
              /** 新增粉丝数 */
              dy_follow: number;
              /** 点赞次数 */
              dy_like: number;
              /** 分享次数 */
              dy_share: number;
              /** 间接下单订单数 */
              indirect_order_create_count_7days: number;
              /** 间接下单金额 */
              indirect_order_create_gmv_7days: number;
              /** 间接成交订单数 */
              indirect_order_pay_count_7days: number;
              /** 间接成交金额 */
              indirect_order_pay_gmv_7days: number;
              /** 间接预售订单数 */
              indirect_order_prepay_count_7days: number;
              /** 间接预售金额 */
              indirect_order_prepay_gmv_7days: number;
              /** 未完结间接预售订单预估金额 */
              indirect_order_unfinished_estimate_gmv_7days: number;
              /** 成交客单价 */
              live_pay_order_cost_per_order: number;
              /** 直播间商品点击次数 */
              luban_live_click_product_cnt: number;
              /** 直播间观看人次 */
              luban_live_enter_cnt: number;
              /** 直接成交金额 */
              pay_order_amount: number;
              /** 直接成交客单价 */
              pay_order_cost_per_order: number;
              /** 直接成交订单数 */
              pay_order_count: number;
              /** 成交智能优惠券金额 */
              pay_order_coupon_amount: number;
              /** 25%进度播放数 */
              play_25_feed_break: number;
              /** 50%进度播放数 */
              play_50_feed_break: number;
              /** 75%进度播放数 */
              play_75_feed_break: number;
              /** 3s播放数 */
              play_duration_3s: number;
              /** 播放完成数 */
              play_over: number;
              /** 完播率 */
              play_over_rate: number;
              /** 3s 完播率 */
              play_over_rate_3s: number;
              /** 直接支付roi */
              prepay_and_pay_order_roi: number;
              /** 直接预售金额 */
              prepay_order_amount: number;
              /** 直接预售订单数 */
              prepay_order_count: number;
              /** 抖音号首单新客数 */
              qianchuan_author_first_order_cnt: number;
              /** 抖音号首单新客转化成本 */
              qianchuan_author_first_order_convert_cost: number;
              /** 抖音号首单新客直接成交金额 */
              qianchuan_author_first_order_direct_pay_gmv: number;
              /** 抖音号首单新客直接支付roi */
              qianchuan_author_first_order_direct_pay_order_roi: number;
              /** 抖音号首单新客30天累计成交金额 */
              qianchuan_author_first_order_ltv30: number;
              /** 抖音号首单新客订单占比 */
              qianchuan_author_first_order_rate: number;
              /** 抖音号首单新客30天累计支付roi */
              qianchuan_author_first_order_roi30: number;
              /** 品牌首单新客数 */
              qianchuan_brand_first_order_cnt: number;
              /** 品牌首单新客转化成本 */
              qianchuan_brand_first_order_convert_cost: number;
              /** 品牌首单新客直接成交金额 */
              qianchuan_brand_first_order_direct_pay_gmv: number;
              /** 品牌首单新客直接支付roi */
              qianchuan_brand_first_order_direct_pay_order_roi: number;
              /** 品牌首单新客30天累计成交金额 */
              qianchuan_brand_first_order_ltv30: number;
              /** 品牌首单新客订单占比 */
              qianchuan_brand_first_order_rate: number;
              /** 品牌首单新客30天累计支付roi */
              qianchuan_brand_first_order_roi30: number;
              /** 店铺首单新客人数 */
              qianchuan_first_order_cnt: number;
              /** 店铺首单新客转化成本 */
              qianchuan_first_order_convert_cost: number;
              /** 店铺首单新客直接成交金额 */
              qianchuan_first_order_direct_pay_gmv: number;
              /** 店铺首单新客直接支付ROI */
              qianchuan_first_order_direct_pay_order_roi: number;
              /** 店铺首单新客30天累计成交金额 */
              qianchuan_first_order_ltv30: number;
              /** 店铺首单新客订单占比 */
              qianchuan_first_order_rate: number;
              /** 店铺首单新客30天累计支付ROI */
              qianchuan_first_order_roi30: number;
              /** 展示次数 */
              show_cnt: number;
              /** TODO 每种类型的字段类型梳理。 */
              stat_cost: number;
              /** 播放数 */
              total_play: number;
              /** 未完结直接预售订单预估金额 */
              unfinished_estimate_order_gmv: number;
        }
        interface AdvertiserQuotaAndBalanceReq {
              /** 广告账号的id */
              advertiser_ids: number[];
        }
        interface AdvertiserRetargetingTags {
              /** 排除人群包id列表 */
              retargeting_tags_exclude: number[];
              /** 定向人群包id列表 */
              retargeting_tags_include: number[];
        }
        interface AdvertisersDataInitReq {
              advertisers_conf: Advertiser[];
        }
        interface AnnotationTagListItem {
              created_at: string;
              creator: number;
              creator_info: BasicUserInfo;
              id: number;
              material_type_catalogs: MaterialCatalogsKeyByTypeMap;
              name: string;
              serial_number: number;
        }
        interface AnnotationTagListResp {
              count: number;
              records: AnnotationTagListItem[];
        }
        interface AuthUpdate {
              /** 账户id */
              advertiser_id: number;
              refresh_begin_time: string;
        }
        interface AuthUpdateReq {
              auth_updates: AuthUpdate[];
              platform: FlowPlatformType;
        }
        interface AutoDownLoss {
              /** 亏损关停模式 */
              auto_down_loss_model: any;
              /** 预算 */
              budget: number;
              created_at: string;
              /** 名称动态 */
              dynamic_name: string;
              /** 结束时间 */
              end_time: string;
              id: number;
              /** 是否启用 */
              is_enable: boolean;
              /** 营销目标(如为空则代表全部) */
              marketing_goal: any;
              /** 广告类型(如为空则代表全部) */
              marketing_scene: any;
              /** 监控计划类型（仅当亏损关停模式为广告计划时生效） */
              monitoring_ad_type: any;
              /** 监控的投放账号ids */
              monitoring_advertiser_ids: number[];
              /** 绑定广告主的监控子类 */
              monitoring_advertiser_inners: MonitoringAdvertiserInner[];
              /** 监控频率 */
              monitoring_frequency: any;
              /** 监控方式 */
              monitoring_model: any;
              /** 名称 */
              name: string;
              /** 通知频率 */
              notification_frequency: any;
              /** roi */
              roi2_goal: number;
              /** 检测时间段 */
              scan_time_period: any;
              /** 检测时间 */
              schedule_time: string;
              /** 检测日期的类型 */
              schedule_type: any;
              /** 开始时间 */
              start_time: string;
              /** 触发方式 */
              trigger_mode: any;
              updated_at: string;
              /** 当前版本号（用于监控） */
              version: number;
        }
        interface AutoDownLossLog {
              /** 关停id */
              auto_down_loss_id: number;
              /** 预算 */
              budget: number;
              created_at: string;
              id: number;
              /** 监控id【广告计划id、广告组id】 */
              monitoring_id: number;
              /** 监控对象名称【广告计划名称、广告组名称】 */
              monitoring_name: string;
              /** roi */
              roi2_goal: number;
              /** 触发方式 */
              trigger_mode: any;
              updated_at: string;
              /** 监控预算 */
              watch_budget: number;
              /** 监控roi */
              watch_roi2_goal: number;
        }
        interface AutoHotItem {
              /** 爆单模式 */
              auto_hot_item_model: any;
              created_at: string;
              /** 名称动态 */
              dynamic_name: string;
              /** 结束时间 */
              end_time: string;
              id: number;
              /** 是否启用 */
              is_enable: boolean;
              /** 营销目标(如为空则代表全部) */
              marketing_goal: any;
              /** 广告类型(如为空则代表全部) */
              marketing_scene: any;
              /** 监控的广告计划类型 */
              monitoring_ad_type: any;
              /** 监控的投放账号id */
              monitoring_advertiser_ids: number[];
              /** 绑定广告主的监控子类 */
              monitoring_advertiser_inners: MonitoringAdvertiserInner[];
              /** 监控频率 */
              monitoring_frequency: any;
              /** 监控方式 */
              monitoring_model: any;
              /** 名称 */
              name: string;
              /** 通知频率 */
              notification_frequency: any;
              /** roi */
              roi2_goal: number;
              /** 检测时间段 */
              scan_time_period: any;
              /** 检测时间 */
              schedule_time: string;
              /** 检测日期的类型 */
              schedule_type: any;
              /** 开始时间 */
              start_time: string;
              /** 触发方式 */
              trigger_mode: any;
              updated_at: string;
              /** 绑定的监控版本号 */
              version: number;
        }
        interface AutoHotItemLog {
              /** 爆单id */
              auto_hot_item_id: number;
              created_at: string;
              id: number;
              /** 监控id【广告计划id、广告组id】 */
              monitoring_id: number;
              /** 监控对象名称【广告计划名称、广告组名称】 */
              monitoring_name: string;
              /** roi */
              roi2_goal: number;
              /** 触发方式 */
              trigger_mode: any;
              updated_at: string;
              /** 监控预算 */
              watch_budget: number;
              /** 监控roi */
              watch_roi2_goal: number;
        }
        enum AutoTagKey {
              HOT_VIDEO = "hot-video",
              HOT_VIDEO_MATERIAL = "hot-video-material",
              REVIEW_TAG = "review-tag",
              VIDEO_STATE_AUTO_CHANGE_AFTER_DELIVERED = "video-state-auto-change-after-delivered",
              VIDEO_STATE_AUTO_CHANGE_AFTER_UPLOAD_NEW_VERSION = "video-state-auto-change-after-upload-new-version",
              MOVIE_ROI_SHOW = "movie-roi-show",
        }
        interface AutoTagRuleItem {
              /** 自动标签的唯一 key */
              key: any;
              /** 这是对应自动标签的配置字段，到时候保存的时候提交的rule字段是这里面的字段的json字符串数据 */
              rule: any;
              /** 自动标签规则的展示名称 */
              title: string;
        }
        interface AutoTagRuleUpdateItem {
              /** 规则 key */
              key: any;
              /** 对应规则的 json 字符串 */
              rule: string;
        }
        interface AutoTagRuleUpdateReq {
              rules: AutoTagRuleUpdateItem[];
        }
        interface Aweme {
              /** 广告主账户id */
              advertiser_id: number;
              /** 抖音头像 */
              aweme_avatar: string;
              /** 抖音号是否有直播带货权限 */
              aweme_has_live_permission: boolean;
              /** 标识抖音号是否有"使用抖音号发布作品"权限 */
              aweme_has_publish_permission: boolean;
              /** 该抖音号是否有全域推广计划投放 */
              aweme_has_uni_prom: boolean;
              /** 抖音号是否有短视频带货权限 */
              aweme_has_video_permission: boolean;
              /** 抖音id */
              aweme_id: number;
              /** 抖音号名称 */
              aweme_name: string;
              /** 抖音号 */
              aweme_show_id: string;
              /** 抖音号带货状态 */
              aweme_status: any;
              /** 抖音号授权类型 */
              bind_type: FlowBindType[];
        }
        interface AwemeShareSchemaReq {
              /** 是否允许下载  1：允许，2：不允许 */
              download_type: number;
              /** note：当整体投稿流程为"普通投稿"，且投稿内容为"多图"，投稿类型为“图文”时，开发者可以设置该值，将体裁转变为"笔记"。 */
              feature: string;
              /** 支持有第三方预设内容分享抖音时默认携带的话题，指定的话题会展现在发布页面 */
              hashtag_list: string[];
              /** 素材id */
              material_id: string;
              /** 添加小程序。视频成功发布视频后，在视频左下角带有小程序入口。 */
              micro_app_info: any;
              /** 地理位置信息锚点 id，与小程序 appId 互斥，优先展示小程序。 */
              poi_id: string;
              /** 视频公开范围  0：全部人可见，1：自己可见，2：好友可见 */
              private_status: number;
              share_id: string;
              /** 为 1 时直接分享到抖音发布页（仅视频） */
              share_to_publish: number;
              /** 0：投稿 1：转发到日常 */
              share_to_type: number;
              /** 短标题 */
              short_title: string;
              /** 视频标题 */
              title: string;
              /** 插入title的hashtag列表，可指定在title中位置。 */
              title_hashtag_list: MaterialAwemeShareTitleHashtag[];
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
              /** 广告组 ID 数组 */
              campaign_ids: number[];
        }
        interface CampaignBatchOptResp {
              results: CampaignBatchOptResult[];
        }
        interface CampaignBatchOptResult {
              /** 广告组 ID */
              campaign_id: number;
              /** 广告组名称 */
              campaign_name: string;
              /** 操作失败后的提示 */
              msg: string;
              /** 操作结果 true: 成功 false: 失败 */
              opt_result: boolean;
        }
        interface CampaignBudgetBatchUpdateReq {
              budget_mode: FlowBudgetMode;
              campaign_budget: number;
              campaign_ids: number[];
        }
        interface CampaignBudgetBatchUpdateResp {
              results: CampaignBudgetBatchUpdateResult[];
        }
        interface CampaignBudgetBatchUpdateResult {
              /** 广告组 ID */
              campaign_id: number;
              /** 广告组名称 */
              campaign_name: string;
              /** 操作失败后的提示 */
              msg: string;
              /** 操作结果 true: 成功 false: 失败 */
              opt_result: boolean;
        }
        interface CampaignChooseListAdTotalInner {
              /** 广告账户 */
              advertiser_id: number;
              /** 广告账户名称 */
              advertiser_name: string;
              /** 子列表 */
              sub_list: CampaignChooseListAdTotalInnerSub[];
        }
        interface CampaignChooseListAdTotalInnerSub {
              /** 绑定的广告账户数量 */
              ad_total: number;
              avatar: string;
              id: number;
              name: string;
        }
        interface CampaignChooseListAdTotalReq {
              /** 广告账号 */
              advertiser_ids: number[];
              /** 营销目标 */
              marketing_goal: any;
              /** 广告类型 */
              marketing_scene: any;
        }
        interface CampaignChooseListAdTotalResp {
              /** 列表 */
              list: CampaignChooseListAdTotalInner[];
        }
        interface CampaignChooseListReq {
              advertiser_ids: number[];
              marketing_goal: FlowMarketingGoal;
              marketing_scene: FlowMarketingScene;
        }
        interface CampaignDataTableListSummary {
              /** 直接订单结算率(14天) */
              ad_all_order_count_settle_rate_14d: number;
              /** 直接订单结算率(7天) */
              ad_all_order_count_settle_rate_7d: number;
              /** 直接成交金额结算率(14天) */
              ad_all_order_gmv_settle_rate_14d: number;
              /** 直接成交金额结算率(7天) */
              ad_all_order_gmv_settle_rate_7d: number;
              /** 直接结算金额(14天) */
              ad_all_order_settle_amount_14d: number;
              /** 直接结算金额(7天) */
              ad_all_order_settle_amount_7d: number;
              /** 直接结算成本(14天) */
              ad_all_order_settle_cost_14d: number;
              /** 直接结算成本(7天) */
              ad_all_order_settle_cost_7d: number;
              /** 直接结算订单数(14天) */
              ad_all_order_settle_count_14d: number;
              /** 直接结算订单数(7天) */
              ad_all_order_settle_count_7d: number;
              /** 直接结算ROI(14天) */
              ad_all_order_settle_roi_14d: number;
              /** 直接结算ROI(7天) */
              ad_all_order_settle_roi_7d: number;
              /** 直接退款率(14天) */
              ad_order_gmv_refund_rate_14d: number;
              /** 直接退款率(7天) */
              ad_order_gmv_refund_rate_7d: number;
              /** 直接订单数退货率(14天) */
              ad_order_refund_rate_14d: number;
              /** 直接订单数退货率(7天) */
              ad_order_refund_rate_7d: number;
              /** 7日总下单ROI */
              all_order_create_roi_7days: number;
              /** 7日总成交订单 */
              all_order_pay_count_7days: number;
              /** 7日总成交金额 */
              all_order_pay_gmv_7days: number;
              /** 7日总支付ROI */
              all_order_pay_roi_7days: number;
              /** 直接退款金额(14天) */
              all_order_refund_amount_14d: number;
              /** 直接退款金额(7天) */
              all_order_refund_amount_7d: number;
              /** 直接退款订单数(14天) */
              all_order_refund_count_14d: number;
              /** 直接退款订单数(7天) */
              all_order_refund_count_7d: number;
              /** 转化数（计费时间） */
              attribution_convert_cnt: number;
              /** 转化成本（计费时间） */
              attribution_convert_cost: number;
              /** 转化率（计费时间） */
              attribution_convert_rate: number;
              /** 深度转化次数（计费时间） */
              attribution_deep_convert_cnt: number;
              /** 深度转化成本（计费时间） */
              attribution_deep_convert_cost: number;
              /** 深度转化率（计费时间） */
              attribution_deep_convert_rate: number;
              /** 点击次数 */
              click_cnt: number;
              /** 平均点击单价 */
              cpc_platform: number;
              /** 平均千次展示费用 */
              cpm_platform: number;
              /** 直接下单金额 */
              create_order_amount: number;
              /** 直接下单订单数 */
              create_order_count: number;
              /** 下单智能优惠券金额 */
              create_order_coupon_amount: number;
              /** 直接下单roi */
              create_order_roi: number;
              /** 点击率 */
              ctr: number;
              /** 深度转化次数 */
              deep_convert_cnt: number;
              /** 深度转化成本 */
              deep_convert_cost: number;
              /** 深度转化率 */
              deep_convert_rate: number;
              /** 评论次数 */
              dy_comment: number;
              /** 新增粉丝数 */
              dy_follow: number;
              /** 点赞次数 */
              dy_like: number;
              /** 分享次数 */
              dy_share: number;
              /** 转化数 */
              ecp_convert_cnt: number;
              /** 转化率 */
              ecp_convert_rate: number;
              /** 转化成本 */
              ecp_cpa_platform: number;
              /** 间接下单订单数 */
              indirect_order_create_count_7days: number;
              /** 间接下单金额 */
              indirect_order_create_gmv_7days: number;
              /** 间接成交订单数 */
              indirect_order_pay_count_7days: number;
              /** 间接成交金额 */
              indirect_order_pay_gmv_7days: number;
              /** 间接预售订单数 */
              indirect_order_prepay_count_7days: number;
              /** 间接预售金额 */
              indirect_order_prepay_gmv_7days: number;
              /** 未完结间接预售订单预估金额 */
              indirect_order_unfinished_estimate_gmv_7days: number;
              /** 直播间新加团人次 */
              live_fans_club_join_cnt: number;
              /** 成交客单价 */
              live_pay_order_cost_per_order: number;
              /** 直播间超过1分钟观看人次 */
              live_watch_one_minute_count: number;
              /** 直播间商品点击次数 */
              luban_live_click_product_cnt: number;
              /** 直播间评论次数 */
              luban_live_comment_cnt: number;
              /** 直播间观看人次 */
              luban_live_enter_cnt: number;
              /** 直播间音浪收入 */
              luban_live_gift_amount: number;
              /** 直播间打赏次数 */
              luban_live_gift_cnt: number;
              /** 直播间分享次数 */
              luban_live_share_cnt: number;
              /** 直播间查看购物车次数 */
              luban_live_slidecart_click_cnt: number;
              /** 直接成交金额 */
              pay_order_amount: number;
              /** 直接成交客单价 */
              pay_order_cost_per_order: number;
              /** 直接成交订单数 */
              pay_order_count: number;
              /** 成交智能优惠券金额 */
              pay_order_coupon_amount: number;
              /** 25%进度播放数 */
              play_25_feed_break: number;
              /** 50%进度播放数 */
              play_50_feed_break: number;
              /** 75%进度播放数 */
              play_75_feed_break: number;
              /** 3s播放数 */
              play_duration_3s: number;
              /** 播放完成次数 */
              play_over: number;
              /** 完播率 */
              play_over_rate: number;
              /** 3s 完播率 */
              play_over_rate_3s: number;
              /** 直接支付roi */
              prepay_and_pay_order_roi: number;
              /** 直接预售金额 */
              prepay_order_amount: number;
              /** 直接预售订单数 */
              prepay_order_count: number;
              /** 抖音号首单新客数 */
              qianchuan_author_first_order_cnt: number;
              /** 抖音号首单新客转化成本 */
              qianchuan_author_first_order_convert_cost: number;
              /** 抖音号首单新客直接成交金额 */
              qianchuan_author_first_order_direct_pay_gmv: number;
              /** 抖音号首单新客直接支付roi */
              qianchuan_author_first_order_direct_pay_order_roi: number;
              /** 抖音号首单新客30天累计成交金额 */
              qianchuan_author_first_order_ltv30: number;
              /** 抖音号首单新客订单占比 */
              qianchuan_author_first_order_rate: number;
              /** 抖音号首单新客30天累计支付roi */
              qianchuan_author_first_order_roi30: number;
              /** 品牌首单新客数 */
              qianchuan_brand_first_order_cnt: number;
              /** 品牌首单新客转化成本 */
              qianchuan_brand_first_order_convert_cost: number;
              /** 品牌首单新客直接成交金额 */
              qianchuan_brand_first_order_direct_pay_gmv: number;
              /** 品牌首单新客直接支付roi */
              qianchuan_brand_first_order_direct_pay_order_roi: number;
              /** 品牌首单新客30天累计成交金额 */
              qianchuan_brand_first_order_ltv30: number;
              /** 品牌首单新客订单占比 */
              qianchuan_brand_first_order_rate: number;
              /** 品牌首单新客30天累计支付roi */
              qianchuan_brand_first_order_roi30: number;
              /** 店铺首单新客人数 */
              qianchuan_first_order_cnt: number;
              /** 店铺首单新客转化成本 */
              qianchuan_first_order_convert_cost: number;
              /** 店铺首单新客直接成交金额 */
              qianchuan_first_order_direct_pay_gmv: number;
              /** 店铺首单新客直接支付ROI */
              qianchuan_first_order_direct_pay_order_roi: number;
              /** 店铺首单新客30天累计成交金额 */
              qianchuan_first_order_ltv30: number;
              /** 店铺首单新客订单占比 */
              qianchuan_first_order_rate: number;
              /** 店铺首单新客30天累计支付ROI */
              qianchuan_first_order_roi30: number;
              /** 展示次数 */
              show_cnt: number;
              /** TODO 统计字段类型一个个确认 */
              stat_cost: number;
              /** 播放数 */
              total_play: number;
              /** 未完结直接预售订单预估金额 */
              unfinished_estimate_order_gmv: number;
        }
        interface Category {
              /** 所属企业id */
              company_id: number;
              created_at: string;
              /** 创建者id */
              creator: number;
              id: number;
              material_catalog: MaterialTypeCatalogRelationMaterialCatalog;
              /** 类型：movie（成片）、own（企业/自有素材）、cooperation（合作素材）、reference（对标素材） */
              material_type: any;
              /** 分类名称 */
              name: string;
              /** 父级分类id */
              parent_id: number;
              /** 排序序号 */
              serial_number: number;
              updated_at: string;
        }
        interface CategoryRoleSettingItem {
              departments: BasicSelectInfo[];
              set_type: ResourceRoleSetType;
              teams: BasicSelectInfo[];
              users: BasicUserInfo[];
        }
        interface CategoryRoleSettingValue {
              /** 部门id数组 */
              department_ids: number[];
              /** 1 指定范围 2 公开不限制 */
              set_type: any;
              /** 团队id数组 */
              team_ids: number[];
              /** 用户id数组 */
              user_ids: string[];
        }
        interface CategoryRoleSettingsResp {
        }
        interface CategoryTagGroupSetting {
              /** 分类ID */
              category_id: number;
              created_at: string;
              /** 是否是必填项 0 否，1 是 */
              is_required: number;
              /** 标签组ID */
              tag_group_id: number;
              updated_at: string;
        }
        interface CategoryTagGroupsItem {
              category_id: number;
              /** 是否是必填项 0 否， 1 是 */
              is_required: number;
              tag_group_id: number;
              tag_group_name: string;
        }
        interface ChoosePublicTags {
              id: number;
              /** 在当前分类下，标签组是否是必填 */
              is_required: number;
              name: string;
              tags: FilterTag[];
        }
        interface ClientRequest {
              params: string;
              url: string;
        }
        interface CollectAdBasicInfoTemplateReq {
              /** 模板id */
              ad_basic_info_template_ids: number[];
              /** 是否收藏 */
              is_collect: boolean;
        }
        interface CollectAdTemplateReq {
              /** 模板id */
              ad_template_ids: number[];
              /** 是否收藏 */
              is_collect: boolean;
        }
        interface CollectAdvertiserReq {
              /** 广告账户id */
              advertiser_ids: number[];
              /** 收藏 */
              is_collect: boolean;
              /** 平台 */
              platform_list: FlowPlatformType[];
        }
        interface CollectOrientationTemplateReq {
              /** 是否收藏 */
              is_collect: boolean;
              /** 模板id */
              orientation_template_ids: number[];
        }
        interface Company {
              /** 广告账号数量 */
              advertisement_user_count: number;
              /** 广告账号数量限制 */
              advertisement_user_limit: number;
              /** 审核原因 */
              audit_reason: string;
              /** 审核状态 1 审核中 2 审核通过  3 审核未通过 */
              audit_status: number;
              /** 企业头像 */
              avatar: string;
              created_at: string;
              /** 创建人 */
              creator: number;
              /** 负责人 */
              director: number;
              /** 抖音账号数量 */
              douyin_account_count: number;
              /** 抖音账号数量限制 */
              douyin_account_limit: number;
              /** 终端首次获取配置启动时间 */
              first_launch_time: number;
              /** 剩余存储空间 */
              free_storage: number;
              /** 企业 ID */
              id: number;
              /** 内部成员数量 */
              inner_count: number;
              /** 内部域名 */
              inner_domain: string;
              /** 创建用户id */
              inner_limit: number;
              /** 终端最后上报时间 */
              last_report_time: number;
              /** 终端安装license */
              license: string;
              /** 企业名称 */
              name: string;
              /** 外部成员数量 */
              outer_count: number;
              /** 外部域名 */
              outer_domain: string;
              /** 外部人数限制 */
              outer_limit: number;
              /** 版本名称 */
              price_plan_name: string;
              /** frp server代理端口 */
              proxy_port: number;
              /** 存储空间使用量 */
              size_count: number;
              /** 存储大小限制 */
              size_limit: number;
              /** 终端ip地址 */
              terminal_ip: string;
              /** 终端版本 */
              terminal_version: string;
              /** 总存储空间 */
              total_storage: number;
              updated_at: string;
        }
        interface Copywriter {
              /** 文案组 */
              copywriter_texts: CopywriterText[];
              /** 文案组名称 */
              name: string;
        }
        interface CopywriterText {
              title: string;
              title_type: FlowTitleType;
        }
        interface CreateAdBasicInfoTemplateReq {
              /** 广告基础信息详情 */
              detail: any;
              /** 模板类型 */
              template_type: any;
        }
        interface CreateAdDetail {
              /** 基础信息模板 */
              ad_basic_info_template: any;
              /** 创意分类标签组 */
              ad_creative_commons: AdCreativeCommon[];
              /** 创意组分组 */
              ad_creative_groups: AdCreativeGroup[];
              /** 广告主ids */
              advertiser_ids: number[];
              /** 文案组 */
              copywriters: Copywriter[];
              /** 定向模板组 */
              orientation_templates: AdTemplateOrientationTemplate[];
              /** 提交设置 */
              submit_setting: any;
              /** 广告投放目标 */
              target_delivery: any;
        }
        interface CreateAdReq {
              /** 使用的广告计划模版ID */
              ad_template_id: number;
              /** 从哪个广告计划复制来的 */
              copy_from_ad_id: number;
              /** 从哪个广告计划投放任务复制来的，影响之后的广告计划任务和子计划的默认状态 */
              copy_from_ad_report_task_uuid: string;
              detail: CreateAdDetail;
              /** 推送成功后修改成片状态 */
              status_id: number;
        }
        interface CreateAdResp {
              /** 广告计划创建成功后 需要上报给内网服务端 需要上传的素材信息 */
              qianchuan_file_upload_task_params: string;
              /** 上报内网服务端的接口地址 */
              qianchuan_file_upload_task_url: string;
        }
        interface CreateAdTemplateReq {
              /** 模板详情 */
              detail: any;
              /** 模板类型 */
              template_type: any;
        }
        interface CreateAdminCategory {
              /** 权限设置 */
              category_role_settings: Record<string, any>;
              /** 标签组关联设置 */
              category_tag_group_settings: Record<string, any>;
              /** 分类名称 */
              name: string;
              /** 排序序列号 */
              serial_number: number;
        }
        interface CreateAdminCategoryReq {
              /** 权限设置 */
              category_role_settings: Record<string, any>;
              /** 标签组关联设置 */
              category_tag_group_settings: Record<string, any>;
              /** 内容类型 */
              material_catalog: any;
              /** 内容分区 */
              material_type: any;
              /** 分类名称 */
              name: string;
              /** 上级分类ID */
              parent_id: number;
              /** 排序序列号 */
              serial_number: number;
        }
        interface CreateAdminCategoryWithChildrenReq {
              /** 权限设置 */
              category_role_settings: Record<string, any>;
              /** 标签组关联设置 */
              category_tag_group_settings: Record<string, any>;
              /** 子分类信息 */
              children: CreateAdminCategory[];
              /** 内容类型 */
              material_catalog: any;
              /** 内容分区 */
              material_type: any;
              /** 分类名称 */
              name: string;
              /** 排序序列号 */
              serial_number: number;
        }
        interface CreateAdminDepartmentReq {
              /** 内部传 inner 外部传 outer */
              catalog: string;
              director: string;
              name: string;
              parent_id: number;
        }
        interface CreateAdminMaterialStatusReq {
              /** 应用内容设置 */
              material_type_catalog_relations: any;
              name: string;
              serial_number: number;
              style: string;
        }
        interface CreateAdminRoleReq {
              name: string;
        }
        interface CreateAdminTeamReq {
              director: string;
              name: string;
              /** 添加到团队的用户ID 默认会添加当前用户 */
              user_ids: string[];
        }
        interface CreateAnnotationTagReq {
              material_type_catalogs: MaterialCatalogsKeyByTypeMap;
              name: string;
              serial_number: number;
        }
        interface CreateAutoDownLossReq {
              /** 亏损关停模式 */
              auto_down_loss_model: any;
              /** 预算 */
              budget: number;
              created_at: string;
              /** 名称动态 */
              dynamic_name: string;
              /** 结束时间 */
              end_time: string;
              id: number;
              /** 是否启用 */
              is_enable: boolean;
              /** 营销目标(如为空则代表全部) */
              marketing_goal: any;
              /** 广告类型(如为空则代表全部) */
              marketing_scene: any;
              /** 监控计划类型（仅当亏损关停模式为广告计划时生效） */
              monitoring_ad_type: any;
              /** 监控的投放账号ids */
              monitoring_advertiser_ids: number[];
              /** 绑定广告主的监控子类 */
              monitoring_advertiser_inners: MonitoringAdvertiserInner[];
              /** 监控频率 */
              monitoring_frequency: any;
              /** 监控方式 */
              monitoring_model: any;
              /** 名称 */
              name: string;
              /** 通知频率 */
              notification_frequency: any;
              /** roi */
              roi2_goal: number;
              /** 检测时间段 */
              scan_time_period: any;
              /** 检测时间 */
              schedule_time: string;
              /** 检测日期的类型 */
              schedule_type: any;
              /** 开始时间 */
              start_time: string;
              /** 触发方式 */
              trigger_mode: any;
              updated_at: string;
              /** 当前版本号（用于监控） */
              version: number;
        }
        interface CreateAutoHotItemReq {
              /** 爆单模式 */
              auto_hot_item_model: any;
              created_at: string;
              /** 名称动态 */
              dynamic_name: string;
              /** 结束时间 */
              end_time: string;
              id: number;
              /** 是否启用 */
              is_enable: boolean;
              /** 营销目标(如为空则代表全部) */
              marketing_goal: any;
              /** 广告类型(如为空则代表全部) */
              marketing_scene: any;
              /** 监控的广告计划类型 */
              monitoring_ad_type: any;
              /** 监控的投放账号id */
              monitoring_advertiser_ids: number[];
              /** 绑定广告主的监控子类 */
              monitoring_advertiser_inners: MonitoringAdvertiserInner[];
              /** 监控频率 */
              monitoring_frequency: any;
              /** 监控方式 */
              monitoring_model: any;
              /** 名称 */
              name: string;
              /** 通知频率 */
              notification_frequency: any;
              /** roi */
              roi2_goal: number;
              /** 检测时间段 */
              scan_time_period: any;
              /** 检测时间 */
              schedule_time: string;
              /** 检测日期的类型 */
              schedule_type: any;
              /** 开始时间 */
              start_time: string;
              /** 触发方式 */
              trigger_mode: any;
              updated_at: string;
              /** 绑定的监控版本号 */
              version: number;
        }
        interface CreateMyTagGroupReq {
              name: string;
              serial_number: number;
        }
        interface CreateMyTagGroupTagsReq {
              name: string;
              serial_number: number;
              tag_names: string[];
        }
        interface CreateMyTagReq {
              name: string;
              serial_number: number;
              tag_group_id: number;
        }
        interface CreateMyUsedFrequentlyTagGroupReq {
              /** 关联的分类 */
              category_id: number;
              /** 标签组名称 */
              name: string;
              /** 关联的标签 ID 数组 */
              tag_ids: number[];
        }
        interface CreateNotificationReportRuleReq {
              /** 数据维度 （个人/项目/部门/企业） */
              data_dimension: any;
              /** 是否开启飞书通知 */
              feishu_notification_enabled: boolean;
              /** 通知角色ID集合 */
              notification_role_ids: number[];
              /** 通知用户hashID集合 */
              notification_user_ids: string[];
              /** 报告类型 （小时报/日报/周报/月报） */
              report_type: any;
              /** 规则开关 */
              rule_enabled: boolean;
              /** 规则名称 */
              rule_name: string;
              /** 定时任务执行时间 */
              schedule_time: string;
              /** 定选定维度hashID集合（项目ID或部门ID，以JSON格式存储） */
              selected_dimension_ids: string[];
        }
        interface CreateOrientationTemplateReq {
              /** 模板详情 */
              detail: any;
              /** 模板类型 */
              template_type: any;
        }
        interface CreateProductReq {
              name: string;
              serial_number: number;
        }
        interface CreatePublicTagGroupReq {
              name: string;
              serial_number: number;
              /** {category_id:is_required} */
              tag_group_category_settings: Record<string, any>;
              /** 所有子标签信息 */
              tags: string[];
        }
        interface CreateScriptCatalogReq {
              name: string;
              serial_number: number;
        }
        interface CreateTomorrowPlanUniLiveReq {
              /** 是否重复规划 */
              is_repeat_schedule: boolean;
              /** 明日规划 */
              tomorrow_schedule: string;
              /** 全域推广直播间id */
              uni_live_id: number;
        }
        interface CreateUniLiveReq {
              /** 计划详情 */
              uni_live: any;
        }
        interface CreateUniLiveResp {
              /** 广告计划创建成功后 需要上报给内网服务端 需要上传的素材信息 */
              qianchuan_file_upload_task_params: string;
              /** 上报内网服务端的接口地址 */
              qianchuan_file_upload_task_url: string;
        }
        interface CreateUserInviteReq {
              audit_switch: number;
              catalog: string;
              department_id: number;
              department_switch: number;
              expires_at: number;
              /** 项目hashID */
              project_id: string;
              /** 项目角色hashID */
              project_role_id: string;
              role_id: number;
        }
        interface CreativeDataTableListSummary {
              /** 7日总下单ROI */
              all_order_create_roi_7days: number;
              /** 7日总成交订单数 */
              all_order_pay_count_7days: number;
              /** 7日总成交金额 */
              all_order_pay_gmv_7days: number;
              /** 7日总支付ROI */
              all_order_prepay_and_pay_roi_7days: number;
              /** 转化数(计费时间) */
              attribution_convert_cnt: number;
              /** 转化成本(计费时间) */
              attribution_convert_cost: number;
              /** 转化率(计费时间) */
              attribution_convert_rate: number;
              /** 深度转化数(计费时间) */
              attribution_deep_convert_cnt: number;
              /** 深度转化成本(计费时间) */
              attribution_deep_convert_cost: number;
              /** 深度转化率(计费时间) */
              attribution_deep_convert_rate: number;
              /** 点击次数 */
              click_cnt: number;
              /** 平均点击单价 */
              cpc_platform: number;
              /** 平均千次展现费用 */
              cpm_platform: number;
              /** 直接下单金额 */
              create_order_amount: number;
              /** 直接下单订单数 */
              create_order_count: number;
              /** 下单智能优惠券金额 */
              create_order_coupon_amount: number;
              /** 直接下单ROI */
              create_order_roi: number;
              /** 点击率 */
              ctr: number;
              /** 深度转化次数 */
              deep_convert_cnt: number;
              /** 深度转化成本 */
              deep_convert_cost: number;
              /** 深度转化率 */
              deep_convert_rate: number;
              /** 评论次数 */
              dy_comment: number;
              /** 新增粉丝数 */
              dy_follow: number;
              /** 点赞次数 */
              dy_like: number;
              /** 分享次数 */
              dy_share: number;
              /** 转化数 */
              ecp_convert_cnt: number;
              /** 转化率 */
              ecp_convert_rate: number;
              /** 转化成本 */
              ecp_cpa_platform: number;
              /** 7日间接下单订单数 */
              indirect_order_create_count_7days: number;
              /** 7日间接下单金额 */
              indirect_order_create_gmv_7days: number;
              /** 7日间接成交订单数 */
              indirect_order_pay_count_7days: number;
              /** 7日间接成交金额 */
              indirect_order_pay_gmv_7days: number;
              /** TODO 统计字段类型一个个确认 */
              indirect_order_prepay_count_7days: number;
              /** 7日间接预售金额 */
              indirect_order_prepay_gmv_7days: number;
              /** 7日未完结间接预售订单预估金额 */
              indirect_order_unfinished_estimate_gmv_7days: number;
              /** 直播间新加团人次 */
              live_fans_club_join_cnt: number;
              /** 直接成交客单价 */
              live_pay_order_cost_per_order: number;
              /** 直播间超过1分钟观看人次 */
              live_watch_one_minute_count: number;
              /** 直播间商品点击次数 */
              luban_live_click_product_cnt: number;
              /** 直播间评论次数 */
              luban_live_comment_cnt: number;
              /** 直播间观看人次 */
              luban_live_enter_cnt: number;
              /** 直播间音浪收入 */
              luban_live_gift_amount: number;
              /** 直播间打赏次数 */
              luban_live_gift_cnt: number;
              /** 直播间分享次数 */
              luban_live_share_cnt: number;
              /** 直播间查看购物车次数 */
              luban_live_slidecart_click_cnt: number;
              /** 直接成交金额 */
              pay_order_amount: number;
              /** 直接成交订单数 */
              pay_order_count: number;
              /** 成交智能优惠券金额 */
              pay_order_coupon_amount: number;
              /** 25%进度播放数 */
              play_25_feed_break: number;
              /** 50%进度播放数 */
              play_50_feed_break: number;
              /** 75%进度播放数 */
              play_75_feed_break: number;
              /** 3秒播放数 */
              play_duration_3s: number;
              /** 播放完成数 */
              play_over: number;
              /** 完播率 */
              play_over_rate: number;
              /** 直接支付ROI */
              prepay_and_pay_order_roi: number;
              /** 直接预售金额 */
              prepay_order_amount: number;
              /** 直接预售订单数 */
              prepay_order_count: number;
              /** 抖音号首单新客人数 */
              qianchuan_author_first_order_cnt: number;
              /** 抖音号首单新客转化成本 */
              qianchuan_author_first_order_convert_cost: number;
              /** 抖音号首单新客直接成交金额 */
              qianchuan_author_first_order_direct_pay_gmv: number;
              /** 抖音号首单新客直接支付ROI */
              qianchuan_author_first_order_direct_pay_order_roi: number;
              /** 抖音号首单新客30天累计成交金额 */
              qianchuan_author_first_order_ltv30: number;
              /** 抖音号首单新客订单占比 */
              qianchuan_author_first_order_rate: number;
              /** 抖音号首单新客30天累计支付ROI */
              qianchuan_author_first_order_roi30: number;
              /** 品牌首单新客数 */
              qianchuan_brand_first_order_cnt: number;
              /** 品牌首单新客转化成本 */
              qianchuan_brand_first_order_convert_cost: number;
              /** 品牌首单新客直接成交金额 */
              qianchuan_brand_first_order_direct_pay_gmv: number;
              /** 品牌首单新客直接支付ROI */
              qianchuan_brand_first_order_direct_pay_order_roi: number;
              /** 品牌首单新客30天累计成交金额 */
              qianchuan_brand_first_order_ltv30: number;
              /** 品牌首单新客订单占比 */
              qianchuan_brand_first_order_rate: number;
              /** 品牌首单新客30天累计支付ROI */
              qianchuan_brand_first_order_roi30: number;
              /** 带佣转化数 */
              qianchuan_commission_convert_cnt: number;
              /** 有效看播数 */
              qianchuan_effective_view_convert_count: number;
              /** 有效看播率 */
              qianchuan_effective_view_convert_rate: number;
              /** 有效看播成本 */
              qianchuan_effective_view_cpa_platform: number;
              /** 直接预估佣金收入 */
              qianchuan_estimated_commission: number;
              /** 直接佣金ROI */
              qianchuan_estimated_commission_roi: number;
              /** 店铺首单新客人数 */
              qianchuan_first_order_cnt: number;
              /** 店铺首单新客转化成本 */
              qianchuan_first_order_convert_cost: number;
              /** 店铺首单新客直接成交金额 */
              qianchuan_first_order_direct_pay_gmv: number;
              /** 店铺首单新客直接支付ROI */
              qianchuan_first_order_direct_pay_order_roi: number;
              /** 店铺首单新客30天累计成交金额 */
              qianchuan_first_order_ltv30: number;
              /** 店铺首单新客订单占比 */
              qianchuan_first_order_rate: number;
              /** 店铺首单新客30天累计支付ROI */
              qianchuan_first_order_roi30: number;
              /** 展示次数 */
              show_cnt: number;
              /** 消耗 */
              stat_cost: number;
              /** 播放数 */
              total_play: number;
              /** 未完结直接预售订单预估金额 */
              unfinished_estimate_order_gmv: number;
        }
        interface CreativeMaterialFileCheckItemResult {
              err_msg: string;
              image_material: CreativeMaterialFileCheckItemResultMaterial;
              image_mode: FlowImageMode;
              is_transcode: boolean;
              video_material: CreativeMaterialFileCheckItemResultMaterial;
        }
        interface CreativeMaterialFileCheckItemResultMaterial {
              material_id: string;
        }
        interface CreativeMaterialFileCheckMaterial {
              /** 视频类型：true 转码后视频、false 原视频 */
              is_transcode: boolean;
              /** 广告素材的 hashid */
              material_id: string;
        }
        interface CreativeMaterialFileCheckReq {
              /** 新的使用这个 */
              materials: CreativeMaterialFileCheckMaterial[];
        }
        interface CreativeMaterialFileCheckResp {
        }
        interface DeleteAdBasicInfoTemplateReq {
              /** 模板id */
              ad_basic_info_template_ids: number[];
        }
        interface DeleteAdTemplateReq {
              /** 模板id */
              ad_template_ids: number[];
        }
        interface DeleteAdminTeamReq {
              id: number;
        }
        interface DeleteAdvertiserReq {
              /** 广告账户id */
              advertiser_ids: number[];
              /** 平台 */
              platform_list: FlowPlatformType[];
        }
        interface DeleteAutoDownLossReq {
              /** 亏损关停ids */
              auto_down_loss_ids: number[];
        }
        interface DeleteAutoHotItemReq {
              /** ids */
              auto_hot_item_ids: number[];
        }
        interface DeleteAwemeShareReq {
              share_id: string;
        }
        interface DeleteMyUsedFrequentlyTagGroupReq {
              ids: number[];
        }
        interface DeleteNotificationReportRuleReq {
              /** 通知报告的id集合 */
              ids: number[];
        }
        interface DeleteOrientationTemplateReq {
              /** 模板id */
              orientation_template_ids: number[];
        }
        interface DeliverySetting {
              /** 固定出价/roi */
              bid_roi: number;
              /** 出价/Roi模式 */
              bid_roi_model: any;
              /** 出价/roi次数 */
              bid_roi_number: number;
              /** 出价/Roi类型 */
              bid_roi_type: any;
              /** 最终的出价列表 替代转化出价 */
              bid_rois: number[];
              /** 预算 */
              budget: number;
              /** 预算类型（创建后不可修改） */
              budget_mode: any;
              /** 投放结束时间，形式如：2017-01-01 */
              end_time: string;
              /** 阶梯出价/roi 的阶梯值 */
              ladder_bid_roi: number;
              /** 直播间投放时段选择方式 */
              live_schedule_type: any;
              /** 最大出价/roi */
              max_bid_roi: number;
              /** 最小出价/roi */
              min_bid_roi: number;
              /** 是否开启智能优惠券 */
              qcpx_mode: any;
              /** RoiGoal            float64 `json:"roi_goal,omitempty"`             //支付 ROI 目标 */
              schedule_fixed_range: number;
              /** 投放时段，仅直播带货场景需入参 */
              schedule_time: string;
              /** 投放场景（出价方式） */
              smart_bid_type: any;
              /** 投放起始时间，形式如：2017-01-01 */
              start_time: string;
              /** 短视频投放日期选择方式 */
              video_schedule_type: any;
        }
        interface DistrictTools {
              /** 中国大陆行政区域编码 */
              code: string;
              /** 港澳台、国外行政区域编码 */
              geoname_id: number;
              /** 行政区域层级 */
              level: any;
              /** 行政区域名称 */
              name: string;
              /** 子行政层级信息 */
              sub_districts: DistrictTools[];
        }
        interface DmpAudienceResp {
              result: QianchuanDmpAudiencesGetV10ResponseData;
        }
        interface DownloadControlReq {
              cooperation_source_download_copy_limit_day: string;
              movie_download_copy_limit_day: string;
              own_source_download_copy_limit_day: string;
              reference_source_download_copy_limit_day: string;
        }
        interface EnableAdBasicInfoTemplateReq {
              /** 模板id */
              ad_basic_info_template_ids: number[];
              /** 是否开启 */
              is_enable: boolean;
        }
        interface EnableAdTemplateReq {
              /** 模板id */
              ad_template_ids: number[];
              /** 是否开启 */
              is_enable: boolean;
        }
        interface EnableAdvertiserMonitorReq {
              /** 广告主id */
              advertiser_ids: number[];
              /** 是否开启 */
              is_enable: boolean;
        }
        interface EnableAdvertiserReq {
              /** 广告账户id */
              advertiser_ids: number[];
              /** 启动 */
              is_enable: boolean;
              /** 平台 */
              platform_list: FlowPlatformType[];
        }
        interface EnableAutoDownLossReq {
              /** 亏损关停ids */
              auto_down_loss_ids: number[];
              /** 是否开启 */
              is_enable: boolean;
        }
        interface EnableAutoHotItemReq {
              /** ids */
              auto_hot_item_ids: number[];
              /** 启用 */
              is_enable: boolean;
        }
        interface EnableNotificationReportRuleReq {
              /** 通知报告的id集合 */
              ids: number[];
              /** 是否开启 */
              rule_enabled: boolean;
        }
        interface EnableOrientationTemplateReq {
              /** 是否开启 */
              is_enable: boolean;
              /** 模板id */
              orientation_template_ids: number[];
        }
        interface EstimateAudienceReq {
              /** 广告账号ids */
              advertiser_ids: number[];
              /** 抖音id */
              aweme_id: number;
              /** 转化目标 */
              external_action: any;
              /** 营销目标 */
              marketing_goal: any;
              orientation_template: OrientationTemplateDetail;
              /** 抖音商品id */
              producer_id: number;
        }
        interface EstimateAudienceResp {
              result: QianchuanToolsEstimateAudienceV10ResponseData;
        }
        interface ExportMovieRelatedAdMaterialJuAdStatReq {
              id: string;
              to: number;
        }
        interface ExportMovieRelatedAdMaterialKsNiuStatReq {
              id: string;
              to: number;
        }
        interface ExportMovieRelatedAdMaterialTxAdStatReq {
              id: string;
              to: number;
        }
        interface ExportUniLiveListReq {
              /** 结束时间 */
              end_time: string;
              /** 是否导出全部 */
              is_all_export: boolean;
              /** 开始时间 */
              start_time: string;
              /** 全域推广直播间id */
              uni_live_ids: number[];
        }
        interface FeishuCompanyAuditReq {
              advertisement_user_limit: number;
              audit_reason: string;
              audit_status: string;
              /** 组织ID */
              company_id: number;
              inner_limit: number;
              /** oss空间配置大小 */
              oss_used_space_config_size: string;
              /** oss空间配置流量 */
              oss_used_space_config_traffic: string;
              outer_limit: number;
              price_plan_name: string;
              record_id: string;
              size_limit: string;
              table_id: string;
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
              system: FilterTag[];
        }
        interface FlowAdAccount {
              /** 负责人 */
              admin_user: any;
              /** 广告主id */
              advertiser_id: number;
              /** 广告主平台id */
              advertiser_platform_id: string;
              /** 千川账户所属代理商账户id */
              agent_id: number;
              /** 千川账户所属代理商的名称 */
              agent_name: string;
              created_at: string;
              id: number;
              /** 是否收藏 */
              is_collect: boolean;
              /** 是否开启账户 */
              is_enable: boolean;
              /** 是否开启出价保护 */
              is_protect: boolean;
              name: string;
              /** 平台 */
              platform: number;
              /** 平台名称 */
              platform_name: string;
              /** 最近更新时间 */
              refresh_time: string;
              /** 账户状态 */
              status: number;
              /** 账户状态名称 */
              status_name: string;
              /** 负责的团队id */
              team_id: number;
              /** 团队名称 */
              team_name: string;
              /** 成员 */
              users: BasicUserInfo[];
        }
        interface FlowAdAccountChooseListInner {
              advertiser_id: number;
              advertiser_platform_id: string;
              is_collect: boolean;
              name: string;
              /** 状态 【0正常，1无权限请重新授权，2授权过期】 */
              status: number;
        }
        interface FlowAdAccountChooseListResp {
              list: FlowAdAccountChooseListInner[];
        }
        interface FlowProtect {
              advertiser_id: number;
              /** 直播间商品点击 */
              click_product_action: number;
              /** 直播间评论 */
              comment_live: number;
              company_id: number;
              created_at: string;
              /** 直播间粉丝提升 */
              follow_action: number;
              id: number;
              name: string;
              /** 支付ROI最小支付 */
              pay_roi: number;
              /** 粉丝提升 */
              qc_follow_action: number;
              /** 点赞评论 */
              qc_must_buy: number;
              /** 商品购买 */
              shopping: number;
              /** 直播间下单 */
              successorder_action: number;
              /** 直播间成交 */
              successorder_pay: number;
              /** 直播间结算 */
              successorder_settle: number;
              /** 进入直播间 */
              to_live: number;
              updated_at: string;
        }
        interface GJsonCheckErrSub {
              /** 错误类型 */
              g_json_check_err_type: any;
              /** 消息体 */
              msg: string;
        }
        enum GJsonCheckErrType {
              ERROR = "error",
              PROTECT = "protect",
              WARN = "warn",
              NORMAL = "normal",
        }
        interface GetAdDataTableListRecord {
              /** 直接订单结算率(14天) */
              ad_all_order_count_settle_rate_14d: number;
              /** 直接订单结算率(7天) */
              ad_all_order_count_settle_rate_7d: number;
              /** 直接成交金额结算率(14天) */
              ad_all_order_gmv_settle_rate_14d: number;
              /** 直接成交金额结算率(7天) */
              ad_all_order_gmv_settle_rate_7d: number;
              /** 直接结算金额(14天) */
              ad_all_order_settle_amount_14d: number;
              /** 直接结算金额(7天) */
              ad_all_order_settle_amount_7d: number;
              /** 直接结算成本(14天) */
              ad_all_order_settle_cost_14d: number;
              /** 直接结算成本(7天) */
              ad_all_order_settle_cost_7d: number;
              /** 直接结算订单数(14天) */
              ad_all_order_settle_count_14d: number;
              /** 直接结算订单数(7天) */
              ad_all_order_settle_count_7d: number;
              /** 直接结算ROI(14天) */
              ad_all_order_settle_roi_14d: number;
              /** 直接结算ROI(7天) */
              ad_all_order_settle_roi_7d: number;
              ad_audience_package_template_id: number;
              ad_basic_info_template_id: number;
              ad_bid: number;
              /** 广告出价/roi 出价 roi 两个字段合并一起展示，因为这两个字段只可能同时存在一个 */
              ad_bid_roi: number;
              /** bid 出价， roi ROI */
              ad_bid_roi_type: any;
              /** todo 投放设置 DeliverySetting 单独表保存 以及关联关系 */
              ad_budget: number;
              ad_create_time: number;
              ad_id: number;
              ad_modify_time: number;
              ad_name: string;
              /** 直接退款率(14天) */
              ad_order_gmv_refund_rate_14d: number;
              /** 直接退款率(7天) */
              ad_order_gmv_refund_rate_7d: number;
              /** 直接订单数退货率(14天) */
              ad_order_refund_rate_14d: number;
              /** 直接订单数退货率(7天) */
              ad_order_refund_rate_7d: number;
              ad_status: FlowStatus;
              ad_template_id: number;
              advertiser_id: number;
              advertiser_is_valid: boolean;
              advertiser_name: string;
              agent_name: string;
              agent_user_id: number;
              /** 7日总下单ROI */
              all_order_create_roi_7days: number;
              /** 7日总成交订单 */
              all_order_pay_count_7days: number;
              /** 7日总成交金额 */
              all_order_pay_gmv_7days: number;
              /** 7日总支付ROI */
              all_order_pay_roi_7days: number;
              /** 直接退款金额(14天) */
              all_order_refund_amount_14d: number;
              /** 直接退款金额(7天) */
              all_order_refund_amount_7d: number;
              /** 直接退款订单数(14天) */
              all_order_refund_count_14d: number;
              /** 直接退款订单数(7天) */
              all_order_refund_count_7d: number;
              /** 转化数（计费时间） */
              attribution_convert_cnt: number;
              /** 转化成本（计费时间） */
              attribution_convert_cost: number;
              /** 转化率（计费时间） */
              attribution_convert_rate: number;
              /** 深度转化次数（计费时间） */
              attribution_deep_convert_cnt: number;
              /** 深度转化成本（计费时间） */
              attribution_deep_convert_cost: number;
              /** 深度转化率（计费时间） */
              attribution_deep_convert_rate: number;
              /** aweme */
              aweme_id: number;
              awemes: BasicFlowSelectInfo;
              budget_mode: FlowBudgetMode;
              campaign_budget: number;
              campaign_id: number;
              campaign_name: string;
              campaign_scene: FlowCampaignScene;
              campaign_status: string;
              /** 点击次数 */
              click_cnt: number;
              company_id: number;
              /** 平均点击单价 */
              cpc_platform: number;
              /** 平均千次展示费用 */
              cpm_platform: number;
              /** 直接下单金额 */
              create_order_amount: number;
              /** 直接下单订单数 */
              create_order_count: number;
              /** 下单智能优惠券金额 */
              create_order_coupon_amount: number;
              /** 直接下单roi */
              create_order_roi: number;
              create_time: number;
              /** 0 本地创建， 1 同步自千川 */
              create_type: number;
              created_at: string;
              /** 点击率 */
              ctr: number;
              deep_bid_type: FlowDeepBidType;
              /** 深度转化次数 */
              deep_convert_cnt: number;
              /** 深度转化成本 */
              deep_convert_cost: number;
              /** 深度转化率 */
              deep_convert_rate: number;
              deep_external_action: FlowDeepExternalAction;
              delivery_date: number;
              /** AdvertiserID   int64          `json:"advertiser_id"` */
              duty_user_name: string;
              /** 评论次数 */
              dy_comment: number;
              /** 新增粉丝数 */
              dy_follow: number;
              /** 点赞次数 */
              dy_like: number;
              /** 分享次数 */
              dy_share: number;
              /** 转化数 */
              ecp_convert_cnt: number;
              /** 转化率 */
              ecp_convert_rate: number;
              /** 转化成本 */
              ecp_cpa_platform: number;
              /** 投放结束时间 */
              end_time: number;
              /** AdBudget           float64                         `json:"ad_budget"`
AdBid              float64                         `json:"ad_bid"`
MarketingGoal      constant.FlowMarketingGoal      `json:"marketing_goal"` */
              externalAction: any;
              external_action: FlowExternalAction;
              having_cost: string;
              id: number;
              /** 间接下单订单数 */
              indirect_order_create_count_7days: number;
              /** 间接下单金额 */
              indirect_order_create_gmv_7days: number;
              /** 间接成交订单数 */
              indirect_order_pay_count_7days: number;
              /** 间接成交金额 */
              indirect_order_pay_gmv_7days: number;
              /** 间接预售订单数 */
              indirect_order_prepay_count_7days: number;
              /** 间接预售金额 */
              indirect_order_prepay_gmv_7days: number;
              /** 未完结间接预售订单预估金额 */
              indirect_order_unfinished_estimate_gmv_7days: number;
              /** 0 否 1 是 */
              is_low_quality: number;
              lab_ad_type: FlowLabAdType;
              /** 直播间新加团人次 */
              live_fans_club_join_cnt: number;
              /** 成交客单价 */
              live_pay_order_cost_per_order: number;
              /** 直播间超过1分钟观看人次 */
              live_watch_one_minute_count: number;
              /** 直播间商品点击次数 */
              luban_live_click_product_cnt: number;
              /** 直播间评论次数 */
              luban_live_comment_cnt: number;
              /** 直播间观看人次 */
              luban_live_enter_cnt: number;
              /** 直播间音浪收入 */
              luban_live_gift_amount: number;
              /** 直播间打赏次数 */
              luban_live_gift_cnt: number;
              /** 直播间分享次数 */
              luban_live_share_cnt: number;
              /** 直播间查看购物车次数 */
              luban_live_slidecart_click_cnt: number;
              marketing_goal: FlowMarketingGoal;
              marketing_goal_name: FlowMarketingGoal;
              marketing_scene: FlowMarketingScene;
              opt_status: string;
              /** 直接成交金额 */
              pay_order_amount: number;
              /** 直接成交客单价 */
              pay_order_cost_per_order: number;
              /** 直接成交订单数 */
              pay_order_count: number;
              /** 成交智能优惠券金额 */
              pay_order_coupon_amount: number;
              /** 25%进度播放数 */
              play_25_feed_break: number;
              /** 50%进度播放数 */
              play_50_feed_break: number;
              /** 75%进度播放数 */
              play_75_feed_break: number;
              /** 3s播放数 */
              play_duration_3s: number;
              /** 播放完成次数 */
              play_over: number;
              /** 完播率 */
              play_over_rate: number;
              /** 3s 完播率 */
              play_over_rate_3s: number;
              /** 直接支付roi */
              prepay_and_pay_order_roi: number;
              /** 直接预售金额 */
              prepay_order_amount: number;
              /** 直接预售订单数 */
              prepay_order_count: number;
              /** product id */
              product_id: number;
              /** DeepExternalAction constant.FlowDeepExternalAction `json:"deep_external_action"`
DeepBidType        constant.FlowDeepBidType        `json:"deep_bid_type"`
BudgetMode         constant.FlowBudgetMode         `json:"budget_mode"` */
              products: any;
              /** 抖音号首单新客数 */
              qianchuan_author_first_order_cnt: number;
              /** 抖音号首单新客转化成本 */
              qianchuan_author_first_order_convert_cost: number;
              /** 抖音号首单新客直接成交金额 */
              qianchuan_author_first_order_direct_pay_gmv: number;
              /** 抖音号首单新客直接支付roi */
              qianchuan_author_first_order_direct_pay_order_roi: number;
              /** 抖音号首单新客30天累计成交金额 */
              qianchuan_author_first_order_ltv30: number;
              /** 抖音号首单新客订单占比 */
              qianchuan_author_first_order_rate: number;
              /** 抖音号首单新客30天累计支付roi */
              qianchuan_author_first_order_roi30: number;
              /** 品牌首单新客数 */
              qianchuan_brand_first_order_cnt: number;
              /** 品牌首单新客转化成本 */
              qianchuan_brand_first_order_convert_cost: number;
              /** 品牌首单新客直接成交金额 */
              qianchuan_brand_first_order_direct_pay_gmv: number;
              /** 品牌首单新客直接支付roi */
              qianchuan_brand_first_order_direct_pay_order_roi: number;
              /** 品牌首单新客30天累计成交金额 */
              qianchuan_brand_first_order_ltv30: number;
              /** 品牌首单新客订单占比 */
              qianchuan_brand_first_order_rate: number;
              /** 品牌首单新客30天累计支付roi */
              qianchuan_brand_first_order_roi30: number;
              /** 店铺首单新客人数 */
              qianchuan_first_order_cnt: number;
              /** 店铺首单新客转化成本 */
              qianchuan_first_order_convert_cost: number;
              /** 店铺首单新客直接成交金额 */
              qianchuan_first_order_direct_pay_gmv: number;
              /** 店铺首单新客直接支付ROI */
              qianchuan_first_order_direct_pay_order_roi: number;
              /** 店铺首单新客30天累计成交金额 */
              qianchuan_first_order_ltv30: number;
              /** 店铺首单新客订单占比 */
              qianchuan_first_order_rate: number;
              /** 店铺首单新客30天累计支付ROI */
              qianchuan_first_order_roi30: number;
              quota_info: Record<string, any>;
              roi_goal: number;
              /** 展示次数 */
              show_cnt: number;
              smart_bid_type: FlowSmartBidType;
              /** 投放开始时间 */
              start_time: number;
              /** TODO 统计字段类型一个个确认 */
              stat_cost: number;
              /** ENABLE DISABLE DELETE REVIVE */
              status: any;
              /** 播放数 */
              total_play: number;
              /** 未完结直接预售订单预估金额 */
              unfinished_estimate_order_gmv: number;
              updated_at: string;
        }
        interface GetAdDataTableListReq {
              /** 计划创建筛选开始时间 */
              ad_create_time_begin: string;
              /** 计划创建筛选结束时间 */
              ad_create_time_end: string;
              /** 筛选指定的广告计划 ids */
              ad_ids: number[];
              /** 筛选广告主账户ID 多选数组 */
              advertiser_ids: number[];
              /** 代理商ID 如果是广告组 这个筛选字段不会生效 */
              agent_user_ids: number[];
              deep_bid_type: FlowDeepBidType;
              deep_external_action: FlowDeepExternalAction;
              /** 责任人/协作人ID 多选字符串数组 如果是广告组 这个筛选字段不会生效 */
              duty_user_ids: string[];
              /** 必传 默认是今天 */
              end_time: string;
              /** 优化目标 */
              external_action: any;
              /** 消耗情况 ALL 全部，有消耗 YES，没有消耗 NO */
              having_cost: any;
              /** 用于指定条数数据导出，如果选择了多条，就传对应的 id 数组 */
              ids: number[];
              /** 是否是低效计划 0否 1是 */
              is_low_quality: number;
              /** 推广方式 */
              lab_ad_type: any;
              limit: number;
              /** 投放目标 */
              marketing_goal: any;
              /** 广告类型 */
              marketing_scene: any;
              offset: number;
              order_field: string;
              /** 1 升序 2 降序 */
              order_type: number;
              /** 搜索广告组、广告计划、广告素材名称 */
              search: string;
              /** 投放方式 */
              smart_bid_type: any;
              /** 必传 默认是今天 */
              start_time: string;
              /** 广告计划状态 */
              status: string;
              /** 团队ID 如果是广告组 这个筛选字段不会生效 */
              team_ids: number[];
        }
        interface GetAdDataTableListResp {
              records: GetAdDataTableListRecord[];
              summary: AdDataTableListSummary;
              total: number;
        }
        interface GetAdReportTaskDetailListReq {
              /** 投放任务的id */
              ad_report_task_uuid: string;
              /** 广告账号筛选 */
              advertiser_ids: number[];
              limit: number;
              offset: number;
              order_field: string;
              /** 1 升序 2 降序 */
              order_type: number;
              /** 关键词搜索 */
              search: string;
              /** 投放任务筛选状态 */
              status: any;
        }
        interface GetAdReportTaskListReq {
              /** 投放任务的结束时间 */
              end_time: number;
              /** 是否个人 */
              is_personal: boolean;
              limit: number;
              offset: number;
              order_field: string;
              /** 1 升序 2 降序 */
              order_type: number;
              /** 关键词搜索 */
              search: string;
              /** 投放任务的开始时间 */
              start_time: number;
              /** 投放任务的状态 */
              status: any;
        }
        interface GetAdvertiserDataTableListReq {
              /** 筛选广告主账户ID 多选数组 */
              advertiser_ids: number[];
              /** 代理商ID 如果是广告组 这个筛选字段不会生效 */
              agent_user_ids: number[];
              /** 责任人/协作人ID 多选字符串数组 如果是广告组 这个筛选字段不会生效 */
              duty_user_ids: string[];
              /** 必传 默认是今天 */
              end_time: string;
              /** 用于指定条数数据导出，如果选择了多条，就传对应的 id 数组 */
              ids: number[];
              limit: number;
              offset: number;
              order_field: string;
              /** 1 升序 2 降序 */
              order_type: number;
              /** 搜索广告组、广告计划、广告素材名称 */
              search: string;
              /** 必传 默认是今天 */
              start_time: string;
              /** 团队ID 如果是广告组 这个筛选字段不会生效 */
              team_ids: number[];
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
              /** 商品列表 */
              producers: BasicFlowSelectInfo[];
        }
        interface GetAllBrandResp {
              brands: BasicFlowSelectInfo[];
        }
        interface GetAllMarketingAwemeAuthorizedResp {
              awemes: Aweme[];
        }
        interface GetAllShopResp {
              /** 商品列表 */
              shops: BasicFlowSelectInfo[];
        }
        interface GetAllUniAwemeAuthorizedResp {
              awemes: UniAweme[];
        }
        interface GetAuthQueryResp {
              advertisers: FlowAdAccount[];
        }
        interface GetAuthUrlReq {
              /** 是否是代理（磁力金牛专用） */
              is_agent: boolean;
              platform: FlowPlatformType;
              /** 如果teamID为0的话则代表要续期权限 */
              team_id: number;
              /** 回调之后调用的地址 */
              url: string;
        }
        interface GetAwemeVideoInner {
              /** 抖音短视频 ID */
              aweme_item_id: number;
              /** 评论数 */
              comment_cnt: number;
              /** 视频时长 */
              duration: number;
              /** 视频高度 */
              height: number;
              /** 是否AI生成 */
              is_ai_create: boolean;
              /** 是否推荐 0不推荐 1推荐 */
              is_recommend: any;
              /** 点赞数 */
              like_cnt: number;
              /** 素材id 只有当视频被用来广告投放，即进入素材库之后才会返回素材ID */
              material_id: number;
              /** 分享数 */
              share_cnt: number;
              /** 抖音中的视频标题 */
              title: string;
              /** 视频地址，链接1小时过期 */
              url: string;
              /** 视频封面图片url */
              video_cover_url: string;
              /** 视频 ID */
              video_id: string;
              /** 观看数 */
              view_cnt: number;
              /** 视频宽度 */
              width: number;
        }
        interface GetAwemeVideoPageInfo {
              /** 过滤后返回的视频数量 */
              count: number;
              /** 下一次分页拉取的游标值 */
              cursor: number;
              /** 是否有下一页 */
              has_more: any;
        }
        interface GetAwemeVideoResp {
              /** 分页详情 */
              page_info: any;
              /** 列表 */
              video_list: GetAwemeVideoInner[];
        }
        interface GetBlockMaterialUniPromotionInner {
              /** 抖音短视频 ID */
              aweme_item_id: number;
              /** 视频时长 */
              duration: number;
              /** 视频高度 */
              height: number;
              /** 搬运素材 */
              is_carry_material: boolean;
              /** 首发素材 */
              is_first_publish_material: boolean;
              /** 优质素材 */
              is_high_quality_material: boolean;
              /** 低效素材 */
              is_inefficient_material: boolean;
              /** 低质素材 */
              is_low_quality_material: boolean;
              /** 同质化素材 */
              is_similar_material: boolean;
              /** 商品id */
              product_id: number;
              /** 抖音中的视频标题 */
              title: string;
              /** 视频地址 */
              url: string;
              /** 视频封面图片url */
              video_cover_url: string;
              /** 视频 ID */
              video_id: string;
              /** 视频宽度 */
              width: number;
        }
        interface GetBlockMaterialUniPromotionPageInfo {
              /** 下拉展示数量 */
              count: number;
              /** 页码游标值 */
              cursor: number;
              /** 是否有下一页 */
              has_more: boolean;
        }
        interface GetBlockMaterialUniPromotionReq {
              /** 广告账户id */
              advertiser_id: number;
              /** 抖音号id */
              aweme_id: number;
              /** 分页游标 */
              cursor: number;
              /** 过滤器 */
              filtering: any;
              /** 营销目标 */
              marketing_goal: any;
              /** 排序字段 */
              order_field: string;
              /** 商品id */
              product_id: number[];
        }
        interface GetBlockMaterialUniPromotionReqFiltering {
              /** 素材分析类型 */
              analysis_type: string[];
              /** 抖音主页视频url */
              aweme_item_url: string;
        }
        interface GetBlockMaterialUniPromotionResp {
              /** 分页信息 */
              page_info: any;
              /** 视频列表 */
              video_list: GetBlockMaterialUniPromotionInner[];
        }
        interface GetCampaignDataTableListRecord {
              /** 直接订单结算率(14天) */
              ad_all_order_count_settle_rate_14d: number;
              /** 直接订单结算率(7天) */
              ad_all_order_count_settle_rate_7d: number;
              /** 直接成交金额结算率(14天) */
              ad_all_order_gmv_settle_rate_14d: number;
              /** 直接成交金额结算率(7天) */
              ad_all_order_gmv_settle_rate_7d: number;
              /** 直接结算金额(14天) */
              ad_all_order_settle_amount_14d: number;
              /** 直接结算金额(7天) */
              ad_all_order_settle_amount_7d: number;
              /** 直接结算成本(14天) */
              ad_all_order_settle_cost_14d: number;
              /** 直接结算成本(7天) */
              ad_all_order_settle_cost_7d: number;
              /** 直接结算订单数(14天) */
              ad_all_order_settle_count_14d: number;
              /** 直接结算订单数(7天) */
              ad_all_order_settle_count_7d: number;
              /** 直接结算ROI(14天) */
              ad_all_order_settle_roi_14d: number;
              /** 直接结算ROI(7天) */
              ad_all_order_settle_roi_7d: number;
              /** 直接退款率(14天) */
              ad_order_gmv_refund_rate_14d: number;
              /** 直接退款率(7天) */
              ad_order_gmv_refund_rate_7d: number;
              /** 直接订单数退货率(14天) */
              ad_order_refund_rate_14d: number;
              /** 直接订单数退货率(7天) */
              ad_order_refund_rate_7d: number;
              advertiser_id: number;
              advertiser_is_valid: boolean;
              advertiser_name: string;
              agent_name: string;
              agent_user_id: number;
              /** 7日总下单ROI */
              all_order_create_roi_7days: number;
              /** 7日总成交订单 */
              all_order_pay_count_7days: number;
              /** 7日总成交金额 */
              all_order_pay_gmv_7days: number;
              /** 7日总支付ROI */
              all_order_pay_roi_7days: number;
              /** 直接退款金额(14天) */
              all_order_refund_amount_14d: number;
              /** 直接退款金额(7天) */
              all_order_refund_amount_7d: number;
              /** 直接退款订单数(14天) */
              all_order_refund_count_14d: number;
              /** 直接退款订单数(7天) */
              all_order_refund_count_7d: number;
              /** 转化数（计费时间） */
              attribution_convert_cnt: number;
              /** 转化成本（计费时间） */
              attribution_convert_cost: number;
              /** 转化率（计费时间） */
              attribution_convert_rate: number;
              /** 深度转化次数（计费时间） */
              attribution_deep_convert_cnt: number;
              /** 深度转化成本（计费时间） */
              attribution_deep_convert_cost: number;
              /** 深度转化率（计费时间） */
              attribution_deep_convert_rate: number;
              budget: number;
              budget_mode: FlowBudgetMode;
              campaign_budget: number;
              campaign_id: number;
              campaign_name: string;
              campaign_status: string;
              /** 点击次数 */
              click_cnt: number;
              /** 平均点击单价 */
              cpc_platform: number;
              /** 平均千次展示费用 */
              cpm_platform: number;
              /** 直接下单金额 */
              create_order_amount: number;
              /** 直接下单订单数 */
              create_order_count: number;
              /** 下单智能优惠券金额 */
              create_order_coupon_amount: number;
              /** 直接下单roi */
              create_order_roi: number;
              create_time: number;
              created_at: string;
              /** 点击率 */
              ctr: number;
              /** 深度转化次数 */
              deep_convert_cnt: number;
              /** 深度转化成本 */
              deep_convert_cost: number;
              /** 深度转化率 */
              deep_convert_rate: number;
              /** AdvertiserID   int64          `json:"advertiser_id"` */
              duty_user_name: string;
              /** 评论次数 */
              dy_comment: number;
              /** 新增粉丝数 */
              dy_follow: number;
              /** 点赞次数 */
              dy_like: number;
              /** 分享次数 */
              dy_share: number;
              /** 转化数 */
              ecp_convert_cnt: number;
              /** 转化率 */
              ecp_convert_rate: number;
              /** 转化成本 */
              ecp_cpa_platform: number;
              id: number;
              /** 间接下单订单数 */
              indirect_order_create_count_7days: number;
              /** 间接下单金额 */
              indirect_order_create_gmv_7days: number;
              /** 间接成交订单数 */
              indirect_order_pay_count_7days: number;
              /** 间接成交金额 */
              indirect_order_pay_gmv_7days: number;
              /** 间接预售订单数 */
              indirect_order_prepay_count_7days: number;
              /** 间接预售金额 */
              indirect_order_prepay_gmv_7days: number;
              /** 未完结间接预售订单预估金额 */
              indirect_order_unfinished_estimate_gmv_7days: number;
              /** 直播间新加团人次 */
              live_fans_club_join_cnt: number;
              /** 成交客单价 */
              live_pay_order_cost_per_order: number;
              /** 直播间超过1分钟观看人次 */
              live_watch_one_minute_count: number;
              /** 直播间商品点击次数 */
              luban_live_click_product_cnt: number;
              /** 直播间评论次数 */
              luban_live_comment_cnt: number;
              /** 直播间观看人次 */
              luban_live_enter_cnt: number;
              /** 直播间音浪收入 */
              luban_live_gift_amount: number;
              /** 直播间打赏次数 */
              luban_live_gift_cnt: number;
              /** 直播间分享次数 */
              luban_live_share_cnt: number;
              /** 直播间查看购物车次数 */
              luban_live_slidecart_click_cnt: number;
              marketing_goal: FlowMarketingGoal;
              marketing_goal_name: FlowMarketingGoal;
              marketing_scene: FlowMarketingScene;
              /** 直接成交金额 */
              pay_order_amount: number;
              /** 直接成交客单价 */
              pay_order_cost_per_order: number;
              /** 直接成交订单数 */
              pay_order_count: number;
              /** 成交智能优惠券金额 */
              pay_order_coupon_amount: number;
              /** 25%进度播放数 */
              play_25_feed_break: number;
              /** 50%进度播放数 */
              play_50_feed_break: number;
              /** 75%进度播放数 */
              play_75_feed_break: number;
              /** 3s播放数 */
              play_duration_3s: number;
              /** 播放完成次数 */
              play_over: number;
              /** 完播率 */
              play_over_rate: number;
              /** 3s 完播率 */
              play_over_rate_3s: number;
              /** 直接支付roi */
              prepay_and_pay_order_roi: number;
              /** 直接预售金额 */
              prepay_order_amount: number;
              /** 直接预售订单数 */
              prepay_order_count: number;
              /** 抖音号首单新客数 */
              qianchuan_author_first_order_cnt: number;
              /** 抖音号首单新客转化成本 */
              qianchuan_author_first_order_convert_cost: number;
              /** 抖音号首单新客直接成交金额 */
              qianchuan_author_first_order_direct_pay_gmv: number;
              /** 抖音号首单新客直接支付roi */
              qianchuan_author_first_order_direct_pay_order_roi: number;
              /** 抖音号首单新客30天累计成交金额 */
              qianchuan_author_first_order_ltv30: number;
              /** 抖音号首单新客订单占比 */
              qianchuan_author_first_order_rate: number;
              /** 抖音号首单新客30天累计支付roi */
              qianchuan_author_first_order_roi30: number;
              /** 品牌首单新客数 */
              qianchuan_brand_first_order_cnt: number;
              /** 品牌首单新客转化成本 */
              qianchuan_brand_first_order_convert_cost: number;
              /** 品牌首单新客直接成交金额 */
              qianchuan_brand_first_order_direct_pay_gmv: number;
              /** 品牌首单新客直接支付roi */
              qianchuan_brand_first_order_direct_pay_order_roi: number;
              /** 品牌首单新客30天累计成交金额 */
              qianchuan_brand_first_order_ltv30: number;
              /** 品牌首单新客订单占比 */
              qianchuan_brand_first_order_rate: number;
              /** 品牌首单新客30天累计支付roi */
              qianchuan_brand_first_order_roi30: number;
              /** 店铺首单新客人数 */
              qianchuan_first_order_cnt: number;
              /** 店铺首单新客转化成本 */
              qianchuan_first_order_convert_cost: number;
              /** 店铺首单新客直接成交金额 */
              qianchuan_first_order_direct_pay_gmv: number;
              /** 店铺首单新客直接支付ROI */
              qianchuan_first_order_direct_pay_order_roi: number;
              /** 店铺首单新客30天累计成交金额 */
              qianchuan_first_order_ltv30: number;
              /** 店铺首单新客订单占比 */
              qianchuan_first_order_rate: number;
              /** 店铺首单新客30天累计支付ROI */
              qianchuan_first_order_roi30: number;
              quota_info: Record<string, any>;
              /** 展示次数 */
              show_cnt: number;
              /** TODO 统计字段类型一个个确认 */
              stat_cost: number;
              /** 广告组的状态 ENABLE DISABLE DELETE */
              status: string;
              /** 播放数 */
              total_play: number;
              /** 未完结直接预售订单预估金额 */
              unfinished_estimate_order_gmv: number;
              updated_at: string;
        }
        interface GetCampaignDataTableListReq {
              /** 筛选广告主账户ID 多选数组 */
              advertiser_ids: number[];
              /** 代理商ID 如果是广告组 这个筛选字段不会生效 */
              agent_user_ids: number[];
              /** 责任人/协作人ID 多选字符串数组 如果是广告组 这个筛选字段不会生效 */
              duty_user_ids: string[];
              /** 必传 默认是今天 */
              end_time: string;
              /** 用于指定条数数据导出，如果选择了多条，就传对应的 id 数组 */
              ids: number[];
              limit: number;
              /** 营销目标 */
              marketing_goal: string;
              /** 广告类型 */
              marketing_scene: string;
              offset: number;
              order_field: string;
              /** 1 升序 2 降序 */
              order_type: number;
              /** 搜索广告组、广告计划、广告素材名称 */
              search: string;
              /** 必传 默认是今天 */
              start_time: string;
              /** 广告组状态 */
              status: string;
              /** 团队ID 如果是广告组 这个筛选字段不会生效 */
              team_ids: number[];
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
              /** 广告主ids */
              advertiser_ids: number[];
              /** 语言 */
              language: any;
        }
        interface GetCountryInfoToolsResp {
              /** 行政区域信息 */
              districts: GetCountryInfoToolsDistrict[];
        }
        interface GetCreativeDataTableListRecord {
              /** 广告计划ID */
              ad_id: number;
              advertiser_id: number;
              /** 7日总下单ROI */
              all_order_create_roi_7days: number;
              /** 7日总成交订单数 */
              all_order_pay_count_7days: number;
              /** 7日总成交金额 */
              all_order_pay_gmv_7days: number;
              /** 7日总支付ROI */
              all_order_prepay_and_pay_roi_7days: number;
              /** 转化数(计费时间) */
              attribution_convert_cnt: number;
              /** 转化成本(计费时间) */
              attribution_convert_cost: number;
              /** 转化率(计费时间) */
              attribution_convert_rate: number;
              /** 深度转化数(计费时间) */
              attribution_deep_convert_cnt: number;
              /** 深度转化成本(计费时间) */
              attribution_deep_convert_cost: number;
              /** 深度转化率(计费时间) */
              attribution_deep_convert_rate: number;
              carousel_material: string;
              /** 点击次数 */
              click_cnt: number;
              company_id: number;
              /** 平均点击单价 */
              cpc_platform: number;
              /** 平均千次展现费用 */
              cpm_platform: number;
              /** 直接下单金额 */
              create_order_amount: number;
              /** 直接下单订单数 */
              create_order_count: number;
              /** 下单智能优惠券金额 */
              create_order_coupon_amount: number;
              /** 直接下单ROI */
              create_order_roi: number;
              created_at: string;
              creative_create_time: number;
              creative_id: number;
              creative_modify_time: number;
              /** 点击率 */
              ctr: number;
              /** 深度转化次数 */
              deep_convert_cnt: number;
              /** 深度转化成本 */
              deep_convert_cost: number;
              /** 深度转化率 */
              deep_convert_rate: number;
              /** 评论次数 */
              dy_comment: number;
              /** 新增粉丝数 */
              dy_follow: number;
              /** 点赞次数 */
              dy_like: number;
              /** 分享次数 */
              dy_share: number;
              /** 转化数 */
              ecp_convert_cnt: number;
              /** 转化率 */
              ecp_convert_rate: number;
              /** 转化成本 */
              ecp_cpa_platform: number;
              id: number;
              image_material: string;
              image_mode: string;
              /** 7日间接下单订单数 */
              indirect_order_create_count_7days: number;
              /** 7日间接下单金额 */
              indirect_order_create_gmv_7days: number;
              /** 7日间接成交订单数 */
              indirect_order_pay_count_7days: number;
              /** 7日间接成交金额 */
              indirect_order_pay_gmv_7days: number;
              /** TODO 统计字段类型一个个确认 */
              indirect_order_prepay_count_7days: number;
              /** 7日间接预售金额 */
              indirect_order_prepay_gmv_7days: number;
              /** 7日未完结间接预售订单预估金额 */
              indirect_order_unfinished_estimate_gmv_7days: number;
              /** 直播间新加团人次 */
              live_fans_club_join_cnt: number;
              /** 直接成交客单价 */
              live_pay_order_cost_per_order: number;
              /** 直播间超过1分钟观看人次 */
              live_watch_one_minute_count: number;
              /** 直播间商品点击次数 */
              luban_live_click_product_cnt: number;
              /** 直播间评论次数 */
              luban_live_comment_cnt: number;
              /** 直播间观看人次 */
              luban_live_enter_cnt: number;
              /** 直播间音浪收入 */
              luban_live_gift_amount: number;
              /** 直播间打赏次数 */
              luban_live_gift_cnt: number;
              /** 直播间分享次数 */
              luban_live_share_cnt: number;
              /** 直播间查看购物车次数 */
              luban_live_slidecart_click_cnt: number;
              /** 直接成交金额 */
              pay_order_amount: number;
              /** 直接成交订单数 */
              pay_order_count: number;
              /** 成交智能优惠券金额 */
              pay_order_coupon_amount: number;
              /** 25%进度播放数 */
              play_25_feed_break: number;
              /** 50%进度播放数 */
              play_50_feed_break: number;
              /** 75%进度播放数 */
              play_75_feed_break: number;
              /** 3秒播放数 */
              play_duration_3s: number;
              /** 播放完成数 */
              play_over: number;
              /** 完播率 */
              play_over_rate: number;
              /** 直接支付ROI */
              prepay_and_pay_order_roi: number;
              /** 直接预售金额 */
              prepay_order_amount: number;
              /** 直接预售订单数 */
              prepay_order_count: number;
              promotion_card_material: string;
              /** 抖音号首单新客人数 */
              qianchuan_author_first_order_cnt: number;
              /** 抖音号首单新客转化成本 */
              qianchuan_author_first_order_convert_cost: number;
              /** 抖音号首单新客直接成交金额 */
              qianchuan_author_first_order_direct_pay_gmv: number;
              /** 抖音号首单新客直接支付ROI */
              qianchuan_author_first_order_direct_pay_order_roi: number;
              /** 抖音号首单新客30天累计成交金额 */
              qianchuan_author_first_order_ltv30: number;
              /** 抖音号首单新客订单占比 */
              qianchuan_author_first_order_rate: number;
              /** 抖音号首单新客30天累计支付ROI */
              qianchuan_author_first_order_roi30: number;
              /** 品牌首单新客数 */
              qianchuan_brand_first_order_cnt: number;
              /** 品牌首单新客转化成本 */
              qianchuan_brand_first_order_convert_cost: number;
              /** 品牌首单新客直接成交金额 */
              qianchuan_brand_first_order_direct_pay_gmv: number;
              /** 品牌首单新客直接支付ROI */
              qianchuan_brand_first_order_direct_pay_order_roi: number;
              /** 品牌首单新客30天累计成交金额 */
              qianchuan_brand_first_order_ltv30: number;
              /** 品牌首单新客订单占比 */
              qianchuan_brand_first_order_rate: number;
              /** 品牌首单新客30天累计支付ROI */
              qianchuan_brand_first_order_roi30: number;
              /** 带佣转化数 */
              qianchuan_commission_convert_cnt: number;
              /** 有效看播数 */
              qianchuan_effective_view_convert_count: number;
              /** 有效看播率 */
              qianchuan_effective_view_convert_rate: number;
              /** 有效看播成本 */
              qianchuan_effective_view_cpa_platform: number;
              /** 直接预估佣金收入 */
              qianchuan_estimated_commission: number;
              /** 直接佣金ROI */
              qianchuan_estimated_commission_roi: number;
              /** 店铺首单新客人数 */
              qianchuan_first_order_cnt: number;
              /** 店铺首单新客转化成本 */
              qianchuan_first_order_convert_cost: number;
              /** 店铺首单新客直接成交金额 */
              qianchuan_first_order_direct_pay_gmv: number;
              /** 店铺首单新客直接支付ROI */
              qianchuan_first_order_direct_pay_order_roi: number;
              /** 店铺首单新客30天累计成交金额 */
              qianchuan_first_order_ltv30: number;
              /** 店铺首单新客订单占比 */
              qianchuan_first_order_rate: number;
              /** 店铺首单新客30天累计支付ROI */
              qianchuan_first_order_roi30: number;
              /** 展示次数 */
              show_cnt: number;
              /** 消耗 */
              stat_cost: number;
              title_material: string;
              /** 播放数 */
              total_play: number;
              /** 未完结直接预售订单预估金额 */
              unfinished_estimate_order_gmv: number;
              updated_at: string;
              video_material: string;
        }
        interface GetCreativeDataTableListReq {
              /** 筛选广告主账户ID 多选数组 */
              advertiser_ids: number[];
              /** 代理商ID 如果是广告组 这个筛选字段不会生效 */
              agent_user_ids: number[];
              /** 素材评估 */
              analysis_type: string;
              /** 责任人/协作人ID 多选字符串数组 如果是广告组 这个筛选字段不会生效 */
              duty_user_ids: string[];
              /** 必传 默认是今天 */
              end_time: string;
              /** 用于指定条数数据导出，如果选择了多条，就传对应的 id 数组 */
              ids: number[];
              /** 是否是低效计划 0否 1是 */
              is_low_quality: number;
              limit: number;
              offset: number;
              order_field: string;
              /** 1 升序 2 降序 */
              order_type: number;
              /** 搜索广告组、广告计划、广告素材名称 */
              search: string;
              /** 必传 默认是今天 */
              start_time: string;
              /** 团队ID 如果是广告组 这个筛选字段不会生效 */
              team_ids: number[];
        }
        interface GetCreativeDataTableListResp {
              records: GetCreativeDataTableListRecord[];
              summary: CreativeDataTableListSummary;
              total: number;
        }
        interface GetDetailAdBasicInfoTemplateInner {
              /** 广告主ids */
              advertiser_ids: number[];
              /** 广告主账户 */
              advertisers: BasicAdvertiserInfo[];
              /** 详情 */
              detail: any;
              id: number;
              /** 名称 */
              name: string;
              /** 团队id（当创建团队模板时生效） */
              team_id: number;
              /** 团队名称（仅当团队模板时生效） */
              team_name: string;
              /** 模板类型 */
              template_type: any;
        }
        interface GetDetailAdBasicInfoTemplateResp {
              ad_basic_info_template: GetDetailAdBasicInfoTemplateInner;
        }
        interface GetDetailAdTemplateInner {
              /** 基础信息模板 */
              ad_basic_info_template: any;
              /** 创意分类标签组 */
              ad_creative_commons: AdCreativeCommon[];
              /** 创意组分组 */
              ad_creative_groups: AdCreativeGroup[];
              /** 广告主ids */
              advertiser_ids: number[];
              /** 广告主账户 */
              advertisers: BasicAdvertiserInfo[];
              /** 文案组 */
              copywriters: Copywriter[];
              /** 广告计划id */
              id: number;
              /** 是否收藏 */
              is_collect: boolean;
              /** 是否启用 */
              is_enable: boolean;
              /** 名称 */
              name: string;
              /** 定向模板组 */
              orientation_templates: AdTemplateOrientationTemplate[];
              /** 提交设置 */
              submit_setting: any;
              /** 广告投放目标 */
              target_delivery: any;
              /** 仅在团队模板中生效 */
              team_id: number;
              /** 当查询团队模板时生效 */
              team_name: string;
              /** 模板类型 */
              template_type: any;
        }
        interface GetDetailAdTemplateResp {
              ad_template: GetDetailAdTemplateInner;
        }
        interface GetDetailAutoDownLossInner {
              /** 亏损关停模式 */
              auto_down_loss_model: any;
              /** 预算 */
              budget: number;
              created_at: string;
              /** 名称动态 */
              dynamic_name: string;
              /** 结束时间 */
              end_time: string;
              id: number;
              /** 是否启用 */
              is_enable: boolean;
              /** 营销目标(如为空则代表全部) */
              marketing_goal: any;
              /** 广告类型(如为空则代表全部) */
              marketing_scene: any;
              /** 监控计划类型（仅当亏损关停模式为广告计划时生效） */
              monitoring_ad_type: any;
              /** 监控的投放账号ids */
              monitoring_advertiser_ids: number[];
              /** 绑定广告主的监控子类 */
              monitoring_advertiser_inners: MonitoringAdvertiserInner[];
              /** 监控的投放账号信息 */
              monitoring_advertisers: BasicAdvertiserInfo[];
              /** 监控频率 */
              monitoring_frequency: any;
              /** 监控方式 */
              monitoring_model: any;
              /** 名称 */
              name: string;
              /** 通知频率 */
              notification_frequency: any;
              /** roi */
              roi2_goal: number;
              /** 检测时间段 */
              scan_time_period: any;
              /** 检测时间 */
              schedule_time: string;
              /** 检测日期的类型 */
              schedule_type: any;
              /** 开始时间 */
              start_time: string;
              /** 触发方式 */
              trigger_mode: any;
              updated_at: string;
              /** 用户信息 */
              user: any;
              /** 当前版本号（用于监控） */
              version: number;
        }
        interface GetDetailAutoDownLossResp {
              /** 亏损关停详情 */
              auto_down_loss: any;
        }
        interface GetDetailAutoHotItemInner {
              /** 爆单模式 */
              auto_hot_item_model: any;
              created_at: string;
              /** 名称动态 */
              dynamic_name: string;
              /** 结束时间 */
              end_time: string;
              id: number;
              /** 是否启用 */
              is_enable: boolean;
              /** 营销目标(如为空则代表全部) */
              marketing_goal: any;
              /** 广告类型(如为空则代表全部) */
              marketing_scene: any;
              /** 监控的广告计划类型 */
              monitoring_ad_type: any;
              /** 监控的投放账号id */
              monitoring_advertiser_ids: number[];
              /** 绑定广告主的监控子类 */
              monitoring_advertiser_inners: MonitoringAdvertiserInner[];
              /** 监控的投放账号信息 */
              monitoring_advertisers: BasicAdvertiserInfo[];
              /** 监控频率 */
              monitoring_frequency: any;
              /** 监控方式 */
              monitoring_model: any;
              /** 名称 */
              name: string;
              /** 通知频率 */
              notification_frequency: any;
              /** roi */
              roi2_goal: number;
              /** 检测时间段 */
              scan_time_period: any;
              /** 检测时间 */
              schedule_time: string;
              /** 检测日期的类型 */
              schedule_type: any;
              /** 开始时间 */
              start_time: string;
              /** 触发方式 */
              trigger_mode: any;
              updated_at: string;
              /** 用户信息 */
              user: any;
              /** 绑定的监控版本号 */
              version: number;
        }
        interface GetDetailAutoHotItemResp {
              /** 爆单通知详情 */
              auto_hot_item: any;
        }
        interface GetDetailNotificationReportRuleResp {
              created_at: string;
              /** 创建者 */
              creator: any;
              /** 数据维度 （个人/项目/部门/企业） */
              data_dimension: any;
              /** 是否开启飞书通知 */
              feishu_notification_enabled: boolean;
              /** id */
              id: number;
              /** 通知角色集合 */
              notification_roles: BasicSelectInfo[];
              /** 通知用户集合 */
              notification_users: BasicUserInfo[];
              /** 报告类型 （小时报/日报/周报/月报） */
              report_type: any;
              /** 规则开关 */
              rule_enabled: boolean;
              /** 规则名称 */
              rule_name: string;
              /** 定时任务执行时间 */
              schedule_time: string;
              /** 选定维度集合（项目ID或部门ID，以JSON格式存储） */
              selected_dimensions: BasicSelectHashInfo[];
              updated_at: string;
        }
        interface GetDetailOssUsedSpaceData {
              /** 配置大小 */
              config_size: number;
              /** 配置流量 */
              config_traffic: number;
              /** 已使用大小 */
              used_size: number;
              /** 已使用流量 */
              used_traffic: number;
        }
        interface GetDetailOssUsedSpaceResp {
              /** 详情 */
              detail: any;
              /** 是否存在OSS */
              is_exist_oss: boolean;
        }
        interface GetDetailOrientationTemplateInner {
              /** 广告主ids */
              advertiser_ids: number[];
              /** 广告主账户 */
              advertisers: BasicAdvertiserInfo[];
              /** 营销场景 */
              campaign_scene: any;
              /** 详情 */
              detail: any;
              /** id */
              id: number;
              /** 推广方式 */
              lab_ad_type: any;
              /** 投放目标 */
              marketing_goal: any;
              /** 广告类型 */
              marketing_scene: any;
              /** 模板名称 */
              name: string;
              /** 团队id */
              team_id: number;
              /** 团队名称（当模板为团队模板时生效） */
              team_name: string;
              /** 模板类型 */
              template_type: any;
        }
        interface GetDetailOrientationTemplateResp {
              orientation_template: GetDetailOrientationTemplateInner;
        }
        interface GetDetailUniLiveInner {
              /** 广告id */
              ad_id: number;
              /** 广告账户详情 */
              advertiser: any;
              /** 广告账户id */
              advertiser_id: number;
              /** 抖音号详情 */
              aweme: any;
              /** 抖音号id */
              aweme_id: number;
              /** 创意设置 */
              creative_setting: any;
              /** 投放设置 */
              delivery_setting: any;
              /** id */
              id: number;
              /** 营销目标 */
              marketing_goal: any;
              /** 操作状态 */
              opt_status: any;
              /** 程序化创意信息 */
              programmatic_creative_media_list: any;
              /** 投放场景（出价方式） */
              smart_bid_type: any;
              /** 投放状态 */
              status: any;
        }
        interface GetDetailUniLiveResp {
              /** 计划详情 */
              uni_live: any;
        }
        interface GetDetailsOrientationTemplateInner {
              /** 名称 */
              name: string;
              /** 定向模板 */
              orientation_template: any;
              /** 定向模板ID */
              orientation_template_id: number;
        }
        interface GetDetailsOrientationTemplateReq {
              /** 定向包模板ids */
              orientation_template_ids: number[];
        }
        interface GetDetailsOrientationTemplateResp {
              /** 模板列表 */
              orientation_templates: GetDetailsOrientationTemplateInner[];
        }
        interface GetFlowFileUploadConfigReq {
              /** 加密后的请求数据 */
              signature_data: string;
        }
        interface GetIndustryInner {
              /** 子类 */
              children: GetIndustryInner[];
              /** 行业ID */
              industry_id: number;
              /** 行业名称 */
              industry_name: string;
              /** 所在级别，1：一级行业、2：二级行业、3：三级行业 */
              level: number;
        }
        interface GetIndustryReq {
              /** 广告账号id */
              advertiser_ids: number[];
        }
        interface GetIndustryResp {
              list: GetIndustryInner[];
        }
        interface GetInfoToolsDistrict {
              /** 中国大陆行政区域编码 */
              code: string;
              /** 港澳台、国外行政区域编码 */
              geoname_id: number;
              /** 行政区域层级 */
              level: any;
              /** 行政区域名称 */
              name: string;
              /** 子行政层级信息 */
              sub_districts: GetInfoToolsDistrict[];
        }
        interface GetInfoToolsReq {
              /** 广告主ids */
              advertiser_ids: number[];
              /** 行政编码 */
              codes: string[];
              /** 语言 */
              language: any;
              /** 行政区域层级 */
              sub_district: any;
        }
        interface GetInfoToolsResp {
              /** 行政层级信息 */
              districts: GetInfoToolsDistrict[];
              /** 版本号 */
              version: string;
        }
        interface GetMaterialDataTableListRecord {
              ad_id: number;
              /** 广告素材信息 */
              ad_material_info: string;
              /** 广告素材 */
              ad_material_info_detail: Record<string, any>;
              advertiser_id: number;
              /** 广告账号名称 */
              advertiser_name: string;
              /** 7日总下单ROI */
              all_order_create_roi_7days: number;
              /** 7日总成交订单数 */
              all_order_pay_count_7days: number;
              /** 7日总成交金额 */
              all_order_pay_gmv_7days: number;
              /** 7日总支付ROI */
              all_order_prepay_and_pay_roi_7days: number;
              /** 素材评估 */
              analysis_type: string;
              /** 转化数(计费时间) */
              attribution_convert_cnt: number;
              /** 转化成本(计费时间) */
              attribution_convert_cost: number;
              /** 转化率(计费时间) */
              attribution_convert_rate: number;
              /** 深度转化数(计费时间 */
              attribution_deep_convert_cnt: number;
              /** 深度转化成本(计费时间) */
              attribution_deep_convert_cost: number;
              /** 深度转化率(计费时间) */
              attribution_deep_convert_rate: number;
              /** 审核状态 */
              audit_status: any;
              /** 图文来源 */
              carousel_source: any;
              /** 点击次数 */
              click_cnt: number;
              company_id: number;
              /** 平均点击单价 */
              cpc_platform: number;
              /** 平均千次展现费用 */
              cpm_platform: number;
              /** 直接下单金额 */
              create_order_amount: number;
              /** 直接下单订单数 */
              create_order_count: number;
              /** 下单智能优惠券金额 */
              create_order_coupon_amount: number;
              /** 直接下单ROI */
              create_order_roi: number;
              /** todo 剩下的字段待确认 */
              create_time: string;
              create_time_unix: number;
              created_at: string;
              /** 点击率 */
              ctr: number;
              /** 深度转化次数 */
              deep_convert_cnt: number;
              /** 深度转化成本 */
              deep_convert_cost: number;
              /** 深度转化率 */
              deep_convert_rate: number;
              duration: number;
              /** 评论次数 */
              dy_comment: number;
              /** 新增粉丝数 */
              dy_follow: number;
              /** 点赞次数 */
              dy_like: number;
              /** 分享次数 */
              dy_share: number;
              /** 转化数 */
              ecp_convert_cnt: number;
              /** 转化率 */
              ecp_convert_rate: number;
              /** 转化成本 */
              ecp_cpa_platform: number;
              having_cost: string;
              id: number;
              /** RelatedAdIDs
RelatedCreativeIDs */
              image_source: any;
              /** 7日间接下单订单数 */
              indirect_order_create_count_7days: number;
              /** 7日间接下单金额 */
              indirect_order_create_gmv_7days: number;
              /** 7日间接成交订单数 */
              indirect_order_pay_count_7days: number;
              /** 7日间接成交金额 */
              indirect_order_pay_gmv_7days: number;
              /** 7日间接预售订单数 */
              indirect_order_prepay_count_7days: number;
              /** 7日间接预售金额 */
              indirect_order_prepay_gmv_7days: number;
              /** 7日未完结间接预售订单预估金额 */
              indirect_order_unfinished_estimate_gmv_7days: number;
              /** 是否是自动生成的，自动生成的素材只能在千川看到 */
              is_auto_generate: number;
              is_del: number;
              /** 直播间新加团人次 */
              live_fans_club_join_cnt: number;
              /** 直接成交客单价 */
              live_pay_order_cost_per_order: number;
              /** 直播间超过1分钟观看人次 */
              live_watch_one_minute_count: number;
              /** 直播间商品点击次数 */
              luban_live_click_product_cnt: number;
              /** 直播间评论次数 */
              luban_live_comment_cnt: number;
              /** 直播间观看人次 */
              luban_live_enter_cnt: number;
              /** 直播间音浪收入 */
              luban_live_gift_amount: number;
              /** 直播间打赏次数 */
              luban_live_gift_cnt: number;
              /** 直播间分享次数 */
              luban_live_share_cnt: number;
              /** 直播间查看购物车次数 */
              luban_live_slidecart_click_cnt: number;
              material_delivery_type: FlowMaterialDeliveryType;
              /** 素材详情json */
              material_detail: string;
              material_id: number;
              /** 素材样式 */
              material_mode: any;
              material_name: string;
              /** 素材类型 */
              material_type: any;
              /** 直接成交金额 */
              pay_order_amount: number;
              /** 直接成交订单数 */
              pay_order_count: number;
              /** 成交智能优惠券金额 */
              pay_order_coupon_amount: number;
              /** 25%进度播放数 */
              play_25_feed_break: number;
              /** 50%进度播放数 */
              play_50_feed_break: number;
              /** 75%进度播放数 */
              play_75_feed_break: number;
              /** 3秒播放数 */
              play_duration_3s: number;
              /** 播放完成数 */
              play_over: number;
              /** 完播率 */
              play_over_rate: number;
              /** 直接支付ROI */
              prepay_and_pay_order_roi: number;
              /** 直接预售金额 */
              prepay_order_amount: number;
              /** 直接预售订单数 */
              prepay_order_count: number;
              /** 抖音号首单新客人数 */
              qianchuan_author_first_order_cnt: number;
              /** 抖音号首单新客转化成本 */
              qianchuan_author_first_order_convert_cost: number;
              /** 抖音号首单新客直接成交金额 */
              qianchuan_author_first_order_direct_pay_gmv: number;
              /** 抖音号首单新客直接支付ROI */
              qianchuan_author_first_order_direct_pay_order_roi: number;
              /** 抖音号首单新客30天累计成交金额 */
              qianchuan_author_first_order_ltv30: number;
              /** 抖音号首单新客订单占比 */
              qianchuan_author_first_order_rate: number;
              /** 抖音号首单新客30天累计支付ROI */
              qianchuan_author_first_order_roi30: number;
              /** 品牌首单新客数 */
              qianchuan_brand_first_order_cnt: number;
              /** 品牌首单新客转化成本 */
              qianchuan_brand_first_order_convert_cost: number;
              /** 品牌首单新客直接成交金额 */
              qianchuan_brand_first_order_direct_pay_gmv: number;
              /** 品牌首单新客直接支付ROI */
              qianchuan_brand_first_order_direct_pay_order_roi: number;
              /** 品牌首单新客30天累计成交金额 */
              qianchuan_brand_first_order_ltv30: number;
              /** 品牌首单新客订单占比 */
              qianchuan_brand_first_order_rate: number;
              /** 品牌首单新客30天累计支付ROI */
              qianchuan_brand_first_order_roi30: number;
              /** 带佣转化数 */
              qianchuan_commission_convert_cnt: number;
              /** 有效看播数 */
              qianchuan_effective_view_convert_count: number;
              /** 有效看播率 */
              qianchuan_effective_view_convert_rate: number;
              /** 有效看播成本 */
              qianchuan_effective_view_cpa_platform: number;
              /** 直接预估佣金收入 */
              qianchuan_estimated_commission: number;
              /** 直接佣金ROI */
              qianchuan_estimated_commission_roi: number;
              /** 店铺首单新客人数 */
              qianchuan_first_order_cnt: number;
              /** 店铺首单新客转化成本 */
              qianchuan_first_order_convert_cost: number;
              /** 店铺首单新客直接成交金额 */
              qianchuan_first_order_direct_pay_gmv: number;
              /** 店铺首单新客直接支付ROI */
              qianchuan_first_order_direct_pay_order_roi: number;
              /** 店铺首单新客30天累计成交金额 */
              qianchuan_first_order_ltv30: number;
              /** 店铺首单新客订单占比 */
              qianchuan_first_order_rate: number;
              /** 店铺首单新客30天累计支付ROI */
              qianchuan_first_order_roi30: number;
              related_ad_cnt: number;
              related_creative_cnt: number;
              /** 展示次数 */
              show_cnt: number;
              /** 视频md5值 */
              signature: string;
              /** 消耗 */
              stat_cost: number;
              thumbs: string[];
              /** 播放数 */
              total_play: number;
              /** 未完结直接预售订单预估金额 */
              unfinished_estimate_order_gmv: number;
              updated_at: string;
              urls: string[];
              /** 视频来源 */
              video_source: any;
        }
        interface GetMaterialDataTableListReq {
              /** 筛选广告主账户ID 多选数组 */
              advertiser_ids: number[];
              /** 素材评估 */
              analysis_types: string[];
              /** 审核状态 */
              audit_status: any;
              /** 必传 默认是今天 */
              end_time: string;
              /** 消耗情况 ALL 全部，有消耗 YES，没有消耗 NO */
              having_cost: any;
              /** 用于指定条数数据导出，如果选择了多条，就传对应的 id 数组 */
              ids: number[];
              /** 素材样式 */
              image_modes: FlowImageMode[];
              limit: number;
              /** 素材来源 */
              material_sources: string[];
              offset: number;
              order_field: string;
              /** 1 升序 2 降序 */
              order_type: number;
              search: string;
              /** 必传 默认是今天 */
              start_time: string;
        }
        interface GetMaterialDataTableListResp {
              records: GetMaterialDataTableListRecord[];
              summary: MaterialDataTableListSummary;
              total: number;
        }
        interface GetMaterialQianchuanDetailReq {
              advertiser_id: number;
              material_id: number;
        }
        interface GetMaterialQianchuanDetailResp {
              bit_rate: number;
              create_time: string;
              duration: number;
              filename: string;
              format: string;
              height: number;
              id: string;
              image_mode: QianchuanVideoGetV10DataListImageMode;
              is_ai_create: boolean;
              material_id: number;
              poster_url: string;
              signature: string;
              size: number;
              source: QianchuanVideoGetV10DataListSource;
              tags: string[];
              url: string;
              width: number;
        }
        interface GetMovieAwemeShareListItem {
              /** 创建时间 */
              create_time: string;
              /** 创建人 */
              creator_info: any;
              /** 是否允许下载  1：允许，2：不允许 */
              download_type: number;
              /** 是否过期 */
              is_expire: boolean;
              /** 地理位置信息锚点 id，与小程序 appId 互斥，优先展示小程序。 */
              poi_id: string;
              /** schema */
              schema: string;
              /** share_id */
              share_id: string;
              /** 短标题 */
              short_title: string;
              /** 发布状态 */
              status: any;
              /** 视频标题 */
              title: string;
        }
        interface GetMovieAwemeShareListResp {
              list: GetMovieAwemeShareListItem[];
              total: number;
        }
        interface GetMovieRelatedAdJuAdMaterialStatResp {
              records: GetMovieRelatedAdMaterialJuAdStatRecord[];
              total_stat: JuAdMaterialStatColumns;
        }
        interface GetMovieRelatedAdKsNiuMaterialStatResp {
              records: GetMovieRelatedAdMaterialKsNiuStatRecord[];
              total_stat: KsNiuMaterialStatColumns;
        }
        interface GetMovieRelatedAdMaterialJuAdStatRecord {
              /** 广告素材id */
              ad_material_id: number;
              /** 广告素材名称 */
              ad_material_name: string;
              /** 广告账户id */
              advertiser_id: number;
              /** 广告账号名称 */
              advertiser_name: string;
              /** 广告账户平台id */
              advertiser_platform_id: string;
              /** 统计数据 */
              stat: any;
        }
        interface GetMovieRelatedAdMaterialKsNiuStatRecord {
              /** 广告素材id */
              ad_material_id: number;
              /** 广告素材名称 */
              ad_material_name: string;
              /** 广告账户id */
              advertiser_id: number;
              /** 广告账号名称 */
              advertiser_name: string;
              /** 广告账户平台id */
              advertiser_platform_id: string;
              /** 统计数据 */
              stat: any;
        }
        interface GetMovieRelatedAdMaterialLiveStatRecord {
              /** 广告素材id */
              ad_material_id: number;
              /** 广告素材名称 */
              ad_material_name: string;
              /** 广告账户id */
              advertiser_id: number;
              /** 广告账号名称 */
              advertiser_name: string;
              /** 广告账户平台id */
              advertiser_platform_id: string;
              /** 统计数据 */
              stat: any;
        }
        interface GetMovieRelatedAdMaterialLiveStatResp {
              records: GetMovieRelatedAdMaterialLiveStatRecord[];
              total_stat: UniMaterialLiveStatColumns;
        }
        interface GetMovieRelatedAdMaterialProductStatRecord {
              /** 广告素材id */
              ad_material_id: number;
              /** 广告素材名称 */
              ad_material_name: string;
              /** 广告账户id */
              advertiser_id: number;
              /** 广告账号名称 */
              advertiser_name: string;
              /** 广告账户平台id */
              advertiser_platform_id: string;
              /** 统计数据 */
              stat: any;
        }
        interface GetMovieRelatedAdMaterialProductStatResp {
              records: GetMovieRelatedAdMaterialProductStatRecord[];
              total_stat: UniMaterialProductStatColumns;
        }
        interface GetMovieRelatedAdMaterialStatReq {
              id: string;
              to: number;
        }
        interface GetMovieRelatedAdMaterialTxAdStatRecord {
              /** 广告素材id */
              ad_material_id: number;
              /** 广告素材名称 */
              ad_material_name: string;
              /** 广告账户id */
              advertiser_id: number;
              /** 广告账号名称 */
              advertiser_name: string;
              /** 广告账户平台id */
              advertiser_platform_id: string;
              /** 统计数据 */
              stat: any;
        }
        interface GetMovieRelatedAdTxAdMaterialStatResp {
              records: GetMovieRelatedAdMaterialTxAdStatRecord[];
              total_stat: TxAdMaterialStatColumns;
        }
        interface GetPreSignUrlReq {
              /** 文件类型，例如 video audio image */
              catalog: string;
              commit_task_id: number;
              /** 文件名称 例如 测试视频.mp4 */
              filename: string;
              /** 文件大小 */
              filesize: number;
              /** 文件类型，例如 video/mp4 */
              filetype: string;
              /** 二级分类：image（单图）、 atlas（图集）、copywriting（文案）、adcomment（追评） */
              second_catalog: any;
        }
        interface GetPreSignUrlResp {
              /** oss 保存文件key */
              oss_file_key: string;
              /** oss 文件上传目标地址有效时间 时间戳格式 */
              oss_pre_url_expire_at: number;
              /** oss 上传文件的访问地址 */
              oss_url: string;
              /** oss 文件上传目标地址 */
              pre_sign_url: string;
              /** 文件上传 upload_uid */
              upload_uid: string;
        }
        interface GetProtectBatchDetail {
              advertiser_ids: number[];
        }
        interface GetProtectByIdResp {
              protect: FlowProtect;
        }
        interface GetQcDataTableConfResp {
              /** 已选的配置 */
              selected: any;
              /** 配置模板 */
              template: Record<string, any>;
        }
        interface GetSettingResp {
        }
        interface GranularityDetailUniLiveResp {
              uni_live_granularity_list: UniLiveGranularity[];
        }
        interface ImageMaterial {
              /** 图片ID列表 */
              image_ids: string[];
              /** 我们系统图片的id 然后进行上传，视频上传推送队列工具 图片素材 id */
              material_id: string;
        }
        interface InviteeListRecord {
              code: string;
              department_name: string;
              id: number;
              inviter_info: BasicUserInfo;
              message: string;
              role_name: string;
              status: number;
              user_catalog: string;
              user_catalog_desc: string;
              user_info: BasicUserInfo;
        }
        interface LiveOrientationTemplate {
              /** 网络类型,不传值或者全传为全选 */
              ac: FlowAc[];
              /** 行为类目词 */
              action_categories: number[];
              /** 行为类目词详情 */
              action_categories_items: any;
              /** 用户发生行为天数 */
              action_days: any;
              /** 行为场景 */
              action_scene: FlowActionScene[];
              /** 行为关键词 */
              action_words: number[];
              /** 行为关键词详情 */
              action_words_items: any;
              /** todo 每个账号处理 */
              advertiser_retargeting_tags_setting: Record<string, any>;
              /** 受众年龄区间 */
              age: FlowAge[];
              /** 是否启用智能放量 */
              auto_extend_enabled: any;
              /** 可放开定向列表 */
              auto_extend_targets: FlowAutoExtendTargets[];
              /** 抖音达人ID列表 */
              aweme_fan_accounts: number[];
              /** 抖音达人ID列表详情 */
              aweme_fan_accounts_items: any;
              /** 抖音用户行为类型 */
              aweme_fan_behaviors: FlowAwemeFanBehaviors[];
              /** 抖音达人互动用户行为天数 */
              aweme_fan_behaviors_days: any;
              /** 抖音达人分类ID列表 */
              aweme_fan_categories: number[];
              /** 抖音达人分类ID列表详情 */
              aweme_fan_categories_items: any;
              /** 具体定向的城市列表 */
              city: number[];
              /** 具体定向的城市列表详情 */
              city_items: any;
              /** 地域类型 */
              district: any;
              /** 定向or排除地域 */
              district_type: boolean;
              /** 地域信息详情 */
              districts: DistrictTools[];
              /** 定向电子围栏地区 */
              electric_fence_region: any;
              /** 排除限运地区 */
              exclude_limited_region: any;
              /** 性别 */
              gender: any;
              /** 兴趣类目词 */
              interest_categories: number[];
              /** 兴趣类目词详情 */
              interest_categories_items: any;
              /** 兴趣关键词 */
              interest_words: number[];
              /** 兴趣关键词详情 */
              interest_words_items: any;
              /** 平台精选人群包，默认为全不选 */
              live_platform_tags: FlowLivePlatformTags[];
              /** 地域定向的用户状态类型 */
              location_type: any;
              /** 更多人群模式， */
              more_people_mode: any;
              /** 新客定向，NO_BUY店铺未购，NONE不限（默认） */
              new_customer: any;
              /** 定向包id */
              orientation_id: number;
              /** 投放平台列表 */
              platform: FlowPlatform[];
              /** 行政区域版本号 */
              region_version: string;
              /** 排除人群包id列表 */
              retargeting_tags_exclude: number[];
              /** 排除人群包id列表详情 */
              retargeting_tags_exclude_items: any;
              /** 定向人群包id列表 */
              retargeting_tags_include: number[];
              /** 定向人群包id列表详情 */
              retargeting_tags_include_items: any;
              /** 搜索定向扩展 */
              search_extended: any;
              /** 行为兴趣意向定向模式 */
              smart_interest_action: any;
        }
        interface LoginControlReq {
              /** 传递的是 json 字符串，例如 {"no_operate_time":30} */
              account_logout: string;
              /** 传递的是 字符串， 例如 192.168.1.1,192.168.1.2 */
              forbidden_login: string;
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
              /** 平均单次播放时长 */
              average_play_time_per_play: number;
              /** 点击次数 */
              click_cnt: number;
              /** 平均千次展现费用 */
              cpm_platform: number;
              /** 直接下单金额 */
              create_order_amount: number;
              /** 直接下单订单数 */
              create_order_count: number;
              /** 下单智能优惠券金 */
              create_order_coupon_amount: number;
              /** 直接下单ROI */
              create_order_roi: number;
              /** 点击率 */
              ctr: number;
              /** 不感兴趣数 */
              dislike_cnt: number;
              /** 评论次数 */
              dy_comment: number;
              /** 新增粉丝数 */
              dy_follow: number;
              /** 点赞次数 */
              dy_like: number;
              /** 分享次数 */
              dy_share: number;
              /** 转化数 */
              ecp_convert_cnt: number;
              /** 转化率 */
              ecp_convert_rate: number;
              /** 转化成本 */
              ecp_cpa_platform: number;
              /** 未完结间接预售订单预估金额 */
              indirect_order_unfinished_estimate_gmv_7days: number;
              /** 直播间新加团人次 */
              live_fans_club_join_cnt: number;
              /** 直播间超过1分钟观看人次 */
              live_watch_one_minute_count: number;
              /** 直播间商品点击次数 */
              luban_live_click_product_cnt: number;
              /** 直播间评论次数 */
              luban_live_comment_cnt: number;
              /** 直播间观看人次 */
              luban_live_enter_cnt: number;
              /** 直播间音浪收入 */
              luban_live_gift_amount: number;
              /** 直播间打赏次数 */
              luban_live_gift_cnt: number;
              /** 直播间分享次数 */
              luban_live_share_cnt: number;
              /** 直播间查看购物车次数 */
              luban_live_slidecart_click_cnt: number;
              /** 素材ARPU */
              material_arpu: number;
              /** 直接成交金额 */
              pay_order_amount: number;
              /** 直接成交订单数 */
              pay_order_count: number;
              /** 成交智能优惠券金额 */
              pay_order_coupon_amount: number;
              /** 25%进度播放数 */
              play_25_feed_break: number;
              /** 50%进度播放数 */
              play_50_feed_break: number;
              /** 75%进度播放数 */
              play_75_feed_break: number;
              /** 10s播放率 */
              play_duration_10s_rate: number;
              /** 2s播放率 */
              play_duration_2s_rate: number;
              /** 3s播放率 */
              play_duration_3s_rate: number;
              /** 5s播放率 */
              play_duration_5s_rate: number;
              /** 播放完成数 */
              play_over: number;
              /** 完播率 */
              play_over_rate: number;
              /** 直接支付ROI */
              prepay_and_pay_order_roi: number;
              /** 直接预售金额 */
              prepay_order_amount: number;
              /** 直接预售订单数 */
              prepay_order_count: number;
              /** 举报数 */
              report_cnt: number;
              /** 展示次数 */
              show_cnt: number;
              /** 消耗 */
              stat_cost: number;
              /** 播放数 */
              total_play: number;
              /** 未完结直接预售订单预估金额 */
              unfinished_estimate_order_gmv: number;
              /** 有效播放数 */
              valid_play: number;
              /** 有效播放率 */
              valid_play_rate: number;
        }
        interface MaterialStatusFilterItem {
              id: number;
              name: string;
        }
        interface MaterialTypeCatalogAndTagGroupSettingsItem {
              /** 二级分类id */
              category_id: number;
              /** 二级分类名称 */
              category_name: string;
              /** 是否必填 0 否 1 是 */
              is_required: number;
              material_catalog: MaterialTypeCatalogRelationMaterialCatalog;
              material_type: MaterialTypeCatalogRelationMaterialType;
              /** 一级分类id */
              parent_catagory_id: number;
              /** 一级分类名称 */
              parent_category_name: string;
        }
        enum MaterialTypeCatalogRelationMaterialCatalog {
              VIDEO = "video",
              VCOLLECTION = "vcollection",
              AUDIO = "audio",
              IMAGE = "image",
              SCRIPT = "script",
              DOC = "doc",
        }
        enum MaterialTypeCatalogRelationMaterialType {
              MOVIE = "movie",
              OWN = "own",
              COOPERATION = "cooperation",
              REFERENCE = "reference",
        }
        interface MonitoringAdvertiserInner {
              /** 广告账户 */
              advertiser_id: number;
              /** 广告账户名称 */
              advertiser_name: string;
              /** 子序列 */
              sub_list: MonitoringAdvertiserInnerSub[];
        }
        interface MonitoringAdvertiserInnerSub {
              avatar: string;
              id: number;
              name: string;
        }
        interface MoveUsersToNewDepartmentReq {
              department_ids: number[];
              user_ids: string[];
        }
        interface MoveUsersToNewRolesReq {
              role_ids: number[];
              user_ids: string[];
        }
        interface MovieRelatedAdPlanCountItem {
              /** 广告计划类型：report（千川标准推广）、uni_promotion（千川全域推广）、xiaodian（小店随心投） */
              ad_catalog: any;
              /** 关联数量 */
              count: number;
              /** 营销目标：VIDEO_PROM_GOODS（推商品｜视频）、LIVE_PROM_GOODS（推直播间） */
              marketing_goal: any;
        }
        interface MyTagGroupCommonDeleteReq {
              /** 需要删除的标签组 ID 数组 */
              tag_group_ids: number[];
              /** 需要删除的标签 ID 数组 */
              tag_ids: number[];
        }
        interface MyTagGroupListResp {
              count: number;
              records: MyTagGroupListTagGroup[];
        }
        interface MyTagGroupListTag {
              /** 授权开始时间 */
              authorize_begin: number;
              /** 授权结束时间 */
              authorize_end: number;
              /** 所属企业ID */
              company_id: number;
              created_at: string;
              /** 创建者 */
              creator: number;
              creator_info: BasicUserInfo;
              id: number;
              /** 标签名称 */
              name: string;
              /** 排序序号 */
              serial_number: number;
              /** 标签状态 1 正常 2 弃用 */
              state: any;
              /** 所属标签组ID */
              tag_group_id: number;
              updated_at: string;
        }
        interface MyTagGroupListTagGroup {
              /** 所属企业ID */
              company_id: number;
              created_at: string;
              /** 创建者 */
              creator: number;
              creator_info: BasicUserInfo;
              id: number;
              /** 标签组名称 */
              name: string;
              /** 个人常用公共标签组关联的分类ID */
              relate_category_id: number;
              /** 排序序号 */
              serial_number: number;
              /** 标签状态 */
              state: any;
              tags: MyTagGroupListTag[];
              updated_at: string;
        }
        interface MyTagGroupsTagsChooseListItem {
              /** 所属企业ID */
              company_id: number;
              created_at: string;
              /** 创建者 */
              creator: number;
              id: number;
              /** 标签组名称 */
              name: string;
              /** 个人常用公共标签组关联的分类ID */
              relate_category_id: number;
              /** 排序序号 */
              serial_number: number;
              /** 标签状态 */
              state: any;
              tags: Tag[];
              updated_at: string;
        }
        interface MyUsedFrequentlyTagGroupRemoveTagsReq {
              id: number;
              tag_ids: number[];
        }
        interface NotificationReportLogTaskRetryReq {
              /** 数据时间（仅供） */
              data_time: string;
              /** 通知报告日志ID */
              notification_report_log_id: number;
        }
        interface OptAdminUserLeaveReq {
              opt_user_id: string;
              /** 1 全部删除 2 移交资源 */
              resource_handler_type: number;
              resource_receiver_id: string;
        }
        interface OptAdminUserRemoveReq {
              opt_user_id: string;
              /** 1 全部删除 2 移交资源 */
              resource_handler_type: number;
              resource_receiver_id: string;
        }
        interface OptLeftAdminUserReq {
              user_ids: string[];
        }
        interface OptStatusUniLiveReq {
              /** 是否开启 */
              is_enable: boolean;
              /** 全域推广直播间id */
              uni_live_id: number;
        }
        interface OptUserInviteApprovalReq {
              ids: number[];
              message: string;
        }
        interface OrientationTemplate {
              /** 广告主ids */
              advertiser_ids: number[];
              /** 营销场景 */
              campaign_scene: any;
              /** 详情 */
              detail: any;
              /** id */
              id: number;
              /** 推广方式 */
              lab_ad_type: any;
              /** 投放目标 */
              marketing_goal: any;
              /** 广告类型 */
              marketing_scene: any;
              /** 模板名称 */
              name: string;
              /** 团队id */
              team_id: number;
              /** 模板类型 */
              template_type: any;
        }
        interface OrientationTemplateChooseListInner {
              avatar: string;
              created_at: string;
              id: number;
              /** 投放目标 */
              marketing_goal: any;
              name: string;
              /** 模板类型 */
              template_type: any;
              updated_at: string;
        }
        interface OrientationTemplateChooseListReq {
              /** 广告账户 */
              advertiser_ids: number[];
              /** 营销场景 */
              campaign_scene: any;
              /** 推广方式 */
              lab_ad_type: any;
              limit: number;
              /** 投放目标 */
              marketing_goal: any;
              /** 广告类型 */
              marketing_scene: any;
              /** 搜索模板 */
              name: string;
              offset: number;
              /** 模板类型 */
              template_type: any;
        }
        interface OrientationTemplateChooseListResp {
              list: OrientationTemplateChooseListInner[];
        }
        interface OrientationTemplateDetail {
              /** 人群定向模式 NONE:不限、CUSTOM：自定义 */
              audience_mode: any;
              /** 直播间定向包模板（仅当模板目标为投直播间时有效） */
              live_orientation_template: any;
              /** 商品定向包模板（仅当模板目标为投商品时有效） */
              video_orientation_template: any;
        }
        interface OssBatchOptionCommonReq {
              /** 素材 hash id */
              material_ids: string[];
              /** 内网上传文件的 URL，例如本地上传的时候需要同步文件到 oss 时候 请求传参 */
              upload_urls: string[];
        }
        interface OssBatchSyncResp {
              client_request: ClientRequest;
        }
        interface ProductChooseListAdTotalInner {
              /** 广告账户id */
              advertiser_id: number;
              /** 广告账户名称 */
              advertiser_name: string;
              /** 子列表 */
              sub_list: ProductChooseListAdTotalInnerSub[];
        }
        interface ProductChooseListAdTotalInnerSub {
              /** 绑定的广告账号数量 */
              ad_total: number;
              avatar: string;
              id: number;
              name: string;
        }
        interface ProductChooseListAdTotalReq {
              /** 广告账号 */
              advertiser_ids: number[];
              /** 营销目标 */
              marketing_goal: any;
              /** 广告类型 */
              marketing_scene: any;
        }
        interface ProductChooseListAdTotalResp {
              /** 列表 */
              list: ProductChooseListAdTotalInner[];
        }
        interface ProductChooseListResp {
              products: BasicFlowSelectInfo[];
        }
        interface ProductListItem {
              /** 组织id */
              company_id: number;
              created_at: string;
              /** 创建用户id */
              creator: number;
              creator_info: BasicUserInfo;
              id: number;
              /** 产品名称 */
              name: string;
              /** 排序序号 */
              serial_number: number;
              updated_at: string;
        }
        interface ProductListResp {
              count: number;
              records: ProductListItem[];
        }
        interface ProgrammaticCreativeCard {
              /** 推广卡片行动号召按钮文案 */
              promotion_card_action_button: string;
              /** 是否对行动号召按钮文案启用智能优选 */
              promotion_card_button_smart_optimization: any;
              /** 内容大脑系统中选择的素材图片hashid */
              promotion_card_material_id: string;
              /** 推广卡片图片ID详情 */
              promotion_card_material_id_item: any;
              /** PromotionCardImageId                 *string                                            `json:"promotion_card_image_id,omitempty"`                  //推广卡片图片ID */
              promotion_card_selling_points: string[];
              /** 推广卡片标题，最多7个字 */
              promotion_card_title: string;
        }
        interface ProtectBatchDetailResp {
              /** 默认的规则限制 */
              default_config: any;
              /** 详细的出价保护 */
              detail: Record<string, any>;
        }
        interface ProtectDefaultConfig {
              /** 千川开放接口中支持的最大出价，出价不能超过预算 */
              max_bid: number;
              /** 千川开放接口中支持的最大的 ROI */
              max_roi: number;
              /** 千川开放接口中支持的最小出价 */
              min_bid: number;
              /** 千川开放接口中支持的最小的 ROI */
              min_roi: number;
        }
        interface PublicSettingsResp {
              download_controls: GetSettingResp;
              share_controls: GetSettingResp;
              show_range: GetSettingResp;
        }
        interface PublicTagGroupItem {
              id: number;
              name: string;
              serial_number: number;
        }
        interface PullAdDetailReq {
              ad_ids: number[];
        }
        interface PullAdMaterialReq {
              ad_ids: number[];
        }
        interface PullAdMaterialStatReq {
              ad_ids: number[];
              advertiser_ids: number[];
              /** yyyy-mm-dd */
              end_date: string;
              material_ids: number[];
              /** yyyy-mm-dd */
              start_date: string;
        }
        interface PullAdvertiserAdDailyStatReq {
              advertiser_ids: number[];
              /** yyyy-mm-dd */
              end_date: string;
              /** yyyy-mm-dd */
              start_date: string;
        }
        interface PullAdvertiserAdReq {
              advertiser_ids: number[];
        }
        interface PullAdvertiserCampaignReq {
              advertiser_ids: number[];
        }
        interface PullAdvertiserDailyStatReq {
              advertiser_ids: number[];
              /** yyyy-mm-dd */
              end_date: string;
              /** yyyy-mm-dd */
              start_date: string;
        }
        interface PullAdvertiserJuAdMaterialStatReq {
              /** yyyy-mm-dd */
              end_date: string;
              /** yyyy-mm-dd */
              start_date: string;
        }
        interface PullAdvertiserMaterialStatReq {
              advertiser_ids: number[];
              /** yyyy-mm-dd */
              end_date: string;
              /** yyyy-mm-dd */
              start_date: string;
        }
        interface PullAdvertiserUniMaterialStatExecReq {
              advertiser_id: number;
              anchor_id: number;
              data_topic: DataTopic;
              /** yyyy-mm-dd */
              start_date: string;
              target_company_id: number;
        }
        interface PullAdvertiserUniMaterialStatReq {
              /** yyyy-mm-dd */
              end_date: string;
              /** yyyy-mm-dd */
              start_date: string;
        }
        interface QueryAdBasicInfoTemplateInner {
              /** 广告主列表 */
              advertiser_names: string[];
              /** 固定出价/ROI */
              bid_roi: number;
              /** 出价/ROI模式 */
              bid_roi_model: any;
              /** 出价/ROI类型 */
              bid_roi_type: any;
              /** 预算 */
              budget: number;
              /** 创建时间 */
              created_at: string;
              /** 广告基础模板id */
              id: number;
              /** 是否收藏 */
              is_collect: boolean;
              /** 是否启用 */
              is_enable: boolean;
              /** 营销目标 */
              marketing_goal: any;
              /** 最大出价/ROI */
              max_bid_roi: number;
              /** 最小出价/ROI */
              min_bid_roi: number;
              /** 名称 */
              name: string;
              /** 是否开启智能优惠券 */
              qcpx_mode: any;
              /** 投放场景（出价方式） */
              smart_bid_type: any;
              /** 团队详情（仅在团队模板时字段生效） */
              team: any;
              /** 模板类型 */
              template_type: any;
              /** 修改时间 */
              updated_at: string;
              /** 用户详情 */
              user: any;
        }
        interface QueryAdBasicInfoTemplateReq {
              /** 广告账户 */
              advertiser_ids: number[];
              /** 出价/ROI模式 */
              bid_roi_model: any;
              /** 是否收藏 */
              is_collect: boolean;
              limit: number;
              /** 搜索模板名称 */
              name: string;
              offset: number;
              /** 优惠券 */
              qcpx_mode: any;
              /** 投放场景（出价方式） */
              smart_bid_type: any;
              /** 团队ids */
              team_ids: number[];
              /** 模板类型 */
              template_type: any;
        }
        interface QueryAdBasicInfoTemplateResp {
              ad_basic_info_templates: QueryAdBasicInfoTemplateInner[];
              total: number;
        }
        interface QueryAdTemplateInner {
              /** 广告基础信息模版 */
              ad_basic_info_template: any;
              /** 创意分类标签数量 */
              ad_creative_common_count: number;
              /** 创意组数量 */
              ad_creative_group_count: number;
              /** 广告主列表 */
              advertiser_names: string[];
              /** 固定出价/Roi */
              bid_roi: number;
              /** 出价/Roi模式 */
              bid_roi_model: any;
              /** 出价/Roi类型 */
              bid_roi_type: any;
              /** 营销场景 */
              campaign_scene: any;
              /** 文案组数量 */
              copywriter_count: number;
              /** 创建时间 */
              created_at: string;
              /** 广告计划id */
              id: number;
              /** 是否收藏 */
              is_collect: boolean;
              /** 是否启用 */
              is_enable: boolean;
              /** 推广方式 */
              lab_ad_type: any;
              /** 营销目标 */
              marketing_goal: any;
              /** 广告类型 */
              marketing_scene: any;
              /** 最大出价/roi */
              max_bid_roi: number;
              /** 最小出价/roi */
              min_bid_roi: number;
              /** 模板名称 */
              name: string;
              /** 定向模版数量 */
              orientation_template_count: number;
              /** 计算广告计划数相关参数 */
              submit_setting: any;
              /** 团队(查询团队模板时生效) */
              team: any;
              /** 模板类型 */
              template_type: any;
              /** 修改时间 */
              updated_at: string;
              /** 创建人 */
              user: any;
        }
        interface QueryAdTemplateReq {
              /** 广告账号 */
              advertiser_ids: number[];
              /** 营销场景 */
              campaign_scene: any;
              /** 创建人 */
              create_user_id: string;
              /** 是否收藏 */
              is_collect: boolean;
              /** 推广方式 */
              lab_ad_type: any;
              limit: number;
              /** 营销目标 */
              marketing_goal: any;
              /** 广告类型 */
              marketing_scene: any;
              /** 搜索模板 */
              name: string;
              offset: number;
              /** 团队ids */
              team_ids: number[];
              /** 模板类型 */
              template_type: any;
        }
        interface QueryAdTemplateResp {
              ad_templates: QueryAdTemplateInner[];
              total: number;
        }
        interface QueryAdvertiserMonitorInner {
              /** 账号余额 */
              account_total: number;
              /** 广告账户 */
              advertiser: any;
              /** 广告主id */
              advertiser_id: number;
              /** 所属代理商 */
              agent_name: string;
              /** 是否开启 */
              is_enable: boolean;
              /** 出价保护措施 */
              is_protect: boolean;
              /** 流量平台 */
              platform_name: string;
              /** 账号异常状态 */
              status_name: string;
              /** 所属团队 */
              team_name: string;
        }
        interface QueryAdvertiserMonitorResp {
              /** 列表 */
              list: QueryAdvertiserMonitorInner[];
              /** total */
              total: number;
        }
        interface QueryAutoDownLossInner {
              /** 亏损关停模式 */
              auto_down_loss_model: any;
              /** 预算 */
              budget: number;
              created_at: string;
              /** 亏损关停id */
              id: number;
              /** 是否开启 */
              is_enable: boolean;
              /** 营销目标(如为空则代表全部) */
              marketing_goal: any;
              /** 名称 */
              name: string;
              /** roi */
              roi2_goal: number;
              /** 触发方式 */
              trigger_mode: any;
              updated_at: string;
              /** 用户信息 */
              user: any;
        }
        interface QueryAutoDownLossLogResp {
              /** 亏损关停日志 */
              auto_down_loss_logs: AutoDownLossLog[];
              /** 亏损关停模式 */
              auto_down_loss_model: any;
              /** total */
              total: number;
        }
        interface QueryAutoDownLossResp {
              /** 亏损关停列表 */
              list: QueryAutoDownLossInner[];
              /** total */
              total: number;
        }
        interface QueryAutoHotItemInner {
              /** 爆单通知模式 */
              auto_hot_item_model: any;
              created_at: string;
              /** 爆单通知id */
              id: number;
              /** 是否开启 */
              is_enable: boolean;
              /** 营销目标(如为空则代表全部) */
              marketing_goal: any;
              /** 名称 */
              name: string;
              /** roi */
              roi2_goal: number;
              /** 触发方式 */
              trigger_mode: any;
              updated_at: string;
              /** 用户信息 */
              user: any;
        }
        interface QueryAutoHotItemLogResp {
              /** 爆单通知日志 */
              auto_hot_item_logs: AutoHotItemLog[];
              /** 爆单通知模式 */
              auto_hot_item_model: any;
              /** total */
              total: number;
        }
        interface QueryAutoHotItemResp {
              /** 爆单通知列表 */
              list: QueryAutoHotItemInner[];
              /** total */
              total: number;
        }
        interface QueryAwemeCategoryTopAuthorInner {
              /** 抖音作者名 */
              author_name: string;
              /** 抖音头像 */
              avatar: string;
              /** 抖音id */
              aweme_id: string;
              /** 抖音分类 */
              category_name: string;
              /** 覆盖人群数(入參必须传behaviors才会返回该数据) */
              cover_num_str: string;
              /** 抖音号id */
              label_id: number;
              /** 粉丝数 */
              total_fans_num_str: string;
        }
        interface QueryAwemeCategoryTopAuthorReq {
              /** 广告主ids */
              advertiser_ids: number[];
              /** 抖音用户行为类型 */
              behaviors: FlowAwemeFanBehaviors[];
              /** 类目id，一级，二级，三级类目id均可 */
              category_id: number;
        }
        interface QueryAwemeCategoryTopAuthorResp {
              /** 抖音达人列表 */
              authors: QueryAwemeCategoryTopAuthorInner[];
        }
        interface QueryAwemeInfoSearchReq {
              /** 广告主ids */
              advertiser_ids: number[];
              /** 抖音用户行为类型 */
              behaviors: FlowAwemeFanBehaviors[];
              /** 搜索词 */
              query_word: string;
        }
        interface QueryAwemeInfoSearchResp {
              /** 抖音达人列表 */
              authors: QueryAwemeSimilarAuthorSearchInner[];
              /** 类目列表 */
              categories: QueryAwemeMultiLevelCategoryInner[];
        }
        interface QueryAwemeMultiLevelCategoryInner {
              /** 子集分类信息 */
              children: QueryAwemeMultiLevelCategoryInner[];
              /** 覆盖人群数(入參必须传behaviors才会返回该数据) */
              cover_num_str: string;
              /** 粉丝数 */
              fans_num_str: string;
              /** 抖音类目分类id */
              id: number;
              /** 抖音类目名称 */
              value: string;
        }
        interface QueryAwemeMultiLevelCategoryReq {
              /** 广告主ids */
              advertiser_ids: number[];
              /** 抖音用户行为类型 */
              behaviors: FlowAwemeFanBehaviors[];
        }
        interface QueryAwemeMultiLevelCategoryResp {
              /** 类目列表 */
              categories: QueryAwemeMultiLevelCategoryInner[];
        }
        interface QueryAwemeSimilarAuthorSearchInner {
              /** 抖音作者名 */
              author_name: string;
              /** 抖音头像 */
              avatar: string;
              /** 抖音id */
              aweme_id: string;
              /** 抖音分类 */
              category_name: string;
              /** 覆盖人群数(入參必须传behaviors才会返回该数据) */
              cover_num_str: string;
              /** 抖音号id */
              label_id: number;
              /** 粉丝数 */
              total_fans_num_str: string;
        }
        interface QueryAwemeSimilarAuthorSearchReq {
              /** 广告主ids */
              advertiser_ids: number[];
              /** 抖音id */
              aweme_id: string;
              /** 抖音用户行为类型 */
              behaviors: FlowAwemeFanBehaviors[];
        }
        interface QueryAwemeSimilarAuthorSearchResp {
              /** 广告数组 */
              list: QueryAwemeSimilarAuthorSearchInner[];
        }
        interface QueryNotificationReportLogInner {
              /** 创建时间 */
              created_at: string;
              /** 数据维度 （个人/项目/部门/企业） */
              data_dimension: any;
              /** 错误信息 */
              error_message: string;
              /** 日志id */
              id: number;
              /** 是否发生错误 */
              is_error: boolean;
              /** 通知用户集合(包含角色涉及的用户) */
              notification_users: BasicUserInfo[];
              /** 报告类型 （小时报/日报/周报/月报） */
              report_type: any;
              /** 规则名称 */
              rule_name: string;
              /** 选定维度集合 */
              selected_dimension_names: string[];
        }
        interface QueryNotificationReportLogReq {
              /** 数据维度 */
              data_dimensions: SubscribeDataDimension[];
              /** 结束时间 支持2006-01-02、2006-01-02 15:04等格式 */
              end_time: string;
              limit: number;
              /** 通知规则ID */
              notification_report_rule_id: number;
              offset: number;
              /** 报表类型 */
              report_types: SubscribeReportType[];
              /** 规则名称 */
              rule_name: string;
              /** 开始时间 支持2006-01-02、2006-01-02 15:04等格式 */
              start_time: string;
        }
        interface QueryNotificationReportLogResp {
              /** 列表 */
              list: QueryNotificationReportLogInner[];
              /** 总数 */
              total: number;
        }
        interface QueryNotificationReportRuleInner {
              /** 创建时间 */
              created_at: string;
              /** 创建者 */
              creator: any;
              /** 数据维度 （个人/项目/部门/企业） */
              data_dimension: any;
              /** id */
              id: number;
              /** 通知用户集合(包含角色涉及的用户) */
              notification_users: QueryNotificationReportRuleInnerUserInfo[];
              /** 报告类型 （小时报/日报/周报/月报） */
              report_type: any;
              /** 规则开关 */
              rule_enabled: boolean;
              /** 规则名称 */
              rule_name: string;
              /** 选定维度集合 */
              selected_dimension_names: string[];
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
              /** 创建者hashID */
              creator_id: string;
              /** 数据维度 */
              data_dimensions: SubscribeDataDimension[];
              limit: number;
              offset: number;
              /** 报表类型 */
              report_types: SubscribeReportType[];
              /** 规则开关 */
              rule_enabled: boolean;
              /** 规则名称 */
              rule_name: string;
        }
        interface QueryNotificationReportRuleResp {
              list: QueryNotificationReportRuleInner[];
              total: number;
        }
        interface QueryNotificationResp {
              notifications: AdminNotification[];
        }
        interface QueryOrientationTemplateInner {
              /** 广告主列表 */
              advertiser_names: string[];
              /** 营销场景 */
              campaign_scene: any;
              /** 创建时间 */
              created_at: string;
              /** 定向包模板id */
              id: number;
              /** 是否收藏 */
              is_collect: boolean;
              /** 是否启用 */
              is_enable: boolean;
              /** 推广方式 */
              lab_ad_type: any;
              /** 投放目标 */
              marketing_goal: any;
              /** 广告类型 */
              marketing_scene: any;
              /** 名称 */
              name: string;
              /** 来源平台名称 */
              source_platform_name: string;
              /** 团队详情（仅当团队模板时生效） */
              team: any;
              /** 模板类型 */
              template_type: any;
              /** 修改时间 */
              updated_at: string;
              /** 用户详情 */
              user: any;
        }
        interface QueryOrientationTemplateReq {
              /** 广告账户 */
              advertiser_ids: number[];
              /** 营销场景 */
              campaign_scene: any;
              /** 是否收藏 */
              is_collect: boolean;
              /** 推广方式 */
              lab_ad_type: any;
              limit: number;
              /** 投放目标 */
              marketing_goal: any;
              /** 广告类型 */
              marketing_scene: any;
              /** 搜索模板 */
              name: string;
              offset: number;
              /** 团队ids */
              team_ids: number[];
              /** 模板类型 */
              template_type: any;
        }
        interface QueryOrientationTemplateResp {
              /** 模板列表 */
              orientation_templates: QueryOrientationTemplateInner[];
              /** total */
              total: number;
        }
        interface QueryToolsInterestActionItem {
              /** 类别 */
              category_keyword_type: any;
              /** 子类 */
              children: QueryToolsInterestActionItem[];
              /** id */
              id: string;
              /** 名称 */
              name: string;
              /** 数量 */
              num: string;
        }
        interface QueryToolsInterestActionReq {
              /** 行为天数 */
              action_days: any;
              /** 行为场景 */
              action_scene: FlowActionScene[];
              /** 广告主ids */
              advertiser_ids: number[];
              /** 查询的类型 */
              interest_action_type: any;
              /** 是否混合 */
              is_blend: boolean;
              /** 关键词 */
              query_words: string;
        }
        interface QueryToolsInterestActionResp {
              /** 列表 */
              list: QueryToolsInterestActionItem[];
        }
        interface QueryUniLiveInner {
              /** 计划id */
              ad_id: number;
              /** 广告账户id */
              advertiser_id: number;
              /** 广告账户名称 */
              advertiser_name: string;
              /** 抖音号id */
              aweme_id: number;
              /** 抖音号名称 */
              aweme_name: string;
              /** 预算，单位元，最多支持两位小数 */
              budget: number;
              /** 创建/编辑状态 */
              created_or_updated_status: any;
              /** 创建/编辑提示信息 */
              created_or_updated_status_msg: string;
              /** id */
              id: number;
              /** 是否启用 */
              is_enable: boolean;
              /** 是否重复规划 */
              is_repeat_schedule: boolean;
              /** 支付ROI目标，单位元，最多支持两位小数 */
              roi2_goal: number;
              /** 投放场景（出价方式） */
              smart_bid_type: any;
              /** 整体消耗，单位元，小数点2位 */
              stat_cost: number;
              /** 数据起始时间 */
              stat_datetime: string;
              /** 推广状态 */
              status: any;
              /** 明日规划 */
              tomorrow_schedule: string;
              /** 整体成交订单成本 */
              total_cost_per_pay_order_for_roi2: number;
              /** 整体成交订单数 */
              total_pay_order_count_for_roi2: number;
              /** 整体成交智能优惠券金额，单位元，小数点2位 */
              total_pay_order_coupon_amount_for_roi2: number;
              /** 整体成交金额，单位元，小数点2位 */
              total_pay_order_gmv_for_roi2: number;
              /** 整体支付ROI */
              total_prepay_and_pay_order_roi2: number;
              /** 整体预售订单数 */
              total_prepay_order_count_for_roi2: number;
              /** 整体预售订单金额，单位元，小数点2位 */
              total_prepay_order_gmv_for_roi2: number;
              /** 整体未完结预售订单预估金额，单位元，小数点2位 */
              total_unfinished_estimate_order_gmv_for_roi2: number;
        }
        interface QueryUniLiveResp {
              /** 计划列表 */
              records: QueryUniLiveInner[];
              /** 统计数据 */
              summary: any;
              /** total */
              total: number;
        }
        interface QueryUnreadNotificationResp {
              /** 所有未读消息总数 */
              total: number;
              unread_notifications: NotificationRecord[];
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
              /** 通知类型 */
              notification_type: number;
        }
        interface ReadNotificationReq {
              id: string;
              /** 通知类型 */
              notification_type: number;
        }
        interface RefrenceContent {
              /** 内容分类 */
              catalog: string;
              /** 参考内容hash id */
              content_id: string;
              /** 参考内容类型：upload（上传）、relate（关联内容）、link（外部链接） */
              content_type: any;
              /** 参考内容名称 */
              name: string;
              /** oss 的文件 key ，例如 20250801/oss90daa1d78dad72b4af427e16db05b16b.mp4 */
              oss_file_key: string;
              /** 参考内容url */
              url: string;
        }
        interface RefreshPreSignUrlReq {
              /** 文件类型，例如 video audio image */
              catalog: string;
              /** 文件名称 例如 测试视频.mp4 */
              filename: string;
              /** 文件大小 */
              filesize: number;
              /** 文件类型，例如 video/mp4 */
              filetype: string;
              oss_file_key: string;
              upload_uid: string;
        }
        interface RemoveUsersFromRoleReq {
              /** 角色 ID */
              role_id: number;
              /** 用户 hash id 数组 */
              user_ids: string[];
        }
        interface ReplacementAdvertiserReq {
              /** 广告账户id */
              advertiser_ids: number[];
              /** 平台 */
              platform_list: FlowPlatformType[];
              /** 团队id */
              team_id: number;
        }
        enum ResourceRoleSetType {
              VALUE_1 = 1,
              VALUE_2 = 2,
        }
        interface Role {
              /** 公司ID */
              company_id: number;
              created_at: string;
              /** 创建人 */
              creator: number;
              id: number;
              /** 是否是超管 */
              is_admin: number;
              /** 角色名称 */
              name: string;
              updated_at: string;
        }
        interface RoleAdminPermissionsResp {
              /** 系统所有的权限 key 树级结构 */
              admin_permissions: AdminPermission[];
              /** 是否是超管 */
              is_admin: number;
              /** 系统公共的权限 key */
              public_permission_keys: string[];
              /** 当前角色拥有的权限 key */
              role_permission_keys: string[];
        }
        interface RoleChooseListItem {
              id: number;
              name: string;
        }
        interface ScriptCatalogListItem {
              /** 组织id */
              company_id: number;
              created_at: string;
              /** 创建用户id */
              creator: number;
              creator_info: BasicUserInfo;
              id: number;
              /** 脚本类型名称 */
              name: string;
              /** 排序序号 */
              serial_number: number;
              updated_at: string;
        }
        interface ScriptCatalogListResp {
              count: number;
              records: ScriptCatalogListItem[];
        }
        interface SearchKeyword {
              /** 匹配类型，允许值:PHRASE 短语匹配  EXTENSIVE 广泛匹配 PRECISION 精准匹配 */
              match_type: string;
              /** 关键词 长度不超过30，一个汉字长度计为1，一个英文字符长度计为0.5，不能包含emoji */
              word: string;
              /** 关键词id 如果该词来自于推荐词包，那么需要入參关键词ID 注意：词包能力仅支持搜索自定义链路，不支持托管 */
              word_id: number;
              /** 词包ID 如果该词来自于推荐词包，那么需要入參词包ID 注意：词包能力仅支持搜索自定义链路，不支持托管 */
              word_package_id: number;
              /** 词包名称 注意：词包能力仅支持搜索自定义链路，不支持托管 */
              word_package_name: string;
        }
        interface ShareControlReq {
              cooperation_source_share_limit_day: string;
              movie_share_limit_day: string;
              own_source_share_limit_day: string;
              reference_source_share_limit_day: string;
        }
        interface ShowRangeReq {
              show_range: string;
        }
        interface SortTargetInfo {
              /** 是否隐藏 */
              hide: boolean;
              /** 目标项 */
              item: string;
        }
        interface SubmitSetting {
              /** 批量提交间隔 */
              batches_interval: number;
              /** 批量提交数量 */
              batches_number: number;
              /** 分配规则 */
              flow_allocate_rule: any;
              /** 提交规则 */
              flow_submit_rule: any;
              /** 提交时间的时间戳 */
              flow_submit_time: number;
              /** 组合规则 */
              group_rules: FlowGroupRule[];
              /** 是否批量提交 */
              is_batches: boolean;
              /** 任务名称 */
              task_name: string;
        }
        interface Tag {
              /** 授权开始时间 */
              authorize_begin: number;
              /** 授权结束时间 */
              authorize_end: number;
              /** 所属企业ID */
              company_id: number;
              created_at: string;
              /** 创建者 */
              creator: number;
              id: number;
              /** 标签名称 */
              name: string;
              /** 排序序号 */
              serial_number: number;
              /** 标签状态 1 正常 2 弃用 */
              state: any;
              /** 所属标签组ID */
              tag_group_id: number;
              updated_at: string;
        }
        interface TagGroup {
              /** 所属企业ID */
              company_id: number;
              created_at: string;
              /** 创建者 */
              creator: number;
              id: number;
              /** 标签组名称 */
              name: string;
              /** 个人常用公共标签组关联的分类ID */
              relate_category_id: number;
              /** 排序序号 */
              serial_number: number;
              /** 标签状态 */
              state: any;
              updated_at: string;
        }
        interface TagGroupCategorySettings {
              /** 二级分类id */
              category_id: number;
              /** 二级分类名称 */
              category_name: string;
              /** 是否必填 0 否 1 是 */
              is_required: number;
              /** 一级分类id */
              parent_catagory_id: number;
              /** 一级分类名称 */
              parent_category_name: string;
        }
        interface TagGroupDetailTagItem {
              authorize_begin: number;
              authorize_end: number;
              id: number;
              name: string;
              serial_number: number;
              state: TagState;
        }
        enum TagGroupState {
              VALUE_1 = 1,
              VALUE_2 = 2,
        }
        enum TagGroupType {
              VALUE_1 = 1,
              VALUE_2 = 2,
              VALUE_3 = 3,
              VALUE_4 = 4,
        }
        enum TagState {
              VALUE_1 = 1,
              VALUE_2 = 2,
        }
        enum TagType {
              VALUE_1 = 1,
              VALUE_2 = 2,
              VALUE_3 = 3,
              VALUE_4 = 4,
              VALUE_5 = 5,
              VALUE_6 = 6,
        }
        interface TargetDelivery {
              /** 抖音商品|店铺列表 */
              aweme_producer_and_shops: AdTemplateAwemeProducer[];
              /** 营销场景 */
              campaign_scene: any;
              /** 深度出价类型 */
              deep_bid_type: any;
              /** 深度转化目标 */
              deep_external_action: any;
              /** 转化目标 */
              external_action: any;
              /** 转化目标前端存值 */
              external_action_json: string;
              /** 推广方式 */
              lab_ad_type: any;
              /** 营销目标 */
              marketing_goal: any;
              /** 广告类型 */
              marketing_scene: any;
              /** 新客类型， 店铺新客、抖音号新客、品牌新客 */
              new_customer: any;
        }
        interface TargetInfo {
              /** 目标项 */
              item: string;
              /** 目标值，如果value_type是1，则取值0-100 */
              value: number;
              /** 目标值类型，0 固定值、1 百分比 */
              value_type: number;
              /** 权重 1-100 */
              weight: number;
        }
        interface TeamChooseListItem {
              id: number;
              name: string;
        }
        interface UniAweme {
              /** 抖音号是否禁用 */
              anchor_forbidden: boolean;
              /** 抖音头像 */
              aweme_avatar: string;
              /** 抖音id */
              aweme_id: number;
              /** 抖音名称 */
              aweme_name: string;
              /** 抖音号 */
              aweme_show_id: string;
              /** 抖音号是否可申请 */
              can_apply_uniprom: boolean;
              /** 抖音号是否可管理 */
              can_control_uniprom: boolean;
              /** 是否有直播推广权限 */
              has_live_permission: boolean;
              /** 该抖音号是否有全域推广计划投放 */
              has_roi2_delivery_limit: boolean;
              /** 当前抖音号是否创建过全域推广计划 */
              has_roi2_group_created: boolean;
              /** 是否有商品推广权限 */
              has_shop_permission: boolean;
        }
        interface UniLive {
              /** 广告id */
              ad_id: number;
              /** 广告账户id */
              advertiser_id: number;
              /** 抖音号id */
              aweme_id: number;
              /** 创意设置 */
              creative_setting: any;
              /** 投放设置 */
              delivery_setting: any;
              /** id */
              id: number;
              /** 营销目标 */
              marketing_goal: any;
              /** 操作状态 */
              opt_status: any;
              /** 程序化创意信息 */
              programmatic_creative_media_list: any;
              /** 投放场景（出价方式） */
              smart_bid_type: any;
              /** 投放状态 */
              status: any;
        }
        interface UniLiveBlockVideoMaterialInner {
              /** 抖音视频ID */
              aweme_item_id: number;
              /** 我们系统视频的id */
              material_id: string;
        }
        interface UniLiveBlockVideoMaterialItem {
              duration: number;
              id: number;
              thumb: string;
              title: string;
              url: string;
        }
        interface UniLiveCreativeSetting {
              /** 自选视频 */
              creative_combine_type: boolean;
              /** 直播间画面 */
              creative_combine_typelive: boolean;
              /** 抖音主页可见性设置，和抖音号关系类型相关 */
              hide_in_aweme: boolean;
              /** 智能优选视频 */
              smart_select_material: boolean;
        }
        interface UniLiveDeliverySetting {
              /** 预算，单位元，最多支持两位小数 */
              budget: number;
              /** 投放结束时间，形式如：2017-01-01 */
              end_time: string;
              /** 直播间投放时段选择方式 */
              live_schedule_type: any;
              /** 是否开启智能优惠券 */
              qcpx_mode: any;
              /** 支付ROI目标，单位元，最多支持两位小数 */
              roi2_goal: number;
              /** 投放场景（出价方式） */
              smart_bid_type: any;
              /** 投放起始时间，形式如：2017-01-01 */
              start_time: string;
        }
        interface UniLiveGranularity {
              /** 整体消耗，单位元，小数点2位 */
              stat_cost: number;
              /** 数据起始时间 */
              stat_datetime: string;
              /** 整体成交订单成本 */
              total_cost_per_pay_order_for_roi2: number;
              /** 整体成交订单数 */
              total_pay_order_count_for_roi2: number;
              /** 整体成交智能优惠券金额，单位元，小数点2位 */
              total_pay_order_coupon_amount_for_roi2: number;
              /** 整体成交金额，单位元，小数点2位 */
              total_pay_order_gmv_for_roi2: number;
              /** 整体支付ROI */
              total_prepay_and_pay_order_roi2: number;
              /** 整体预售订单数 */
              total_prepay_order_count_for_roi2: number;
              /** 整体预售订单金额，单位元，小数点2位 */
              total_prepay_order_gmv_for_roi2: number;
              /** 整体未完结预售订单预估金额，单位元，小数点2位 */
              total_unfinished_estimate_order_gmv_for_roi2: number;
        }
        interface UniLiveProgrammaticCreativeMediaList {
              /** 排除抖音主页视频列表 */
              block_video_material: UniLiveBlockVideoMaterialInner[];
              /** 排除抖音主页视频列表回填数据 */
              block_video_material_items: UniLiveBlockVideoMaterialItem[];
              /** 标题信息 */
              title_material: UniLiveTitleMaterialInner[];
              /** 视频信息 */
              video_material: UniLiveVideoMaterialInner[];
              /** 视频信息回填数据 */
              video_material_items: UniLiveVideoMaterialItem[];
        }
        interface UniLiveTitleMaterialInner {
              /** 标题 */
              title: string;
        }
        interface UniLiveVideoMaterialInner {
              /** 抖音视频ID */
              aweme_item_id: number;
              /** 素材类型，支持视频 */
              image_mode: any;
              /** 我们系统视频的id */
              is_transcode: boolean;
              /** 视频封面ID */
              video_cover_id: string;
              /** 视频ID */
              video_id: string;
              /** 视频类型素材 */
              video_material: any;
        }
        interface UniLiveVideoMaterialItem {
              ad_creative: UniLiveVideoMaterialInner;
              alias: string;
              catalog: string;
              duration: number;
              id: string;
              is_transcode: boolean;
              md5: string;
              thumb: string;
              transcode_md5: string;
        }
        interface UpdateAdBasicInfoTemplateReq {
              /** 模板id */
              ad_basic_info_template_id: number;
              /** 广告基础信息详情 */
              detail: any;
              /** 模板类型 */
              template_type: any;
        }
        interface UpdateAdTemplateReq {
              /** 模板id */
              ad_template_id: number;
              /** 模板详情 */
              detail: any;
              /** 模板类型 */
              template_type: any;
        }
        interface UpdateAdminDepartmentReq {
              director: string;
              name: string;
              parent_id: number;
        }
        interface UpdateAdminMaterialStatusReq {
              id: number;
              /** 应用内容设置 */
              material_type_catalog_relations: any;
              name: string;
              serial_number: number;
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
              material_type_catalogs: MaterialCatalogsKeyByTypeMap;
              name: string;
              serial_number: number;
        }
        interface UpdateAutoDownLossReq {
              /** 亏损关停信息 */
              auto_down_loss: any;
              /** 亏损关停id */
              auto_down_loss_id: number;
        }
        interface UpdateAutoHotItemReq {
              /** 爆单通知信息 */
              auto_hot_item: any;
              /** 爆单通知id */
              auto_hot_item_id: number;
        }
        interface UpdateBudgetUniLiveReq {
              /** 预算 */
              budget: number;
              /** 全域推广直播间id */
              uni_live_id: number;
        }
        interface UpdateMyTagGroupReq {
              id: number;
              name: string;
              serial_number: number;
        }
        interface UpdateMyTagReq {
              id: number;
              name: string;
              serial_number: number;
        }
        interface UpdateMyUsedFrequentlyTagGroupReq {
              /** 关联的分类 */
              category_id: number;
              id: number;
              /** 标签组名称 */
              name: string;
              /** 关联的标签 ID 数组 */
              tag_ids: number[];
        }
        interface UpdateNotificationReportRuleReq {
              /** 是否开启飞书通知 */
              feishu_notification_enabled: boolean;
              /** id */
              id: number;
              /** 通知角色ID集合 */
              notification_role_ids: number[];
              /** 通知用户hashID集合 */
              notification_user_ids: string[];
              /** 规则开关 */
              rule_enabled: boolean;
              /** 规则名称 */
              rule_name: string;
              /** 定时任务执行时间 */
              schedule_time: string;
              /** 定选定维度hashID集合（项目ID或部门ID，以JSON格式存储） */
              selected_dimension_ids: string[];
        }
        interface UpdateOrientationTemplateReq {
              /** 模板详情 */
              detail: any;
              /** 模板id */
              orientation_template_id: number;
              /** 模板类型 */
              template_type: any;
        }
        interface UpdateProductReq {
              id: number;
              name: string;
              serial_number: number;
        }
        interface UpdateProtectReq {
              advertiser_ids: number[];
              protect: FlowProtect;
        }
        interface UpdatePublicTagGroupReq {
              name: string;
              serial_number: number;
              /** {category_id:is_required} */
              tag_group_category_settings: Record<string, any>;
              /** 更新标签对象数组 */
              update_tags: TagGroupDetailTagItem[];
        }
        interface UpdateQcDataTableConfReq {
              /** 配置类型  ,bp_promotion_ecp_bidding_account 广告主账户 ,bp_promotion_ecp_bidding_campaign 广告组 ,bp_promotion_ecp_bidding_ad 广告计划 ,bp_promotion_ecp_bidding_material 广告素材,bp_promotion_ecp_bidding_uni_live 全域推广直播间 */
              conf_type: string;
              /** 已选的配置 */
              select_info: any[];
        }
        interface UpdateRoiUniLiveReq {
              /** roi */
              roi2_goal: number;
              /** 全域推广直播间id */
              uni_live_id: number;
        }
        interface UpdateRoleAdminPermissionsReq {
              id: number;
              permission_keys: string[];
        }
        interface UpdateScriptCatalogReq {
              id: number;
              name: string;
              serial_number: number;
        }
        interface UpdateUniLiveReq {
              uni_live: UniLive;
              /** 全域推广直播间id */
              uni_live_id: number;
        }
        interface UpdateUniLiveResp {
              /** 广告计划创建成功后 需要上报给内网服务端 需要上传的素材信息 */
              qianchuan_file_upload_task_params: string;
              /** 上报内网服务端的接口地址 */
              qianchuan_file_upload_task_url: string;
        }
        interface UsedFrequentlyTagGroupItem {
              tag: Tag;
              tag_group: TagGroup;
        }
        interface UsedFrequentlyTagGroupRecord {
              /** 所属企业ID */
              company_id: number;
              created_at: string;
              /** 创建者 */
              creator: number;
              id: number;
              items: UsedFrequentlyTagGroupItem[];
              /** 标签组名称 */
              name: string;
              /** 个人常用公共标签组关联的分类ID */
              relate_category_id: number;
              relate_category_material_catalog: MaterialTypeCatalogRelationMaterialCatalog;
              relate_category_material_type: MaterialTypeCatalogRelationMaterialType;
              /** 排序序号 */
              serial_number: number;
              /** 标签状态 */
              state: any;
              updated_at: string;
        }
        interface UserBasicInfoUpdateReq {
              avatar: string;
              name: string;
              /** 剪映密码 */
              password: string;
              /** 剪映用户名 */
              username: string;
        }
        interface UserClientQianchuanFileUploadCallbackReq {
              /** 加密后的请求数据 */
              signature_data: string;
        }
        interface UserCompanies {
              /** 1 审核中 2 审核通过 3 审核拒绝 */
              audit_status: number;
              /** 关联类型：inner（组织内成员）、outer（外部联系人） */
              catalog: string;
              /** 企业 ID */
              company_id: string;
              company_name: string;
              /** 是否是创建人 */
              is_creator: boolean;
              /** 是否是负责人 */
              is_director: boolean;
              /** 是否是上次登录的企业 */
              is_last_login: boolean;
        }
        interface UserInfoDepartment {
              id: number;
              name: string;
              path: string[];
        }
        interface UserInfoResp {
              /** 用户头像 */
              avatar: string;
              /** 所在公司/组织 */
              companies: any;
              /** 部门信息 */
              departments: UserInfoDepartment[];
              /** 用户 ID */
              id: string;
              /** 内部域名（文件上传域名） */
              inner_domain: string;
              /** 姓名 */
              name: string;
              /** 外部域名（文件上传域名） */
              outer_domain: string;
              /** 密码 */
              password: string;
              /** 权限keys */
              permission_keys: string[];
              request_body: string;
              /** 请求内网，同步复制到剪印用户名密码 */
              request_url: string;
              /** 拥有的角色 */
              roles: IdName[];
              saas_fs_domain: string;
              /** 个人统计配置项 */
              stats_config: PersonalStatsConfig[];
              /** 所在团队 */
              teams: IdName[];
              /** 手机号 */
              tel: string;
              /** 用户端磁盘挂载工具版本 */
              terminal_version: string;
              /** 用户名 */
              username: string;
              /** 微信名称 */
              wechat_alias: string;
        }
        interface UserInviteInfoResp {
              /** 是否需要审核才能加入 0 否 1 是 */
              audit_switch: number;
              /** inner 内部组织对应邀请加入内部（标识为企业） ，outer 外部联系人（标识为协同） */
              catalog: string;
              /** 公司名称 */
              company_name: string;
              /** 用于展示邀请者的基本信息 */
              inviter_info: any;
        }
        interface UserSelectSearchDepartmentItem {
              id: number;
              name: string;
        }
        interface UserSelectSearchReq {
              all: number;
              catalog: string;
              keyword: string;
              parent_department_id: number;
              parent_team_id: number;
              project_id: string;
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
              /** 抖音视频ID */
              aweme_item_id: number;
              /** 我们系统视频的id */
              material_id: string;
              /** 视频封面ID */
              video_cover_id: string;
              /** 视频ID */
              video_id: string;
        }
        interface VideoOrientationTemplate {
              /** 网络类型,不传值或者全传为全选 */
              ac: FlowAc[];
              /** 行为类目词 */
              action_categories: number[];
              /** 行为类目词详情 */
              action_categories_items: any;
              /** 用户发生行为天数 */
              action_days: any;
              /** 行为场景 */
              action_scene: FlowActionScene[];
              /** 行为关键词 */
              action_words: number[];
              /** 行为关键词详情 */
              action_words_items: any;
              /** todo 每个账号处理 */
              advertiser_retargeting_tags_setting: Record<string, any>;
              /** 受众年龄区间 */
              age: FlowAge[];
              /** 是否启用智能放量 */
              auto_extend_enabled: any;
              /** 可放开定向列表 */
              auto_extend_targets: FlowAutoExtendTargets[];
              /** 抖音达人ID列表 */
              aweme_fan_accounts: number[];
              /** 抖音达人ID列表详情 */
              aweme_fan_accounts_items: any;
              /** 抖音用户行为类型 */
              aweme_fan_behaviors: FlowAwemeFanBehaviors[];
              /** 抖音达人互动用户行为天数 */
              aweme_fan_behaviors_days: any;
              /** 抖音达人分类ID列表 */
              aweme_fan_categories: number[];
              /** 抖音达人分类ID列表详情 */
              aweme_fan_categories_items: any;
              /** 具体定向的城市列表 */
              city: number[];
              /** 具体定向的城市列表详情 */
              city_items: any;
              /** 地域类型 */
              district: any;
              /** 定向or排除地域 */
              district_type: boolean;
              /** 定向电子围栏地区 */
              electric_fence_region: any;
              /** 排除限运地区 */
              exclude_limited_region: any;
              /** 性别 */
              gender: any;
              /** 兴趣类目词 */
              interest_categories: number[];
              /** 兴趣类目词详情 */
              interest_categories_items: any;
              /** 兴趣关键词 */
              interest_words: number[];
              /** 兴趣关键词详情 */
              interest_words_items: any;
              /** 平台精选人群包，默认为全不选 */
              live_platform_tags: FlowLivePlatformTags[];
              /** 地域定向的用户状态类型 */
              location_type: any;
              /** 更多人群模式， */
              more_people_mode: any;
              /** 新客定向，NO_BUY店铺未购，NONE不限（默认） */
              new_customer: any;
              /** 定向包id */
              orientation_id: number;
              /** 投放平台列表 */
              platform: FlowPlatform[];
              /** 行政区域版本号 */
              region_version: string;
              /** 排除人群包id列表 */
              retargeting_tags_exclude: number[];
              /** 排除人群包id列表详情 */
              retargeting_tags_exclude_items: any;
              /** 定向人群包id列表 */
              retargeting_tags_include: number[];
              /** 定向人群包id列表详情 */
              retargeting_tags_include_items: any;
              /** 搜索定向扩展 */
              search_extended: any;
              /** 行为兴趣意向定向模式 */
              smart_interest_action: any;
        }
        interface Campaign {
              advertiser_id: number;
              budget: number;
              budget_mode: FlowBudgetMode;
              campaign_id: number;
              campaign_name: string;
              created_at: string;
              id: number;
              marketing_goal: FlowMarketingGoal;
              marketing_scene: FlowMarketingScene;
              /** 广告组的状态 ENABLE DISABLE DELETE */
              status: string;
              updated_at: string;
        }
        interface FlowProtect {
              advertiser_id: number;
              /** 直播间商品点击 */
              click_product_action: number;
              /** 直播间评论 */
              comment_live: number;
              company_id: number;
              created_at: string;
              /** 直播间粉丝提升 */
              follow_action: number;
              id: number;
              /** 支付ROI最小支付 */
              pay_roi: number;
              /** 粉丝提升 */
              qc_follow_action: number;
              /** 点赞评论 */
              qc_must_buy: number;
              /** 商品购买 */
              shopping: number;
              /** 直播间下单 */
              successorder_action: number;
              /** 直播间成交 */
              successorder_pay: number;
              /** 直播间结算 */
              successorder_settle: number;
              /** 进入直播间 */
              to_live: number;
              updated_at: string;
        }
        interface JuAdMaterialStatColumns {
              /** 激活数 */
              active: number;
              /** 当日付费金额 */
              attribution_game_in_app_ltv_1day: number;
              /** 激活后一日付费金额 */
              attribution_game_in_app_ltv_2days: number;
              /** 激活后二日付费金额 */
              attribution_game_in_app_ltv_3days: number;
              /** 激活后三日付费金额 */
              attribution_game_in_app_ltv_4days: number;
              /** 激活后四日付费金额 */
              attribution_game_in_app_ltv_5days: number;
              /** 激活后五日付费金额 */
              attribution_game_in_app_ltv_6days: number;
              /** 激活后六日付费金额 */
              attribution_game_in_app_ltv_7days: number;
              /** 激活后七日付费金额 */
              attribution_game_in_app_ltv_8days: number;
              /** 当日付费ROI */
              attribution_game_in_app_roi_1day: number;
              /** 激活后一日付费ROI */
              attribution_game_in_app_roi_2days: number;
              /** 激活后二日付费ROI */
              attribution_game_in_app_roi_3days: number;
              /** 激活后三日付费ROI */
              attribution_game_in_app_roi_4days: number;
              /** 激活后四日付费ROI */
              attribution_game_in_app_roi_5days: number;
              /** 激活后五日付费ROI */
              attribution_game_in_app_roi_6days: number;
              /** 激活后六日付费ROI */
              attribution_game_in_app_roi_7days: number;
              /** 激活后七日付费ROI */
              attribution_game_in_app_roi_8days: number;
              /** 企业微信用户首次消息数(计费时间) */
              attribution_work_wechat_dialog_count: number;
              /** 银行卡信息填写完成数 */
              bankcard_information_count: number;
              /** 用户活体认证信息上传完成数 */
              certification_information_count: number;
              /** 点击数 */
              click_cnt: number;
              /** 平均转化成本 */
              conversion_cost: number;
              /** 转化率 */
              conversion_rate: number;
              /** 转化数 */
              convert_cnt: number;
              /** 平均点击单价(元) */
              cpc_platform: number;
              /** 平均千次展现费用(元) */
              cpm_platform: number;
              /** 点击率 */
              ctr: number;
              /** 评论量 */
              dy_comment: number;
              /** 点赞数 */
              dy_like: number;
              /** 分享量 */
              dy_share: number;
              /** 到课数 */
              first_class_count: number;
              /** 表单提交 */
              form: number;
              /** 高价值授信数 */
              high_loan_credit_count: number;
              /** 微信内付费数 */
              in_wechat_pay_count: number;
              /** 保险支付ROI */
              insurance_lt_roi: number;
              /** 放款数 */
              loan: number;
              /** 完件数 */
              loan_completion: number;
              /** 完件成本 */
              loan_completion_cost: number;
              /** 完件率 */
              loan_completion_rate: number;
              /** 放款成本 */
              loan_cost: number;
              /** 授信数 */
              loan_credit: number;
              /** 授信成本 */
              loan_credit_cost: number;
              /** 授信率 */
              loan_credit_rate: number;
              /** 放款率 */
              loan_rate: number;
              /** 次级授信数 */
              low_loan_credit_count: number;
              /** 开户数 */
              open_account_count: number;
              /** 补充个人信息填写完成数 */
              personal_information_count: number;
              /** 预授信数 */
              pre_loan_credit: number;
              /** 预授信成本 */
              pre_loan_credit_cost: number;
              /** 保险支付成本 */
              premium_payment_cost: number;
              /** 保险支付数 */
              premium_payment_count: number;
              /** 二次课到课数 */
              second_class_count: number;
              /** 展示数 */
              show_cnt: number;
              /** 消耗 */
              stat_cost: number;
              /** 播放量 */
              total_play: number;
              /** 微信取关数 */
              unfollow_in_wechat_count: number;
              /** M2内退保数 */
              withdraw_m2_count: number;
        }
        interface KsNiuMaterialStatColumns {
              /** 素材点击率 素材点击率=行为数/素材曝光数 */
              action_ratio: number;
              /** 行为数 在视频或直播间点击广告的次数（已去重） */
              actionbar_click: number;
              /** 行为成本 行为成本=花费/行为数 */
              actionbar_click_cost: number;
              /** 预约组件点击数 视频转化组件被点击的次数 */
              ad_item_click_count: number;
              /** 直播间人气数 直播间观看次数，包含单列简易直播间的观看 */
              ad_live_play_cnt: number;
              /** 直播间人气成本 直播间观看成本，包含单列简易直播间的观看 */
              ad_live_play_cnt_cost: number;
              /** 曝光数 直播或作品首次曝光的次数 */
              ad_show: number;
              /** 平均千次广告曝光花费 平均千次广告曝光花费=花费/广告曝光*1000 */
              ad_show1k_cost: number;
              /** 作品拉黑数 详情页点击拉黑次数 */
              block: number;
              /** 素材曝光数 视频或直播间素材曝光的次数 */
              click: number;
              /** 作品评论数 详情页点击评论发送次数 */
              comment: number;
              /** 花费 广告在投放期间的花费总额 */
              cost_total: number;
              /** 有效播放数 单列视频播放7秒数&双列视频点击数&开屏视频播放3秒数 */
              effective_play_count: number;
              /** 有效播放率 有效播放率=有效播放数/曝光数 */
              effective_play_ratio: number;
              /** 行为率 行为率=行为数/广告曝光数 */
              esp_click_ratio: number;
              /** 直播平均观看时长 用户在直播间的平均观看时长（单位：秒） */
              esp_live_played_seconds: number;
              /** 直接GMV 通过推广直接带来的商品成交金额，不包含涨粉及后续转化，不剔除售后订单 */
              gmv: number;
              /** 直播间商品点击率 直播间商品点击率=直播间商品点击数/直播观看数 */
              goods_click_ratio: number;
              /** 封面曝光数 视频或直播间封面曝光的次数 */
              impression: number;
              /** 详情页减少此类作品数 详情页点击减少此类作品次数 */
              item_negative: number;
              /** 作品点赞数 点击红心以及双击的次数 */
              likes: number;
              /** 直播观看成本 直播观看成本=花费/直播观看数 */
              live_audience_cost: number;
              /** 直播评论数 直播间的评论次数 */
              live_comment: number;
              /** 直播间商品点击数 直播间商品点击次数 */
              live_event_goods_view: number;
              /** 直播送礼数 直播间的送礼次数 */
              live_reward: number;
              /** 直播送礼数 直播间的分享次数 */
              live_share: number;
              /** 涨粉数 新增粉丝数量 */
              merchant_reco_fans: number;
              /** 直接下单率 直接下单率=直接订单数/行为数 */
              order_ratio: number;
              /** 直接订单数 通过推广直接带来的订单数，不包含涨粉及后续转化，不剔除售后订单 */
              paied_order: number;
              /** 封面点击数 视频或直播间封面被点击的次数 */
              photo_click: number;
              /** 封面点击率 封面点击率=封面点击数/封面曝光数 */
              photo_click_ratio: number;
              /** 作品3秒播放率 作品3秒播放率=作品3s播放数/素材曝光量 */
              play3s_ratio: number;
              /** 作品5秒播放率 作品5秒播放率=作品5s播放数/素材曝光量 */
              play5s_ratio: number;
              /** 作品完播率 作品完播率=作品完播数/素材曝光量 */
              play_end_ratio: number;
              /** 作品完播数 视频播放完成的次数 */
              played_end: number;
              /** 作品5秒播放数 播放视频达到5s的次数 */
              played_five_seconds: number;
              /** 作品3秒播放数 播放视频达到3s的次数 */
              played_three_seconds: number;
              /** 作品举报数 详情页点击举报次数 */
              report: number;
              /** 直播预约成功成本 直播预约成功成本=花费/直播预约成功数 */
              reservation_cost: number;
              /** 直播预约成功数 */
              reservation_success: number;
              /** 直接ROI 直接ROI=直接GMV/花费 */
              roi: number;
              /** 作品分享数 详情页点击转发且成功的次数 */
              share: number;
              /** 直播观看数 直播间的开始播放次数 */
              standard_live_played_started: number;
              /** 15日涨粉留存数 通过广告获得的新增粉丝在投后15日的留存数 */
              t15_retention: number;
              /** 次日涨粉留存数 通过广告获得的新增粉丝在投后1日的留存数 */
              t1_retention: number;
              /** 30日涨粉留存数 通过广告获得的新增粉丝在投后30日的留存数 */
              t30_retention: number;
              /** 7日涨粉留存数 通过广告获得的新增粉丝在投后7日的留存数 */
              t7_retention: number;
        }
        interface NotificationRecord {
              created_at: string;
              /** 全部删除时间 */
              del_time: string;
              /** 通知类型 */
              notification_type: number;
              /** 全部已读时间 */
              read_time: string;
              /** 未读消息数量 */
              total: number;
              updated_at: string;
        }
        interface TxAdMaterialStatColumns {
              /** 目标转化成本。广告主为每个目标转化量付出的费用成本，计算公式是：花费/目标转化量 1.0 * cost / conversions_count */
              conversions_cost: number;
              /** 目标转化量。优化目标的转化量 */
              conversions_count: number;
              /** 目标转化率。优化目标的点击转化率，计算公式是：目标转化量/点击次数*100% 1.0 * conversions_count / valid_click_count */
              conversions_rate: number;
              /** 花费。广告主为广告投放总共付出的费用成本，实际花费请以财务记录为准 */
              cost: number;
              /** 点击均价。广告主为每次点击付出的费用成本，计算公式是：花费/点击次数 1.0 * cost / valid_click_count */
              cpc: number;
              /** 点击率。广告被点击的比率，计算公式是：点击次数/曝光次数*100% 1.0 * valid_click_count / view_count */
              ctr: number;
              /** 深度转化成本。广告主为每个深度目标转化量付出的费用成本，计算公式是：花费/深度目标转化量 1.0 * cost / deep_conversions_count */
              deep_conversions_cost: number;
              /** 深度目标转化量。深度优化目标的转化量（如果没有使用深度转化优化功能，这个指标可能为空） */
              deep_conversions_count: number;
              /** 深度目标转化率。深度优化目标的点击转化率，计算公式是：深度目标转化量/点击次数*100% 1.0 * deep_conversions_count / valid_click_count */
              deep_conversions_rate: number;
              /** 目标转化量（在线预览）。通过广告线上预览功能，带来的广告优化目标达成量 */
              preview_conversions_count: number;
              /** 深度目标转化量（在线预览）。通过广告线上预览功能，带来的广告深度优化目标达成量 */
              preview_deep_conversions_count: number;
              /** 千次展现均价。广告平均每一千次展现所付出的费用，计算公式是：花费/曝光次数*1000 1000.0 * cost / view_count */
              thousand_display_price: number;
              /** 点击次数。广告被用户点击的次数 */
              valid_click_count: number;
              /** 100%进度播放次数。播放进度100%的有效播放量 */
              video_outer_play100_count: number;
              /** 10%进度播放次数。播放进度大于等于10%的有效播放量 */
              video_outer_play10_count: number;
              /** 25%进度播放次数。播放进度大于等于25%的有效播放量 */
              video_outer_play25_count: number;
              /** 3s播放完成次数。有效播放视频，播放进度大于等于3s的有效播放量 */
              video_outer_play3s_count: number;
              /** 50%进度播放次数。播放进度大于等于50%的有效播放量 */
              video_outer_play50_count: number;
              /** 5s播放完成次数。有效播放视频，播放进度大于等于5s的有效播放量 */
              video_outer_play5s_count: number;
              /** 75%进度播放次数。播放进度大于等于75%的有效播放量 */
              video_outer_play75_count: number;
              /** 7s播放完成次数。有效播放视频，播放进度大于等于7s的有效播放量 */
              video_outer_play7s_count: number;
              /** 95%进度播放次数。播放进度大于等于95%的有效播放量 */
              video_outer_play95_count: number;
              /** 有效播放成本。广告主为每次视频有效播放付出的费用成本，计算公式：花费/视频有效播放量 1.0 * cost / video_outer_play_count */
              video_outer_play_cost: number;
              /** 视频有效播放次数。在广告效曝光的前提下产生的视频有效播放数量，视频封面图曝光等场景不计算在内 */
              video_outer_play_count: number;
              /** 有效播放率。曝光有效播放率，计算公式：视频有效播放次数/曝光次数*100% 1.0 * video_outer_play_count / view_count */
              video_outer_play_rate: number;
              /** 曝光次数。广告被展示给用户的次数 */
              view_count: number;
        }
        interface UniMaterialLiveStatColumns {
              /** 基础消耗 */
              basic_stat_cost_for_roi2_v2: number;
              /** 追投调控点击次数 */
              click_cnt_for_roi2_assist: number;
              /** 追投调控转化率 */
              convert_rate_for_roi2_assist: number;
              /** 整体消耗占比 */
              cost_rate_for_roi2: number;
              /** 追投调控点击率 */
              ctr_for_roi2_assist: number;
              /** 旧版追投消耗 */
              heat_stat_cost_for_roi2: number;
              /** 旧版追投成交订单数 */
              heat_total_pay_order_count_for_roi2: number;
              /** 旧版追投成交金额 */
              heat_total_pay_order_gmv_for_roi2: number;
              /** 旧版追投ROI */
              heat_total_prepay_and_pay_order_roi2: number;
              /** 整体转化率 */
              live_convert_rate_for_roi2_v2: number;
              /** 整体点击率 */
              live_cvr_rate_for_roi2_v2: number;
              /** 整体展现次数 */
              live_show_count_for_roi2_v2: number;
              /** 整体点击次数 */
              live_watch_count_for_roi2_v2: number;
              /** 追投调控成交人数 */
              pay_convert_cnt_for_roi2_assist: number;
              /** 追投调控成交成本 */
              pay_convert_cost_for_roi2_assist: number;
              /** 追投调控展示次数 */
              show_cnt_for_roi2_assist: number;
              /** 整体消耗 */
              stat_cost_for_roi2: number;
              /** 追投调控消耗 */
              stat_cost_for_roi2_assist: number;
              /** 整体成交订单成本 */
              total_cost_per_pay_order_for_roi2: number;
              /** 整体成交订单数 */
              total_pay_order_count_for_roi2: number;
              /** 追投调控成交订单数 */
              total_pay_order_count_for_roi2_assist: number;
              /** 整体成交智能优惠券金额 */
              total_pay_order_coupon_amount_for_roi2: number;
              /** 追投调控成交智能优惠券金额 */
              total_pay_order_coupon_amount_for_roi2_assist: number;
              /** 整体成交金额 */
              total_pay_order_gmv_for_roi2: number;
              /** 追投调控成交金额 */
              total_pay_order_gmv_for_roi2_assist: number;
              /** 整体成交金额占比 */
              total_pay_order_gmv_rate_for_roi2: number;
              /** 整体支付ROI */
              total_prepay_and_pay_order_roi2: number;
              /** 追投调控支付ROI */
              total_prepay_and_pay_order_roi2_assist: number;
              /** 整体预售订单数 */
              total_prepay_order_count_for_roi2: number;
              /** 整体预售订单金额 */
              total_prepay_order_gmv_for_roi2: number;
              /** 整体未完结预售订单预估金额 */
              total_unfinished_estimate_order_gmv_for_roi2: number;
              /** 追投调控未完结预售订单预估金额 */
              total_unfinished_estimate_order_gmv_for_roi2_assist: number;
              /** 平均观看时长 */
              video_avg_watch_duration_for_roi2: number;
              /** 视频评论数 */
              video_comment_count_for_roi2_v2: number;
              /** 新增粉丝数 */
              video_follow_count_for_roi2: number;
              /** 视频点赞数 */
              video_like_count_for_roi2: number;
              /** 视频播放数 */
              video_play_count_for_roi2_v2: number;
              /** 10秒播放率 */
              video_play_duration_10s_rate_for_roi2: number;
              /** 2秒播放率 */
              video_play_duration_2s_rate_for_roi2: number;
              /** 3秒播放率 */
              video_play_duration_3s_rate_for_roi2: number;
              /** 5秒播放率 */
              video_play_duration_5s_rate_for_roi2: number;
              /** 视频完播数 */
              video_play_finish_count_for_roi2_v2: number;
              /** 视频完播率 */
              video_play_finish_rate_for_roi2_v2: number;
        }
        interface UniMaterialProductStatColumns {
              /** 整体点击次数 */
              product_click_count_for_roi2: number;
              /** 整体转化率 */
              product_convert_rate_for_roi2: number;
              /** 整体点击率 */
              product_cvr_rate_for_roi2: number;
              /** 整体展示次数 */
              product_show_count_for_roi2: number;
              /** 整体消耗 */
              stat_cost_for_roi2: number;
              /** 整体成交订单成本 */
              total_cost_per_pay_order_for_roi2: number;
              /** 整体成交订单数 */
              total_pay_order_count_for_roi2: number;
              /** 整体成交智能优惠券金额 */
              total_pay_order_coupon_amount_for_roi2: number;
              /** 整体成交金额 */
              total_pay_order_gmv_for_roi2: number;
              /** 整体支付ROI */
              total_prepay_and_pay_order_roi2: number;
              /** 整体未完结预售订单预估金额 */
              total_unfinished_estimate_order_gmv_for_roi2: number;
              /** 平均观看时长 */
              video_avg_watch_duration_for_roi2: number;
              /** 视频评论数 */
              video_comment_count_for_roi2_v2: number;
              /** 新增粉丝数 */
              video_follow_count_for_roi2: number;
              /** 视频点赞数 */
              video_like_count_for_roi2: number;
              /** 视频播放数 */
              video_play_count_for_roi2_v2: number;
              /** 10秒播放率 */
              video_play_duration_10s_rate_for_roi2: number;
              /** 2秒播放率 */
              video_play_duration_2s_rate_for_roi2: number;
              /** 3秒播放率 */
              video_play_duration_3s_rate_for_roi2: number;
              /** 5秒播放率 */
              video_play_duration_5s_rate_for_roi2: number;
              /** 视频完播率 */
              video_play_finish_rate_for_roi2_v2: number;
        }
        interface GetContentDownloadUrlResp {
              download_oss_urls: string[];
              download_url: string;
              request_body: string;
        }
        interface GetMaterialStatReq {
              /** 内容类型：video（视频）、vcollection（合集）、audio（音频）、image（图片）、script（脚本）、doc（文案） */
              catalog: string;
              /** 内容分类id */
              category_ids: number[];
              /** 排序方式：true（降序）、false（升序） */
              desc: boolean;
              /** 结束日期（0点），unix时间戳秒 */
              end_time: number;
              /** 统计项 */
              items: string[];
              /** 公共标签id */
              label_ids: number[];
              limit: number;
              offset: number;
              /** 排序字段 */
              order_by: string;
              /** 统计数据平台类型：0 千川标准、1 千川全域推商品、2 千川全域推直播间、3 巨量广告 */
              platform_type: any;
              /** 项目hash id */
              project_id: string;
              /** 后端自用字段。 */
              retain_1: boolean;
              /** 后端自用字段。 */
              retain_2: number[];
              /** 后端自用字段。 */
              retain_3: Record<string, any>;
              /** 后端自用字段。 */
              retain_4: number;
              /** 开始日期（0点），unix时间戳秒 */
              start_time: number;
              /** 统计目标类型：0 个人、1 用户、2 团队、3 部门 */
              target_type: any;
              /** 统计目标id/hash id数组 */
              targets: string[];
        }
        interface GetMaterialTotalStatResp {
              records: MaterialTotalStatInfo[];
        }
        interface SimpleTargetInfo {
              /** 名称 */
              name: string;
              /** id获取hash id */
              target_id: string;
        }
        interface SimpleUserInfo {
              alias: string;
              avatar: string;
              /** 查卡片信息hash id */
              card_id: string;
              id: string;
              /** 1 个人、2 团队、3 部门、4 项目组 */
              target_type: number;
        }
        interface UploadFileInfo {
              /** 是否上传完成 */
              finished: boolean;
              /** 文件名称 */
              name: string;
              /** oss uid */
              oss_uid: string;
              /** 上传内容uid */
              uid: string;
              /** 文件上传地址 */
              upload_url: string;
        }
        interface GetContentDownloadUrlResp {
              download_url: string;
              request_body: string;
        }
        interface SimpleTargetInfo {
              /** 名称 */
              name: string;
              /** id或者hash id */
              target_id: string;
        }
        interface SimpleUserInfo {
              alias: string;
              avatar: string;
              id: string;
        }
        interface UploadFileInfo {
              /** 文件名称 */
              name: string;
              /** 文件上传地址 */
              upload_url: string;
        }
        enum FlowPlatformType {
              VALUE__1 = -1,
              VALUE_1 = 1,
              VALUE_2 = 2,
              VALUE_3 = 3,
              VALUE_4 = 4,
              VALUE_5 = 5,
        }
        interface CheckGroupInfo {
              /** 统计字段 */
              fields: StatFieldInfo[];
              /** 全选按钮组名称 */
              name: string;
        }
        interface GetStatFieldResp {
              /** 默认统计字段 */
              default_fileds: StatFieldInfo[];
              /** 分组字段 */
              groups: StatGroupInfo[];
        }
        interface StatFieldInfo {
              /** 全选字段名称 */
              check_group: string;
              /** 中文字段 */
              chinese_field: string;
              /** 是否默认 */
              default_flag: number;
              /** 英文字段 */
              english_field: string;
              /** 标签分组名称 */
              label_group: string;
              /** 统计点 */
              stat_dot: string;
        }
        interface StatGroupInfo {
              /** 全选按钮组列表 */
              check_groups: CheckGroupInfo[];
              /** 分组名称 */
              name: string;
        }
        enum QianchuanAdRecommendKeywordsGetV10DataListSuggestReason {
              CLICK = "CLICK",
              DARKHORSE = "DARKHORSE",
              LOW_COST = "LOW_COST",
              POTENTIAL = "POTENTIAL",
              PREFERENCE = "PREFERENCE",
        }
        interface QianchuanAdRecommendKeywordsGetV10ResponseDataListInner {
              /** 竞争程度 */
              degree: number;
              /** 关键词 */
              keyword: string;
              /** 月搜索量 */
              search_sum: number;
              suggest_reason: QianchuanAdRecommendKeywordsGetV10DataListSuggestReason;
        }
        enum QianchuanDmpAudiencesGetV10DataRetargetingTagsHasOfflineTag {
              VALUE_0 = 0,
              VALUE_1 = 1,
        }
        enum QianchuanDmpAudiencesGetV10DataRetargetingTagsIsCommon {
              VALUE_0 = 0,
              VALUE_1 = 1,
        }
        enum QianchuanDmpAudiencesGetV10DataRetargetingTagsRetargetingTagsOp {
              ALL = "ALL",
              EXCLUDE = "EXCLUDE",
              INCLUDE = "INCLUDE",
        }
        enum QianchuanDmpAudiencesGetV10DataRetargetingTagsSource {
              CUSTOM_AUDIENCE_TYPE_BRAND = "CUSTOM_AUDIENCE_TYPE_BRAND",
              CUSTOM_AUDIENCE_TYPE_DATA_SOURCE = "CUSTOM_AUDIENCE_TYPE_DATA_SOURCE",
              CUSTOM_AUDIENCE_TYPE_DOU_PLUS = "CUSTOM_AUDIENCE_TYPE_DOU_PLUS",
              CUSTOM_AUDIENCE_TYPE_EXTEND = "CUSTOM_AUDIENCE_TYPE_EXTEND",
              CUSTOM_AUDIENCE_TYPE_FRIEND = "CUSTOM_AUDIENCE_TYPE_FRIEND",
              CUSTOM_AUDIENCE_TYPE_ONE_KEY = "CUSTOM_AUDIENCE_TYPE_ONE_KEY",
              CUSTOM_AUDIENCE_TYPE_OPERATE = "CUSTOM_AUDIENCE_TYPE_OPERATE",
              CUSTOM_AUDIENCE_TYPE_PACK_RULE = "CUSTOM_AUDIENCE_TYPE_PACK_RULE",
              CUSTOM_AUDIENCE_TYPE_RULE = "CUSTOM_AUDIENCE_TYPE_RULE",
              CUSTOM_AUDIENCE_TYPE_THEME = "CUSTOM_AUDIENCE_TYPE_THEME",
              CUSTOM_AUDIENCE_TYPE_THIRD_PARTY = "CUSTOM_AUDIENCE_TYPE_THIRD_PARTY",
              CUSTOM_AUDIENCE_TYPE_UPLOAD = "CUSTOM_AUDIENCE_TYPE_UPLOAD",
              FINANCECUSTOM_AUDIENCE_TYPE_FINANCE = "FINANCECUSTOM_AUDIENCE_TYPE_FINANCE",
        }
        interface QianchuanDmpAudiencesGetV10ResponseData {
              offset: number;
              retargeting_tags: QianchuanDmpAudiencesGetV10ResponseDataRetargetingTagsInner[];
              total_num: number;
        }
        interface QianchuanDmpAudiencesGetV10ResponseDataRetargetingTagsInner {
              cover_num: number;
              has_offline_tag: QianchuanDmpAudiencesGetV10DataRetargetingTagsHasOfflineTag;
              is_common: QianchuanDmpAudiencesGetV10DataRetargetingTagsIsCommon;
              name: string;
              retargeting_tags_id: number;
              retargeting_tags_op: QianchuanDmpAudiencesGetV10DataRetargetingTagsRetargetingTagsOp;
              retargeting_tags_tip: string;
              source: QianchuanDmpAudiencesGetV10DataRetargetingTagsSource;
              status: number;
        }
        interface QianchuanToolsEstimateAudienceV10ResponseData {
              crowd_cover_total: number;
              show_cnt_total: number;
        }
        enum QianchuanVideoGetV10DataListImageMode {
              LARGE = "LARGE",
              LARGE_VERTICAL = "LARGE_VERTICAL",
              SMALL = "SMALL",
              UNION_SPLASH = "UNION_SPLASH",
              VIDEO_LARGE = "VIDEO_LARGE",
              VIDEO_VERTICAL = "VIDEO_VERTICAL",
        }
        enum QianchuanVideoGetV10DataListSource {
              AGENT = "AGENT",
              ARTHUR = "ARTHUR",
              AUTO_GENERATE = "AUTO_GENERATE",
              BP = "BP",
              CREATIVE_CENTER = "CREATIVE_CENTER",
              E_COMMERCE = "E_COMMERCE",
              JI_CHUANG = "JI_CHUANG",
              LIVE_HIGHLIGHT = "LIVE_HIGHLIGHT",
              QUNFENG = "QUNFENG",
              STAR = "STAR",
              TADA = "TADA",
              VIDEO_CAPTURE = "VIDEO_CAPTURE",
        }
        interface AddCollectionReq {
              /** 内容hash id|分享hash id */
              ids: string[];
              /** 来源： movie（成片）、own（企业（自有）素材）、cooperation（合作素材）、reference（对标素材）、inner_share（内部分享）、outer_share（外部分享） */
              source: any;
        }
        interface AddContentAttachmentReq {
              /** 文件列表 */
              files: UploadFileInfo[];
              /** 内容hash id */
              id: string;
        }
        interface AddContentManualLabelReq {
              /** 内容hash id */
              ids: string[];
              /** 个人标签id，多个逗号分隔 */
              private_label: string;
              /** 公共标签id，多个逗号分隔 */
              publish_label: string;
        }
        interface AddContentToInventoryReq {
              /** 内容hash id */
              ids: string[];
        }
        interface AddContentToPkListReq {
              /** 视频hash id */
              ids: string[];
              /** 历史清单hash id，为空表示操作临时清单 */
              list_id: string;
        }
        interface AddContentToRecycleReq {
              /** 内容hash id */
              ids: string[];
        }
        interface AddInnerShareReq {
              /** 分享指定部门，部门id数组 */
              assign_department: string[];
              /** 分享指定项目组，项目组id数组 */
              assign_group: string[];
              /** 分享指定团队，团队id数组 */
              assign_team: string[];
              /** 分享指定个人，用户hash id数组 */
              assign_user: string[];
              /** 分享内容hash_id */
              content_ids: string[];
              /** 过期时间 */
              expires_at: number;
              /** 通知内容 */
              notice_message: string;
              /** 项目hash id */
              project_id: string;
              /** 分享标题 */
              title: string;
        }
        interface AddMovieHistoryReq {
              /** 文件列表 */
              file: any;
              /** 成片hash id */
              id: string;
              /** 成片状态id */
              status_id: number;
        }
        interface AddMovieRelationReq {
              /** 素材hash id */
              material_ids: string[];
              /** 成片hash id */
              movie_id: string;
        }
        interface AddNotifyChannelReq {
              /** 通知渠道列表 */
              channels: Record<string, any>[];
        }
        interface AddOuterShareReq {
              /** 访问次数限制 */
              access_times_limit: number;
              /** 是否可以批注 */
              can_annotation: boolean;
              /** 是否可以下载原视频 */
              can_download_origin: boolean;
              /** 是否可以下载转码后视频 */
              can_download_transcode: boolean;
              /** 是否可以数据复盘 */
              can_review: boolean;
              /** 是否可以更新视频状态 */
              can_update: boolean;
              /** 分享内容hash_id */
              content_ids: string[];
              /** 过期时间 */
              expires_at: number;
              /** 分享链接访问码 */
              password: string;
              /** 项目hash id */
              project_id: string;
              /** 分享标题 */
              title: string;
        }
        interface AddProjectCommentReq {
              /** 附件 */
              attachment: UploadFileInfo[];
              /** 动态/回复内容 */
              content: string;
              /** 目标状态，默认正常 */
              status: any;
              /** 项目hash id|拆解目标hash id */
              target_id: string;
              /** 目标类型：1 项目、2 拆解目标 */
              target_type: number;
        }
        interface AddProjectFileReq {
              /** 指定部门id */
              assign_department: string[];
              /** 指定项目组id */
              assign_group: string[];
              /** 指定团队id */
              assign_team: string[];
              /** 指定用户hash id */
              assign_users: string[];
              /** 自动关联素材 */
              auto_relation: boolean;
              /** 文件列表 */
              files: UploadFileInfo[];
              /** 成片hash id */
              id: string;
              /** 下载权限：self（我自己）、open（公开）、assign（指定用户） */
              permission_type: string;
        }
        interface AddProjectRoleReq {
              /** 权限列表 */
              permissions: string[];
              /** 项目hash id */
              project_id: string;
              /** 角色名称 */
              role_name: string;
        }
        interface AddProjectUserReq {
              /** 部门id数组 */
              department_ids: number[];
              /** inner 内部用户，outer 外部用户 */
              member_type: string;
              /** 项目hash id */
              project_id: string;
              /** 团队id数组 */
              team_ids: number[];
              /** 用户hash id数组 */
              user_ids: string[];
        }
        interface AddVideoCommentReq {
              /** 附件 */
              attachment: any;
              /** 批注内容 */
              content: string;
              /** 批注结束第几秒 */
              end_second: number;
              /** 内容hash id */
              id: string;
              /** 批注图片信息 */
              image_meta: string;
              /** 批注标签id */
              label_id: number;
              /** 提及用户，用户hash id数组 */
              refer_users: string[];
              /** 批注开始第几秒 */
              start_second: number;
              /** 历史版本上传uid */
              upload_uid: string;
              /** 查看权限，type 取值：assign（指定）、open（公开）、company（组织可见） */
              view_permission: any;
        }
        interface AddVideoHistoryPkListReq {
              /** 视频hash id */
              ids: string[];
              /** 历史清单名称 */
              name: string;
        }
        interface AddVideoReplayCommentReq {
              /** 批注内容 */
              content: string;
              /** 批注结束第几秒 */
              end_second: number;
              /** 内容hash id */
              id: string;
              /** 批注图片信息 */
              image_meta: string;
              /** 批注标签id */
              label_id: number;
              /** 提及用户，用户hash id数组 */
              refer_users: string[];
              /** 批注开始第几秒 */
              start_second: number;
              /** 历史版本上传uid */
              upload_uid: string;
        }
        interface AdminPermission {
              children: AdminPermission[];
              key: string;
              name: string;
        }
        interface AssignInfo {
              /** 负责人 */
              director: any;
              /** 分配百分比 0-100 */
              percent: number;
              /** 分配值 */
              value: number;
        }
        interface AssignObject {
              alias: string;
              hash_id: string;
              id: number;
        }
        interface AssignTargetInfo {
              /** 对象id */
              id: number;
              /** 对象名称 */
              name: string;
        }
        interface CancelCollectionReq {
              /** 内容hash id|分享hash id */
              id: string;
              /** 收藏目标类型：1（内容）、2（分享） */
              target_type: any;
        }
        interface ClearRecycleReq {
              /** 要彻底删除的素材hash id */
              material_ids: string[];
        }
        interface ClientRequest {
              params: string;
              url: string;
        }
        interface CollectInfo {
              /** 收藏时间，unix时间戳秒 */
              collect_time: number;
              /** 内容信息，只有收藏的是内容才返回 */
              content_info: any;
              /** 分享信息，只有收藏的是分享记录才返回 */
              share_info: any;
              /** 来源： movie（成片）、own（企业（自有）素材）、cooperation（合作素材）、reference（对标素材）、inner_share（内部分享）、outer_share（外部分享） */
              source: any;
              /** 内容hash id｜分享记录hash id */
              target_id: string;
              /** 收藏内容类型：1（内容）、2（分享） */
              target_type: any;
        }
        interface CollectionInfo {
              /** 合集名称 */
              alias: string;
              /** 合集hash id */
              id: string;
        }
        interface CollectionItem {
              /** 合集名称 */
              alias: string;
              /** 文件列表 */
              files: FileInfo[];
              /** 合集hash id */
              id: string;
        }
        interface CommitTaskInfo {
              /** 文件数量 */
              file_count: number;
              /** 待提交的文件项 */
              files: UploadFileInfo[];
              /** 已完成文件数量 */
              finish_count: number;
              /** 预分配提交任务id */
              pre_assigned_id: number;
        }
        interface CompanyTaskInfo {
              /** 查看权限指定部门 */
              assign_department: AssignTargetInfo[];
              /** 查看权限指定团队 */
              assign_team: AssignTargetInfo[];
              /** 指定用户 */
              assign_user: SimpleUserInfo[];
              id: string;
              /** 公开日期，unix时间戳秒 */
              open_date: number;
              title: string;
              /** 查看权限：open（公开）、assign（指定）、public（公共资源） */
              view_permission: string;
        }
        interface ContentDetail {
              /** 名称 */
              alias: string;
              /** 查看权限指定部门 */
              assign_department: ShareTarget[];
              /** 查看权限指定项目组 */
              assign_group: ShareTarget[];
              /** 查看权限指定团队 */
              assign_team: ShareTarget[];
              /** 查看权限指定个人 */
              assign_user: SimpleUserInfo[];
              /** 附件列表 */
              attachments: FileInfo[];
              /** 卡审原因 */
              audit_reason: string;
              /** 授权结束日期，unix时间戳秒 */
              auth_end: number;
              /** 授权开始日期，unix时间戳秒 */
              auth_start: number;
              /** 描述 */
              brief: string;
              /** 是否可以批注 */
              can_annotation: boolean;
              /** 是否可以下载原视频 */
              can_download_origin: boolean;
              /** 是否可以下载转码后视频 */
              can_download_transcode: boolean;
              /** 是否可以数据复盘 */
              can_review: boolean;
              /** 是否可以更新视频状态 */
              can_update: boolean;
              /** 素材分类：video（视频）、audio（音频）、image（图片）、script（脚本）、doc（文案） */
              catalog: string;
              /** 二级分类id */
              category_id: number;
              /** 分类信息：一级分类名称/二级分类名称 */
              category_info: string;
              /** 剪辑日期，unix时间戳秒 */
              clip_date: number;
              /** 所属合集 */
              collections: CollectionItem[];
              /** 内容所在组织的hash id */
              company_id: string;
              /** 合集中内容数量 */
              content_count: number;
              /** 复制到剪映次数 */
              copy_jy_count: number;
              /** 复制到剪映人数 */
              copy_jy_member_count: number;
              /** 创建人姓名 */
              creator: string;
              /** 创建人头像 */
              creator_avatar: string;
              /** 投送次数 */
              deliver_count: number;
              /** 投送人数 */
              deliver_member_count: number;
              /** 用户所在部门路径 */
              department_paths: PathInfo[];
              /** 下载次数 */
              download_count: number;
              /** 下载人数 */
              download_member_count: number;
              /** 帧率 */
              frame_rate: number;
              /** 获取转码进度api */
              get_transcode_progress: string;
              /** hash id */
              id: string;
              /** 是否收藏 */
              is_collect: boolean;
              /** 公开日期，unix时间戳秒 */
              open_date: number;
              /** OSS同步状态 0 未同步 1 同步中 2 同步成功 */
              oss_sync_status: any;
              /** 图集｜文案内容 */
              payload: any;
              /** 平台标签 */
              platform_labels: QianchuanMaterialLabel[];
              /** 个人标签 */
              private_labels: LabelInfo[];
              /** 项目名称 */
              project_alias: string;
              /** 工程文件列表 */
              project_files: JyProjectInfo[];
              /** 项目hash id */
              project_id: string;
              /** 公共标签 */
              public_labels: LabelInfo[];
              /** 发布时间 */
              publish_time: number;
              /** 分享id */
              share_id: string;
              /** 是否显示“千川卡审” */
              show_audit_mark: boolean;
              /** 是否显示“爆款视频” */
              show_hot_mark: boolean;
              /** 大小，单位：字节 */
              size: number;
              /** source hash id */
              source_id: string;
              /** 系统状态 */
              status: any;
              /** 系统标签：audit_failed（千川卡审）、hot（爆款视频） */
              system_labels: string[];
              /** 任务名称 */
              task_alias: string;
              /** 任务hash id */
              task_id: string;
              /** 封面图 */
              thumb: string;
              /** 转码状态：1 转码中、2 转码成功、3 转码失败 */
              transcode_status: any;
              /** 内容地址 */
              url: string;
              /** 查看人次 */
              view_count: number;
              /** 查看人数 */
              view_member_count: number;
              /** 查看权限：open（公开）、assign（指定）、public（公共资源） */
              view_permission: string;
        }
        interface ContentEditDetail {
              /** 名称 */
              alias: string;
              /** 查看权限指定部门 */
              assign_department: ShareTarget[];
              /** 查看权限指定项目组 */
              assign_group: ShareTarget[];
              /** 查看权限指定团队 */
              assign_team: ShareTarget[];
              /** 查看权限指定个人 */
              assign_user: SimpleUserInfo[];
              /** 授权结束日期，unix时间戳秒 */
              auth_end: number;
              /** 授权开始日期，unix时间戳秒 */
              auth_start: number;
              /** 描述 */
              brief: string;
              /** 素材分类：video（视频）、audio（音频）、image（图片）、script（脚本）、doc（文案） */
              catalog: string;
              /** 素材分类信息，一级分类、二级分类 */
              categories: ShareTarget[];
              /** 剪辑日期，unix时间戳秒 */
              clip_date: number;
              /** 合集名称 */
              collection_alias: string;
              /** 合集hash id */
              collection_id: string;
              /** 合集信息 */
              collection_info: any;
              /** hash id */
              id: string;
              /** 公开日期，unix时间戳秒 */
              open_date: number;
              /** 图集|文案|脚本内容 */
              payload: any;
              /** 个人标签 */
              private_labels: LabelInfo[];
              /** 公共标签 */
              public_labels: LabelInfo[];
              /** 任务名称 */
              task_alias: string;
              /** 任务hash id */
              task_id: string;
              /** 项目任务信息 */
              task_info: any;
              /** 封面图 */
              thumb: string;
              /** 转码状态：1 转码中、2 转码成功、3 转码失败 */
              transcode_status: any;
              /** 转码后视频地址 */
              transcode_url: string;
              /** 内容地址 */
              url: string;
              /** 版本信息，只有成片和视频类型素材返回该字段 */
              version_info: any;
              /** 查看权限：open（公开）、assign（指定）、public（公共资源） */
              view_permission: string;
        }
        interface ContentInfo {
              /** 内容名称 */
              alias: string;
              /** 内容分类：video（视频）、audio（音频）、image（图片）、script（脚本）、doc（文案） */
              catalog: string;
              /** 内容分类id */
              category_id: number;
              /** 视频合集内容数量 */
              content_count: number;
              /** 复制到剪映人数 */
              copy_jy_member_count: number;
              /** 创建时间,unix时间戳秒 */
              create_time: number;
              /** 创意类型 */
              creative_type: any;
              /** 创建人姓名 */
              creator: string;
              /** 创建人头像 */
              creator_avatar: string;
              /** 投送人数 */
              deliver_member_count: number;
              /** 下载人数 */
              download_member_count: number;
              /** 视频时长，秒 */
              duration: number;
              /** 获取转码进度api */
              get_transcode_progress: string;
              /** 内容hash id */
              id: string;
              /** 是否收藏 */
              is_collect: boolean;
              /** md5值 */
              md5: string;
              /** 成片参数检查：0 未检查、1 通过、2 不通过 */
              movie_check: number;
              /** OSS同步状态 0 未同步 1 同步中 2 同步成功 */
              oss_sync_status: any;
              /** 平台标签 */
              platform_labels: QianchuanMaterialLabel[];
              /** 系统状态 */
              status: any;
              /** 系统状态id */
              status_id: number;
              /** 系统标签 */
              system_labels: string[];
              /** 任务名称 */
              task_alias: string;
              /** 任务hash id */
              task_hash_id: string;
              /** 封面图 */
              thumbs: string[];
              /** 今日消耗 */
              today_cost: number;
              /** 今日消耗磁力金牛标准 */
              today_cost_ks_niu: number;
              /** 今日消耗磁力金牛全站 */
              today_cost_ks_niu_univ: number;
              /** 今日消耗巨量广告 */
              today_cost_ocean_ad: number;
              /** 今日消耗标准 */
              today_cost_std: number;
              /** 今日消耗腾讯广告 */
              today_cost_tencent_ad: number;
              /** 今日消耗全域 */
              today_cost_univ: number;
              /** 总消耗 */
              total_cost: number;
              /** 总消耗磁力金牛标准 */
              total_cost_ks_niu: number;
              /** 总消耗磁力金牛全站 */
              total_cost_ks_niu_univ: number;
              /** 总消耗巨量广告 */
              total_cost_ocean_ad: number;
              /** 总消耗千川标准 */
              total_cost_std: number;
              /** 总消耗腾讯广告 */
              total_cost_tencent_ad: number;
              /** 总消耗千川全域 */
              total_cost_univ: number;
              /** 转码后md5值 */
              transcode_md5: string;
              /** 转码状态：1 转码中、2 转码成功、3 转码失败 */
              transcode_status: any;
              /** 音视频播放地址 */
              urls: string[];
              /** 查看人数 */
              view_member_count: number;
              /** 浏览时间，unix时间戳秒 */
              view_time: number;
        }
        interface CreateInventoryReq {
              /** 素材hash id */
              material_ids: string[];
              /** 历史清单名称 */
              name: string;
        }
        interface CreateProjectGroupReq {
              /** 项目分组hash id */
              id: string;
              /** 名称 */
              name: string;
              /** 项目hash id列表 */
              project_ids: string[];
              /** 备注 */
              remark: string;
        }
        interface CreateProjectReq {
              /** 项目公告 */
              announcement: string;
              /** 周期结束时间，unix时间戳秒 */
              cycle_end: number;
              /** 周期开始时间，unix时间戳秒 */
              cycle_start: number;
              /** 负责人hash id */
              director: string;
              /** 项目分组hash id列表 */
              group_ids: string[];
              /** 项目hash id */
              id: string;
              /** 项目主题 */
              theme: string;
        }
        interface CreateProjectTargetReq {
              /** 项目hash id */
              id: string;
              /** 备注 */
              remark: string;
              /** 项目目标列表 */
              targets: TargetInfo[];
        }
        interface CreateTaskReq {
              /** 内容数量 */
              content_count: number;
              /** 截止日期，unix时间戳秒 */
              deadline: number;
              /** 负责人hash id */
              director: string;
              /** 任务hash id */
              id: string;
              /** 产品类型id */
              product_id: number;
              /** 项目hash id */
              project_id: string;
              /** 参考内容 */
              refrence_contents: RefrenceContent[];
              /** 备注 */
              remark: string;
              /** 脚本类型id */
              script_id: number;
              /** 项目拆解目标hash id */
              sub_target_id: string;
              /** 标题 */
              title: string;
              /** 画面内容 */
              video_content: string;
              /** 查看权限 */
              view_permission: any;
        }
        interface CreateVideoCollectionReq {
              /** 二级分类id */
              category_id: number;
              name: string;
              /** 备注 */
              remark: string;
        }
        interface DailyStatByTargetInfo {
              /** 统计开始时间，unix时间戳秒 */
              start_time: number;
              /** 统计数据，key 为统计字段，value 为统计值 */
              stats: Record<string, any>;
              /** 团队｜部门下用户信息 */
              user: any;
        }
        interface DatePointInfo {
              /** 日期，格式：20060102 */
              day: string;
              /** 值 */
              value: number;
        }
        interface DelContentAttachmentReq {
              /** 附件hash id */
              attachment_id: string;
              /** 内容hash id */
              id: string;
        }
        interface DelNotifyChannelsReq {
              /** 记录hash id */
              ids: string[];
        }
        interface DelUserSearchViewReq {
              /** 搜索视图hash id */
              ids: string[];
        }
        interface DelVideoHistoryPkListReq {
              /** 历史清单hash id */
              ids: string[];
        }
        interface DeleteInventoryReq {
              /** 历史清单hash id */
              ids: string[];
        }
        interface DeleteProjectCommentReq {
              /** 讨论动态hash id */
              ids: string[];
        }
        interface DeleteProjectFileReq {
              /** 工程hash id */
              project_id: string;
        }
        interface DeleteProjectGroupReq {
              /** 项目分组hash id */
              id: string;
        }
        interface DeleteProjectReq {
              /** 项目hash id */
              id: string;
        }
        interface DeleteProjectRoleReq {
              /** 角色hash id */
              role_id: string;
        }
        interface DeleteProjectTargetSplitRecordReq {
              /** 拆解目标hash id */
              id: string;
        }
        interface DeleteShareReq {
              /** 分享hash id */
              ids: string[];
        }
        interface DeleteTaskReq {
              /** 任务hash id */
              id: string;
        }
        interface DeleteVideoCommentReq {
              /** 批注/回复 hash id数组 */
              ids: string[];
        }
        interface DeleteVideoReplayCommentReq {
              /** 复盘批注记录hash id */
              ids: string[];
        }
        interface DepartmentMaterialDetailTotalStat {
              /** 记录数目 */
              count: number;
              /** 记录列表 */
              records: PersonalMaterialDetailTotalStat[];
              /** 汇总统计信息 */
              summary: any;
        }
        interface DepartmentTotalStat {
              /** 记录数目 */
              count: number;
              /** 记录列表 */
              records: PersonalTotalStat[];
              /** 汇总统计信息 */
              summary: any;
        }
        interface DocumentTaskInfo {
              /** 追评 */
              comment: string;
              /** 追评上传任务信息 */
              comment_task: any;
              /** 文案内容 */
              text: string;
              /** 文案上传任务信息 */
              text_task: any;
        }
        interface DownloadProjectFileReq {
              /** 工程hash id */
              project_id: string;
        }
        interface DownloadTaskReferenceContentReq {
              /** 任务hash id */
              id: string;
        }
        interface EditCollectionReq {
              /** 合集名称 */
              alias: string;
              /** 合集描述 */
              brief: string;
              /** 分类id */
              category_id: number;
              /** 内容hash id */
              id: string;
        }
        interface EditDocumentReq {
              /** 二级分类id */
              category_id: number;
              /** 文案列表 */
              documents: UploadDocInfo[];
              /** 内容hash id */
              id: string;
              /** 通知内容 */
              notice_info: any;
              /** 项目id不用传 */
              pid: number;
              /** 个人标签，多个标签id用逗号分隔 */
              private_label: string;
              /** 项目hash id */
              project_id: string;
              /** 公共标签，多个标签id用逗号分隔 */
              public_label: string;
              /** 任务hash id */
              task_id: string;
              /** 任务id不用传 */
              tid: number;
              /** 查看权限 */
              view_permission: any;
        }
        interface EditImageReq {
              /** 描述 */
              brief: string;
              /** 二级分类id */
              category_id: number;
              /** 自定义文件名 */
              custom: string;
              /** 单图列表 */
              files: UploadFileInfo[];
              /** 图集分组列表 */
              groups: UploadFileGroupInfo[];
              /** 内容hash id */
              id: string;
              /** 是否同步云端 */
              is_sync_oss: boolean;
              /** 图集名称 */
              name: string;
              /** 单图名称规则：filename（文件名）、prefix+filename（前缀+文件名）、custom（自定义） */
              name_regulation: string;
              /** 通知内容 */
              notice_info: any;
              /** 项目id，不用传 */
              pid: number;
              /** 自定义前缀 */
              prefix: string;
              /** 个人标签，多个标签id用逗号分隔 */
              private_label: string;
              /** 项目hash id */
              project_id: string;
              /** 公共标签，多个标签id用逗号分隔 */
              public_label: string;
              /** true 单图发布、false 图集发布 */
              single_publish: boolean;
              /** 任务hash id */
              task_id: string;
              /** 任务id，不用传 */
              tid: number;
              /** 查看权限 */
              view_permission: any;
        }
        interface EditProjectCommentReq {
              /** 附件 */
              attachment: UploadFileInfo[];
              /** 回复内容 */
              content: string;
              /** 讨论动态hash id */
              id: string;
              /** 目标状态，默认正常 */
              status: any;
        }
        interface EditProjectRolePermissionReq {
              /** 新的权限列表 */
              permission_keys: string[];
              /** 角色hash id */
              role_id: string;
        }
        interface EditProjectRoleReq {
              /** 角色hash id */
              role_id: string;
              /** 角色名称 */
              role_name: string;
        }
        interface EditScriptReq {
              /** 二级分类id */
              category_id: number;
              /** 素材上传地址 */
              file: any;
              /** 内容hash id */
              id: string;
              /** 脚本名称 */
              name: string;
              /** 通知内容 */
              notice_info: any;
              /** 项目id，不用传 */
              pid: number;
              /** 个人标签，多个标签id用逗号分隔 */
              private_label: string;
              /** 项目hash id */
              project_id: string;
              /** 公共标签，多个标签id用逗号分隔 */
              public_label: string;
              /** 脚本模板id */
              script_template_id: number;
              /** 脚本类型id */
              script_type_id: number;
              /** 任务hash id */
              task_id: string;
              /** 任务id，不用传 */
              tid: number;
              /** 查看权限 */
              view_permission: any;
        }
        interface EditVideoCommentReq {
              /** 附件 */
              attachment: any;
              /** 批注内容 */
              content: string;
              /** 批注结束第几秒 */
              end_second: number;
              /** 批注/回复hash id */
              id: string;
              /** 批注图片信息 */
              image_meta: string;
              /** 批注标签id */
              label_id: number;
              /** 提及用户，用户hash id数组 */
              refer_users: string[];
              /** 批注开始第几秒 */
              start_second: number;
              /** 查看权限 */
              view_permission: any;
        }
        interface EditVideoReq {
              /** 授权结束日期，unix时间戳秒 */
              auth_end: number;
              /** 授权开始日期，unix时间戳秒 */
              auth_start: number;
              /** 视频描述 */
              brief: string;
              /** 素材分类：video（视频）、audio（音频） */
              catalog: string;
              /** 二级分类id */
              category_id: number;
              /** 视频合集id */
              cid: number;
              /** 裁剪日期 */
              clip_date: number;
              /** 视频合集hash id，只能传一个 */
              collection_id: string;
              /** 自定义文件名 */
              custom: string;
              /** 文件列表 */
              files: UploadFileInfo[];
              /** 内容hash id */
              id: string;
              /** 是否同步云端 */
              is_sync_oss: boolean;
              /** 音视频名称规则：filename（文件名）、prefix（前缀+文件名）、custom（自定义） */
              name_regulation: string;
              /** 通知内容 */
              notice_info: any;
              /** 项目id，不用传 */
              pid: number;
              /** 自定义前缀 */
              prefix: string;
              /** 个人标签，多个标签id用逗号分隔 */
              private_label: string;
              /** 项目hash id */
              project_id: string;
              /** 公共标签，多个标签id用逗号分隔 */
              public_label: string;
              /** 任务hash id */
              task_id: string;
              /** 任务id，不用传 */
              tid: number;
              /** 查看权限 */
              view_permission: any;
        }
        interface EnableNotifyChannelReq {
              /** 记录hash id */
              id: string;
              /** 状态: 1 启用、2 禁用 */
              status: any;
        }
        interface ExportTaskInfo {
              /** 创建时间，unix时间戳秒 */
              create_time: number;
              /** 下载地址 */
              download_url: string;
              /** 失败原因 */
              err_message: string;
              /** 任务id */
              id: number;
              /** 任务名称 */
              name: string;
              /** 任务hash id */
              post_id: string;
              /** 状态：1 队列中、2 进行中、3 已完成、4 失败 */
              status: any;
              /** 更新时间，unix时间戳秒 */
              update_time: number;
        }
        interface FeishuBindCheckTelReq {
              code: string;
              company_id: string;
              tel: string;
        }
        interface FeishuBindCheckTelResp {
              /** 1 手机号已绑定用户、0 手机号未绑定用户 */
              bind_status: number;
              /** 飞书组织名称 */
              feishu_company_name: string;
        }
        interface FeishuCompanyInfoResp {
              /** 飞书管理员名称 */
              feishu_admin_name: string;
              /** 飞书组织名称 */
              feishu_company_name: string;
        }
        interface FocusProjectReq {
              /** true 关注、false 取消关注 */
              enable: boolean;
              /** 项目hash id */
              id: string;
        }
        interface FocusTaskReq {
              /** true 关注、false 取消关注 */
              enable: boolean;
              /** 任务hash id */
              id: string;
        }
        interface GetCompanyFeishuBindStatusResp {
              /** 1 表示绑定、0 表示未绑定 */
              status: number;
        }
        interface GetCompanyTaskListResp {
              count: number;
              records: CompanyTaskInfo[];
        }
        interface GetContentLocalUrlResp {
              /** 复制到剪切板内容 */
              clipboard_content: string;
              request_body: string;
              request_url: string;
        }
        interface GetContentPermissionResp {
              /** 查看权限指定部门 */
              assign_department: AssignObject[];
              /** 查看权限指定项目组 */
              assign_group: AssignObject[];
              /** 查看权限指定团队 */
              assign_team: AssignObject[];
              /** 查看权限指定个人 */
              assign_user: AssignObject[];
              /** 公开日期，unix时间戳秒 */
              open_date: number;
              /** 查看权限：open（公开）、assign（指定）、public（公共资源） */
              view_permission: string;
        }
        interface GetContentViewHistoryResp {
              count: number;
              records: ContentInfo[];
        }
        interface GetDocumentTxtContentReq {
              /** 文档文件地址 */
              file_url: string;
              /** 文档hash id */
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
              /** 内容类型：video（视频）、vcollection（合集）、audio（音频）、image（图片）、script（脚本）、doc（文案） */
              catalog: string;
              /** 内容分类id */
              category_ids: number[];
              /** 结束日期（0点），unix时间戳秒 */
              end_time: number;
              /** 统计项 */
              items: string[];
              /** 公共标签id */
              label_ids: number[];
              /** 统计数据平台类型：0 千川标准、1 千川全域推商品、2 千川全域推直播间、3 巨量广告 */
              platform_type: any;
              /** 项目hash id */
              project_id: string;
              /** 开始日期（0点），unix时间戳秒 */
              start_time: number;
              /** 用户|团队｜部门 id */
              target_id: string;
              /** 统计目标类型：0 个人、1 用户、2 团队、3 部门 */
              target_type: any;
        }
        interface GetMaterialDetailDailyStatByTargetResp {
              records: MaterialDetailDailyStatByTargetInfo[];
        }
        interface GetMaterialDetailListStatResp {
              /** 记录数目 */
              count: number;
              /** 记录列表 */
              records: MaterialDetailListInfo[];
              /** 汇总统计信息 */
              summary: any;
        }
        interface GetMaterialDetailTotalStatResp {
              /** 部门统计数据明细 */
              department: any;
              /** 个人统计数据明细 */
              personal: any;
              /** 团队统计数据明细 */
              team: any;
              /** 用户统计数据明细 */
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
              /** 内容hash id数组 */
              ids: string[];
        }
        interface GetNotifyChannelsResp {
              count: number;
              records: NotifyChannelInfo[];
        }
        interface GetPersonalStatisticReq {
              /** 统计项 */
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
              /** 项目主数据信息列表 */
              infos: MainDataInfo[];
        }
        interface GetProjectPermissionResp {
              /** 指定部门 */
              assign_department: AssignObject[];
              /** 指定项目组 */
              assign_group: AssignObject[];
              /** 指定团队 */
              assign_team: AssignObject[];
              /** 指定个人 */
              assign_user: AssignObject[];
              /** 下载权限：self（我自己）、open（公开）、assign（指定用户） */
              permission_type: string;
        }
        interface GetProjectRoleListResp {
              count: number;
              records: ProjectRoleInfo[];
        }
        interface GetProjectRolePermissionResp {
              /** 系统所有的权限 key 树级结构 */
              admin_permissions: AdminPermission[];
              /** 是否是超管 */
              is_admin: number;
              /** 系统公共的权限 key */
              public_permission_keys: string[];
              /** 当前角色拥有的权限 key */
              role_permission_keys: string[];
        }
        interface GetProjectTargetFieldResp {
              /** 项目目标字段列表 */
              fields: TargetField[];
        }
        interface GetProjectTargetListResp {
              /** 项目hash id */
              project_id: string;
              /** 项目目标列表 */
              targets: ProjectTargetInfo[];
        }
        interface GetProjectTargetSplitResp {
              /** 拆解任务数 */
              count: number;
              /** 拆解任务列表 */
              records: SplitRecordInfo[];
        }
        interface GetProjectTargetSplitTrendResp {
              /** 拆解目标趋势曲线列表 */
              curves: TargetTrendInfo[];
              /** 项目hash id */
              project_id: string;
              /** 拆解目标hash id */
              sub_target_id: string;
        }
        interface GetProjectTargetTrendResp {
              /** 项目目标趋势曲线列表 */
              curves: TargetTrendInfo[];
              /** 项目hash id */
              project_id: string;
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
              /** 关联内容数量 */
              content_count: number;
              /** 有查看权限的内容列表 */
              contents: ContentInfo[];
        }
        interface GetShareRecordResp {
              count: number;
              records: ShareRecordInfo[];
        }
        interface GetTaskContentListResp {
              /** 有查看权限的内容数目 */
              count: number;
              /** 内容列表 */
              records: ContentInfo[];
              /** 任务所有内容数目 */
              total: number;
        }
        interface GetTaskDataDailyStatByTargetReq {
              /** 结束日期（0点），unix时间戳秒 */
              end_time: number;
              /** 项目hash id */
              id: string;
              /** 开始日期（0点），unix时间戳秒 */
              start_time: number;
              /** 用户|团队｜部门 id */
              target_id: string;
              /** 统计目标类型：0 个人、1 用户、2 团队、3 部门 */
              target_type: any;
        }
        interface GetTaskDataDailyStatByTargetResp {
              records: DailyStatByTargetInfo[];
        }
        interface GetTaskDataReq {
              /** 排序方式：true（降序）、false（升序） */
              desc: boolean;
              /** 结束日期（0点），unix时间戳秒 */
              end_time: number;
              /** 项目hash id */
              id: string;
              /** 获取趋势统计项 */
              item: string;
              limit: number;
              offset: number;
              /** 排序字段 */
              order_by: string;
              /** 后端自用字段。 */
              retain_1: number[];
              /** 后端自用字段。项目id */
              retain_2: number;
              /** 开始日期（0点），unix时间戳秒 */
              start_time: number;
              /** 统计目标类型：0 个人、1 用户、2 团队、3 部门 */
              target_type: any;
              /** 统计目标id/hash id数组 */
              targets: string[];
        }
        interface GetTaskDataTrendResp {
              /** 日期点列表 */
              points: MonthPointInfo[];
        }
        interface GetTaskDataUserTop10Resp {
              records: ValueUserInfo[];
        }
        interface GetTaskMovieStatisticReq {
              /** 统计字段 */
              fields: string[];
              platform_type: StatPlatformType;
              /** 任务hash id */
              task_id: string;
        }
        interface GetTaskMovieStatisticResp {
              /** 统计数据，key 为统计字段，value 为统计值 */
              stat: Record<string, any>;
        }
        interface GetTaskSummaryDataResp {
              /** 任务完成情况占比：0-1 */
              finished_percent: number;
              records: TaskSummaryDataInfo[];
        }
        interface GetTaskTotalDataResp {
              /** 部门统计数据明细 */
              department: any;
              /** 个人统计数据明细 */
              personal: any;
              /** 团队统计数据明细 */
              team: any;
              /** 用户统计数据明细 */
              user: any;
        }
        interface GetTempWorkListResp {
              count: number;
              records: InventoryItemInfo[];
        }
        interface GetUploadContentDetailReq {
              /** 文件上传地址url */
              upload_url: string;
        }
        interface GetUploadContentDetailResp {
              /** 素材详情 */
              detail: any;
              /** true 表示成功获取素材详情，false 表示未找到对应素材 */
              success: boolean;
        }
        interface GetUploadTaskIdResp {
              task_id: string;
        }
        interface GetUserSearchViewResp {
              count: number;
              records: SearchViewInfo[];
        }
        interface GetUserTerminalStatusResp {
              /** 1 表示在线、0 表示可能下线 */
              online: number;
              /** 版本号 */
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
              /** 统计项。为空则查默认统计项 */
              items: string[];
              /** 对比列表hash id */
              list_id: string;
        }
        interface GetVideoPkListFlowDataResp {
              /** 记录数 */
              count: number;
              /** 各视频统计数据 */
              records: VideoPkListFlowDataInfo[];
        }
        interface GetVideoPkListInteractDataResp {
              /** 记录数 */
              count: number;
              /** 各视频统计数据 */
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
              /** 创建时间,unix时间戳秒 */
              create_time: number;
              /** 清单hash id */
              id: string;
              /** 清单名称 */
              name: string;
        }
        interface InventoryItemInfo {
              /** 素材名称 */
              alias: string;
              /** 素材分类：video（视频）、audio（音频）、image（图片）、script（脚本）、doc（文案） */
              catalog: string;
              /** 素材hash id */
              material_id: string;
              /** 素材缩略图 */
              thumb: string;
              /** 内容（素材）上传时唯一标识 */
              uid: string;
              /** 素材地址 */
              url: string;
        }
        interface JyProjectInfo {
              /** 名称 */
              alias: string;
              /** 创建时间，unix时间戳秒 */
              create_time: number;
              /** 是否拥有下载权限（有权限展示下载、分享按钮） */
              has_permission: boolean;
              /** hash id */
              id: string;
              /** 是否能点击下载（工程文件打包时按钮置灰，不能下载） */
              show_download: boolean;
              /** 封面图 */
              thumb: string;
              /** 用户hash id */
              user_id: string;
        }
        interface LabelInfo {
              /** 一级标签（分组）id */
              group_id: number;
              /** 一级标签（分组）名称 */
              group_name: string;
              /** 二级标签id */
              label_id: number;
              /** 二级标签名称 */
              label_name: string;
        }
        interface MainDataInfo {
              /** 目标名称 */
              item: string;
              /** 目标中文名称 */
              item_chinese: string;
              /** 项目hash id */
              project_id: string;
              /** 单位：0 数值、1 百分比 */
              unit_type: any;
              /** 值 */
              value: number;
        }
        interface MaterialCostStatInfo {
              /** 素材分类 */
              catalog: string;
              /** 有消耗的素材占比 */
              cost_ratio: number;
              /** 素材数量 */
              count: number;
        }
        interface MaterialDetailDailyStatByTargetInfo {
              /** 统计开始时间，unix时间戳秒 */
              start_time: number;
              /** 统计数据，key 为统计字段，value 为统计值 */
              stats: Record<string, any>;
              /** 团队｜部门下用户信息 */
              user: any;
        }
        interface MaterialDetailListInfo {
              /** 素材创建人所在部门列表 */
              departments: string[];
              /** 素材信息 */
              material: any;
              /** 平台标签中文 */
              platform_labels: string[];
              /** 平台标签英文列表 */
              platform_labels_en: string[];
              /** 统计数据，key 为统计字段，value 为统计值 */
              stats: Record<string, any>;
              /** 素材创建人所在团队列表 */
              teams: string[];
              /** 素材创建人信息 */
              user: any;
        }
        interface MaterialDetailListSummaryInfo {
              /** 部门数量 */
              department_count: number;
              /** 素材数量 */
              material_count: number;
              /** 统计数据，key 为统计字段，value 为统计值 */
              stats: Record<string, any>;
              /** 团队数量 */
              team_count: number;
              /** 用户数量 */
              user_count: number;
        }
        interface MaterialDetailTotalStatInfo {
              /** 统计结束时间，unix时间戳秒 */
              end_time: number;
              /** 统计开始时间，unix时间戳秒 */
              start_time: number;
              /** 统计数据，key 为统计字段，value 为统计值 */
              stats: Record<string, any>;
        }
        interface MaterialReuseStat {
              count: number;
              point: ReuseInfo;
        }
        interface MaterialTotalStatInfo {
              /** 统计字段 */
              item: string;
              /** 环比 */
              mom_ratio: number;
              /** 上一个周期总量 */
              previous_total: number;
              /** 总量 */
              total: number;
        }
        interface MaterialTrendStatInfo {
              /** 统计维度 */
              item: string;
              /** 统计点 */
              points: StatPointInfo[];
        }
        interface ModifyNotifyChannelReq {
              /** 通知渠道类型 */
              channel_type: any;
              /** 记录hash id */
              id: string;
              /** (渠道)机器人名称 */
              name: string;
              /** 机器人签名secret */
              secret: string;
              /** 机器人关键词，多个逗号分隔 */
              self_keyword: string;
              /** 机器人webhook url */
              webhook_url: string;
        }
        interface MonthPointInfo {
              /** 月份，格式：200601 */
              month: string;
              /** 值 */
              value: number;
        }
        interface MoveContentToCategoryReq {
              /** 二级分类id */
              category_id: number;
              /** 内容hash id */
              ids: string[];
        }
        interface MovieHistoryInfo {
              /** 创建人姓名 */
              create_alias: string;
              /** 创建时间，unix时间戳秒 */
              create_time: number;
              /** 视频时长，秒 */
              duration: number;
              /** 历史版本hash id */
              id: string;
              /** 是否当前版本 */
              is_current: boolean;
              /** 封面图 */
              thumb: string;
              /** 上传uid */
              upload_uid: string;
              /** 视频地址 */
              url: string;
              /** 版本号 */
              version: number;
        }
        interface NotifyChannelInfo {
              /** 通知渠道类型 */
              channel_type: any;
              /** 创建时间,unix时间戳秒 */
              create_time: number;
              /** 创建人姓名 */
              creator: string;
              /** 创建人头像 */
              creator_avatar: string;
              /** 记录hash id */
              id: string;
              /** (渠道)机器人名称 */
              name: string;
              /** 状态: 1 启用、2 禁用 */
              status: any;
              /** 机器人webhook url */
              webhook_url: string;
        }
        interface PathInfo {
              /** 部门名称 */
              own_name: string;
              /** 父级部门名称 */
              parent_name: string;
        }
        interface PersonalMaterialDetailTotalStat {
              /** 所在部门列表 */
              departments: string[];
              /** 统计记录信息 */
              stat_info: any;
              /** 用户|团队｜部门信息 */
              target: any;
              /** 所在团队列表 */
              teams: string[];
        }
        interface PersonalStatisticInfo {
              /** 统计项 */
              item: any;
              /** 总量 */
              total: number;
              /** 昨日新增量 */
              yesterday: number;
        }
        interface PersonalTotalStat {
              /** 所在部门列表 */
              departments: string[];
              /** 统计记录信息 */
              stat_info: any;
              /** 用户|团队｜部门信息 */
              target: any;
              /** 所在团队列表 */
              teams: string[];
        }
        interface PlatformLabelStatInfo {
              /** 平台标签中文 */
              chinese_label: string;
              /** 数量 */
              count: number;
              /** 平台标签 */
              label: string;
        }
        interface ProjectCommentInfo {
              /** 附件 */
              attachment: UploadFileInfo[];
              /** 内容 */
              content: string;
              /** 创建时间，unix时间戳秒 */
              create_time: number;
              /** 记录hash id */
              id: string;
              /** 回复列表 */
              replies: ProjectCommentInfo[];
              /** 回复数量 */
              reply_count: number;
              /** 状态 */
              status: any;
              /** 创建人信息 */
              user: any;
        }
        interface ProjectDetail {
              /** 项目公告 */
              announcement: string;
              /** 周期结束时间，unix时间戳秒 */
              cycle_end: number;
              /** 周期开始时间，unix时间戳秒 */
              cycle_start: number;
              /** 负责人 */
              director: any;
              /** 是否已关注:true 已关注、false 未关注 */
              followed: boolean;
              /** 项目分组 */
              groups: SimpleProjectGroup[];
              /** 项目hash id */
              id: string;
              /** 项目成员 */
              members: SimpleUserInfo[];
              /** 用户拥有的项目权限 */
              permission_keys: string[];
              /** 项目状态：1 暂无、2 正常、3 延期、4 完成、5 风险、6 归档 */
              status: any;
              /** 项目主题 */
              theme: string;
        }
        interface ProjectGroupEditDetail {
              /** 分组名称 */
              alias: string;
              /** 项目分组hash id */
              id: string;
              /** 项目hash id */
              projectIDs: string[];
              /** 备注 */
              remark: string;
        }
        interface ProjectInfo {
              /** 项目公告 */
              announcement: string;
              /** 周期结束时间，unix时间戳秒 */
              cycle_end: number;
              /** 周期开始时间，unix时间戳秒 */
              cycle_start: number;
              /** 负责人 */
              director: any;
              /** 是否已关注:true 已关注、false 未关注 */
              followed: boolean;
              /** 项目hash id */
              id: string;
              /** 项目成员 */
              members: SimpleUserInfo[];
              /** 项目完成度 */
              percent: number;
              /** 项目目标排序列表 */
              sort_targets: SortTargetInfo[];
              /** 项目状态 */
              status: any;
              /** 项目目标列表 */
              targets: ProjectTargetInfo[];
              /** 项目主题 */
              theme: string;
        }
        interface ProjectRoleInfo {
              /** 项目角色hash id */
              id: string;
              /** 是否默认角色：1 是、0 否 */
              is_default: number;
              /** 项目角色名称 */
              name: string;
        }
        interface ProjectTargetDetail {
              /** 项目公告 */
              announcement: string;
              /** 周期结束时间，unix时间戳秒 */
              cycle_end: number;
              /** 周期开始时间，unix时间戳秒 */
              cycle_start: number;
              /** 负责人所在部门列表 */
              departments: AssignTargetInfo[];
              /** 负责人 */
              director: any;
              /** 项目hash id */
              id: string;
              /** 目标总体完成百分比 */
              percent: number;
              /** 项目状态：1 暂无、2 正常、3 延期、4 完成、5 风险、6 归档 */
              status: any;
              /** 目标列表 */
              targets: ProjectTargetInfo[];
              /** 项目主题 */
              theme: string;
        }
        interface ProjectTargetEditDetail {
              /** 项目hash id */
              project_id: string;
              /** 备注 */
              remark: string;
              /** 项目目标列表 */
              targets: TargetInfo[];
        }
        interface ProjectTargetInfo {
              /** 已分配列表 */
              assigned_list: AssignInfo[];
              /** 已分配百分比：0-1 */
              assigned_percent: number;
              /** 分配值 */
              assigned_value: number;
              /** 已完成百分比: 0-1 */
              finished_percent: number;
              /** 完成值 */
              finished_value: number;
              /** 目标名称 */
              item: string;
              /** 目标中文名称 */
              item_chinese: string;
              /** 目标值 */
              target_value: number;
              /** 单位：0 数值、1 百分比 */
              unit_type: any;
              /** 权重, 1-100 */
              weight: number;
        }
        interface ProjectTargetSplitDetail {
              /** 项目周期结束时间，unix时间戳秒 */
              cycle_end: number;
              /** 项目周期开始时间，unix时间戳秒 */
              cycle_start: number;
              /** 负责人所在部门列表 */
              departments: AssignTargetInfo[];
              /** 负责人 */
              director: any;
              /** 拆解任务hash id */
              id: string;
              /** 目标总体完成百分比 */
              percent: number;
              /** 项目hash id */
              project_id: string;
              /** 备注 */
              remark: string;
              /** 拆解任务状态：1 暂无、2 正常、3 延期、4 完成、5 风险、6 归档 */
              status: any;
              /** 目标列表 */
              targets: ProjectTargetInfo[];
        }
        interface ProjectUserInfo {
              /** 所在部门 */
              departments: UserDepartmentInfo[];
              /** 邀请人信息 */
              inviter: any;
              /** 加入时间，unix时间戳秒 */
              join_time: number;
              /** 成员类型：inner 内部用户、outer 外部联系人 */
              memberType: string;
              /** 项目角色列表 */
              project_roles: ProjectRoleInfo[];
              /** 状态：1 在职、2 离职、3 停用 */
              status: number;
              /** 手机号 */
              tel: string;
              /** 用户信息 */
              user: any;
        }
        interface PublishContentResp {
              /** 需要请求到内网的接口 URL 和参数 */
              client_request: any;
              /** published（发布成功）、waiting（提交任务到发布队列） */
              status: string;
        }
        interface PublishDocReq {
              /** 二级分类id */
              category_id: number;
              /** 文案列表 */
              documents: DocumentTaskInfo[];
              /** 通知内容 */
              notice_info: any;
              /** 项目id不用传 */
              pid: number;
              /** 个人标签，多个标签id用逗号分隔 */
              private_label: string;
              /** 项目hash id */
              project_id: string;
              /** 公共标签，多个标签id用逗号分隔 */
              public_label: string;
              status_id: number;
              /** 任务hash id */
              task_id: string;
              /** 任务id不用传 */
              tid: number;
              /** 查看权限 */
              view_permission: any;
        }
        interface PublishImageReq {
              /** 描述 */
              brief: string;
              /** 二级分类id */
              category_id: number;
              /** 自定义文件名 */
              custom: string;
              /** 待提交的文件项 */
              files: UploadFileInfo[];
              /** 图集发布任务信息 */
              group_tasks: CommitTaskInfo[];
              /** 是否同步云端 */
              is_sync_oss: boolean;
              /** 图集名称 */
              name: string;
              /** 单图名称规则：filename（文件名）、prefix+filename（前缀+文件名）、custom（自定义） */
              name_regulation: string;
              /** 通知内容 */
              notice_info: any;
              /** 项目id，不用传 */
              pid: number;
              /** 自定义前缀 */
              prefix: string;
              /** 个人标签，多个标签id用逗号分隔 */
              private_label: string;
              /** 项目hash id */
              project_id: string;
              /** 公共标签，多个标签id用逗号分隔 */
              public_label: string;
              /** true 单图发布、false 图集发布 */
              single_publish: boolean;
              /** 单图发布任务信息 */
              single_task: any;
              status_id: number;
              /** 任务hash id */
              task_id: string;
              /** 任务id，不用传 */
              tid: number;
              /** 查看权限 */
              view_permission: any;
        }
        interface PublishScriptReq {
              /** 二级分类id */
              category_id: number;
              /** 脚本名称 */
              name: string;
              /** 通知内容 */
              notice_info: any;
              /** 项目id，不用传 */
              pid: number;
              /** 预分配提交任务id */
              pre_assigned_id: number;
              /** 个人标签，多个标签id用逗号分隔 */
              private_label: string;
              /** 项目hash id */
              project_id: string;
              /** 公共标签，多个标签id用逗号分隔 */
              public_label: string;
              /** 脚本模板id */
              script_template_id: number;
              /** 脚本类型id */
              script_type_id: number;
              status_id: number;
              /** 任务hash id */
              task_id: string;
              /** 任务id，不用传 */
              tid: number;
              /** 查看权限 */
              view_permission: any;
        }
        interface PublishVideoReq {
              /** 授权结束日期，unix时间戳秒 */
              auth_end: number;
              /** 授权开始日期，unix时间戳秒 */
              auth_start: number;
              /** 视频描述 */
              brief: string;
              /** 素材分类：video（视频）、audio（音频） */
              catalog: string;
              /** 二级分类id */
              category_id: number;
              /** 视频合集id */
              cid: number;
              /** 裁剪日期 */
              clip_date: number;
              /** 视频合集hash id，只能传一个 */
              collection_id: string;
              /** 自定义文件名 */
              custom: string;
              /** 文件数量 */
              file_count: number;
              /** 待提交的文件项 */
              files: UploadFileInfo[];
              /** 已完成文件数量 */
              finish_count: number;
              /** 是否同步云端 */
              is_sync_oss: boolean;
              /** 音视频名称规则：filename（文件名）、prefix（前缀+文件名）、custom（自定义） */
              name_regulation: string;
              /** 通知内容 */
              notice_info: any;
              /** 项目id，不用传 */
              pid: number;
              /** 预分配提交任务id */
              pre_assigned_id: number;
              /** 自定义前缀 */
              prefix: string;
              /** 个人标签，多个标签id用逗号分隔 */
              private_label: string;
              /** 项目hash id */
              project_id: string;
              /** 公共标签，多个标签id用逗号分隔 */
              public_label: string;
              status_id: number;
              /** 任务hash id */
              task_id: string;
              /** 任务id，不用传 */
              tid: number;
              /** 查看权限 */
              view_permission: any;
        }
        interface RecoverRecycleReq {
              /** 要恢复的素材hash id */
              material_ids: string[];
        }
        interface RecycleItemInfo {
              /** 素材名称 */
              alias: string;
              /** 素材分类：video（视频）、audio（音频）、image（图片）、script（脚本）、doc（文案） */
              catalog: string;
              /** 创建时间,unix时间戳秒 */
              create_time: number;
              /** 创建人姓名 */
              creator: string;
              /** 创建人头像 */
              creator_avatar: string;
              /** 删除时间,unix时间戳秒 */
              delete_time: number;
              /** 内容（素材）hash id */
              material_id: string;
              /** 操作（删除）人姓名 */
              operator: string;
              /** 操作（删除）人头像 */
              operator_avatar: string;
              /** 素材缩略图 */
              thumbs: string[];
              /** 内容（素材）上传时唯一标识 */
              uid: string;
              /** 内容地址 */
              urls: string[];
        }
        interface RelateContentToCollectionReq {
              /** 合集hash id */
              collection_ids: string[];
              /** 内容hash id */
              ids: string[];
        }
        interface RemoveProjectRoleUserReq {
              /** 角色hash id */
              role_id: string;
              /** 用户hash id数组 */
              user_ids: string[];
        }
        interface RemoveProjectUserReq {
              /** 项目hash id */
              project_id: string;
              /** 用户hash id数组 */
              user_ids: string[];
        }
        interface RenameInventoryReq {
              /** 历史清单hash id */
              inventory_id: string;
              /** 历史清单名称 */
              name: string;
        }
        interface ReplyProjectCommentReq {
              /** 附件 */
              attachment: UploadFileInfo[];
              /** 回复内容 */
              content: string;
              /** 讨论动态hash id */
              id: string;
              /** 目标状态，默认正常 */
              status: any;
        }
        interface ReplyVideoCommentReq {
              /** 附件 */
              attachment: any;
              /** 回复内容 */
              content: string;
              /** 批注hash id */
              id: string;
              /** 提及用户，用户hash id数组 */
              refer_users: string[];
        }
        interface ReuseInfo {
              /** 复制次数 */
              copy_jy_count: number;
              /** 下载次数 */
              download_count: number;
        }
        interface SaveMyPersonalStatisticConfigReq {
              /** 统计项 */
              config: PersonalStatsConfig[];
        }
        interface SaveSearchViewReq {
              /** 素材分类：video（视频）、vcollection（合集）、audio（音频）、image（图片）、script（脚本）、doc（文案） */
              catalog: string;
              /** 素材类型：own（企业/自有素材）、cooperation（合作素材）、reference（对标素材） */
              material_type: string;
              /** 搜索视图，json字符串 */
              meta: string;
              /** 搜索视图名称 */
              name: string;
        }
        interface SearchContentReq {
              /** 素材分类：video（视频）、vcollection（视频合集）、audio（音频）、image（图片）、script（脚本）、doc（文案） */
              catalog: string;
              /** 二级分类id */
              category_ids: number[];
              /** 合集hash id */
              collection_id: string;
              /** 消耗类型：1 无消耗、2 有消耗、3 爆款视频、4 消耗1万+、5 消耗5万+、6 消耗10万+、7 消耗100万+、8 成交金额1万+、9 成交金额5万+、10 成交金额10万+、11 成交金额100万+ */
              cost_catalog: any;
              /** 创建开始时间，unix时间戳秒 */
              create_from: number;
              /** 创建结束时间，unix时间戳秒 */
              create_to: number;
              /** 创意类型 */
              creative_type: any;
              /** 创建人hash id */
              creator: string;
              /** 结束时长，秒 */
              duration_end: number;
              /** 开始时长，秒 */
              duration_start: number;
              /** 名称关键词 */
              keyword: string;
              /** 标签关系：and（交集）、or（并集） */
              label_and_or: string;
              /** 查询记录分页大小 */
              limit: number;
              offset: number;
              /** OSS同步状态 不传 全部， 1 同步中， 2 同步成功 */
              oss_sync_status: any;
              /** 平台标签 */
              platform_label: string;
              /** 个人标签，标签id数组 */
              private_label: number[];
              /** -total_cost（总消耗）、-today_cost_std（今日消耗-标准）、-total_cost_std（总消耗-标准）、-today_cost_univ（今日消耗-全域）、-total_cost_univ（总消耗-全域）、
-today_cost_ocean_ad（今日消耗-巨量广告）、-today_cost_tencent_ad（今日消耗-腾讯广告）、-today_cost_ks_niu（今日消耗-磁力金牛标准）、-today_cost_ks_niu_univ（今日消耗-磁力金牛全站）、
-total_cost_ocean_ad（总消耗-巨量广告）、-total_cost_tencent_ad（总消耗-腾讯广告）、-total_cost_ks_niu（总消耗-磁力金牛标准）、-total_cost_ks_niu_univ（总消耗-磁力金牛全站）、
-relate_creative_time（最新关联）、-deliver_member_count（最多投送人数）、-copy_jy_member_count（复制到剪映人数） 、alias（标题升序）、-alias（标题降序） */
              project_id: string;
              /** 公共标签，标签id数组 */
              public_label: number[];
              /** 排序字段：-id（最新发布）、-view_member_count（最多查看人数）、-download_member_count（最多下载人数）、-today_cost（今日消耗）、 */
              sort_by: string;
              /** 状态id */
              status_id: number;
              /** 系统标签 */
              system_label: string;
        }
        interface SearchContentResp {
              count: number;
              records: ContentInfo[];
        }
        interface SearchProjectListReq {
              /** 创建结束时间，unix时间戳秒 */
              create_end: number;
              /** 创建开始时间，unix时间戳秒 */
              create_start: number;
              /** 项目分组hash id */
              group_id: string;
              /** true 负责的项目 */
              is_director: boolean;
              /** true 标星项目 */
              is_follower: boolean;
              /** true 我参与的项目 */
              is_member: boolean;
              /** 搜索关键字 */
              keyword: string;
              limit: number;
              offset: number;
              /** 项目状态：1 暂无、2 正常、3 延期、4 完成、5 风险、6 归档 */
              status: any;
        }
        interface SearchProjectListResp {
              count: number;
              records: ProjectInfo[];
        }
        interface SearchProjectUserReq {
              /** 搜索关键字 */
              keyword: string;
              limit: number;
              /** inner 内部用户，outer 外部用户 */
              member_type: string;
              offset: number;
              /** 项目hash id */
              project_id: string;
        }
        interface SearchProjectUserResp {
              count: number;
              records: ProjectUserInfo[];
        }
        interface SearchTaskListReq {
              /** 搜索方式：true 且、false 或 */
              and: boolean;
              /** 排序方式：true 升序、false 降序 */
              asc: boolean;
              /** 创建结束时间，unix时间戳秒 */
              create_end: number;
              /** 创建开始时间，unix时间戳秒 */
              create_start: number;
              /** 创建人hash id列表 */
              creators: string[];
              /** 截止结束时间，unix时间戳秒 */
              deadline_end: number;
              /** 截止开始时间，unix时间戳秒 */
              deadline_start: number;
              /** 负责人hash id列表 */
              directors: string[];
              /** 关注人hash id列表 */
              followers: string[];
              /** 搜索关键字 */
              keyword: string;
              /** 查询记录分页大小 */
              limit: number;
              /** 记录偏移量 */
              offset: number;
              /** 排序字段：deadline（截止时间）、create_time（创建时间）、update_time（更新时间） */
              order_by: string;
              /** 项目hash id */
              project_id: string;
              /** 任务状态：1 未开始、2 进行中、3 已完成、0 全部任务 */
              status: number;
              /** 拆解目标hash id */
              sub_target_id: string;
        }
        interface SearchTaskListResp {
              /** 记录总数 */
              count: number;
              /** 记录列表 */
              records: TaskInfo[];
        }
        interface SearchVideoCommentListReq {
              /** 批注用户hash id */
              comment_user: string;
              /** 排序方式：true（降序）、false（升序） */
              desc: boolean;
              /** 内容hash id */
              id: string;
              /** 关键词搜索 */
              keyword: string;
              /** 批注标签id */
              label_id: number;
              /** 是否提及我 */
              refer_me: boolean;
              /** 是否回复我 */
              reply_me: boolean;
              /** 排序字段：start_second（时间码）、id（批注时间） */
              sort_by: string;
              /** 批注状态：1 未解决、2 已完成 */
              status: number;
              /** 上传uid */
              upload_uid: string;
        }
        interface SearchVideoCommentListResp {
              count: number;
              records: VideoCommentInfo[];
        }
        interface SearchViewInfo {
              catalog: string;
              id: string;
              material_type: string;
              /** 视图元数据，json格式字符串 */
              meta: string;
              /** 视图名称 */
              name: string;
        }
        interface SendNoticeReq {
              /** 内容hash id */
              ids: string[];
              /** 通知内容 */
              notice_info: any;
        }
        interface SetProjectFilePermissionReq {
              /** 指定部门id */
              assign_department: string[];
              /** 指定项目组id */
              assign_group: string[];
              /** 指定团队id */
              assign_team: string[];
              /** 指定用户hash id */
              assign_users: string[];
              /** 下载权限：self（我自己）、open（公开）、assign（指定用户） */
              permission_type: string;
              /** 工程hash id */
              project_id: string;
        }
        interface ShareInventoryReq {
              /** 历史清单hash id */
              inventory_id: string;
              /** 分享通知消息内容 */
              notice_message: string;
              /** 要分享到的用户hash id */
              target_user: string[];
        }
        interface ShareProjectFileReq {
              /** 指定用户hash id */
              assign_users: string[];
              /** 工程hash id */
              project_id: string;
        }
        interface ShareRecordInfo {
              /** 查看次数 */
              access_times: number;
              /** 查看次数限制 */
              access_times_limit: number;
              /** 是否可以批注 */
              can_annotation: boolean;
              /** 是否可以下载原视频 */
              can_download_origin: boolean;
              /** 是否可以下载转码后视频 */
              can_download_transcode: boolean;
              /** 是否可以数据复盘 */
              can_review: boolean;
              /** 是否可以更新视频状态 */
              can_update: boolean;
              /** 分享类型：outer（外部分享）、inner（内部分享） */
              catalog: any;
              /** 素材分类：video（视频）、vcollection（合集）、audio（音频）、image（图片）、script（脚本）、doc（文案） */
              content_catalog: string;
              /** 内容数量 */
              content_count: number;
              /** 分享的内容信息，只有一个内容的分享会返回 */
              content_infos: ContentInfo[];
              /** 类型：movie（成片）、own（企业/自有素材）、cooperation（合作素材）、reference（对标素材） */
              content_type: string;
              /** 创建（分享）时间 */
              create_time: number;
              /** 分享记录hash id */
              id: string;
              /** 是否收藏 */
              is_collect: boolean;
              /** 最近浏览时间 */
              last_view_time: number;
              /** 分享链接 */
              link: string;
              /** 分享密码 */
              password: string;
              /** 特殊标识，用于前端显示分享过期时间弹窗 */
              redo: boolean;
              /** 分享组织信息 */
              share_company: any;
              /** 分享用户信息 */
              share_user: any;
              /** 状态 */
              status: any;
              /** 分享标题 */
              title: string;
        }
        interface ShareSettingDetail {
              /** 访问次数限制 */
              access_times_limit: number;
              /** 分享指定部门，部门id数组 */
              assign_department: ShareTarget[];
              /** 分享指定项目组，项目组id数组 */
              assign_group: ShareTarget[];
              /** 分享指定团队，团队id数组 */
              assign_team: ShareTarget[];
              /** 分享指定个人，用户hash id数组 */
              assign_user: ShareTarget[];
              /** 是否可以批注 */
              can_annotation: boolean;
              /** 是否可以下载原视频 */
              can_download_origin: boolean;
              /** 外部分享 */
              can_download_transcode: boolean;
              /** 是否可以数据复盘 */
              can_review: boolean;
              /** 是否可以更新视频状态 */
              can_update: boolean;
              /** 分享类型：outer（外部分享）、inner（内部分享） */
              catalog: any;
              /** 过期时间 */
              expires_at: number;
              /** 分享hash id */
              id: string;
              /** 通知内容 */
              notice_message: string;
              /** 分享链接访问码 */
              password: string;
              /** 内部分享 */
              title: string;
        }
        interface ShareStatus {
              /** 分享过期时间，0 表示不过期 */
              expire_at: number;
              /** 是否过期，true 表示已过期 */
              is_expired: boolean;
        }
        interface ShareTarget {
              /** 对象hash id */
              hash_id: string;
              /** 对象id */
              id: number;
              /** 对象名称 */
              name: string;
              /** 目标类型：1 个人、2 团队、3 部门、4 项目组 */
              target_type: number;
        }
        interface SimpleCompanyInfo {
              id: number;
              name: string;
        }
        interface SimpleContentInfo {
              /** 素材分类 */
              catalog: string;
              /** 内容hash id */
              id: string;
              /** 封面图 */
              thumbs: string[];
              /** 内容标题 */
              title: string;
              /** 音视频播放地址 */
              urls: string[];
        }
        interface SimpleProjectGroup {
              /** 分组名称 */
              alias: string;
              /** 分组hash id */
              id: string;
        }
        interface SimpleProjectInfo {
              /** 周期结束时间，unix时间戳秒 */
              cycle_end: number;
              /** 周期开始时间，unix时间戳秒 */
              cycle_start: number;
              /** 负责人 */
              director: any;
              /** 项目hash id */
              id: string;
              /** 项目主题 */
              theme: string;
        }
        interface SplitProjectTargetReq {
              /** 查看权限指定部门，部门id数组 */
              assign_department: string[];
              /** 查看权限指定项目组，项目组id数组 */
              assign_group: string[];
              /** 查看权限指定团队，团队id数组 */
              assign_team: string[];
              /** 查看权限指定个人，用户hash id数组 */
              assign_user: string[];
              /** 负责人id */
              director: string;
              /** 项目hash id */
              project_id: string;
              /** 备注 */
              remark: string;
              /** 拆解任务hash id */
              split_id: string;
              /** 拆解目标列表 */
              targets: TargetInfo[];
        }
        interface SplitRecordInfo {
              /** 创建时间，unix时间戳秒 */
              create_time: number;
              /** 负责人所在部门列表 */
              departments: AssignTargetInfo[];
              /** 负责人 */
              director: any;
              /** 已完成百分比 */
              finished_percent: number;
              /** 拆解任务hash id */
              id: string;
              /** 项目hash id */
              project_id: string;
              /** 简介 */
              remark: string;
              /** 项目目标排序列表 */
              sort_targets: SortTargetInfo[];
              /** 拆解任务状态：1 暂无、2 正常、3 延期、4 完成、5 风险、6 归档 */
              status: any;
              /** 目标列表 */
              targets: SplitTargetInfo[];
        }
        interface SplitTargetInfo {
              /** 已完成百分比 */
              finished_percent: number;
              /** 完成值 */
              finished_value: number;
              /** 目标名称 */
              item: string;
              /** 目标中文名称 */
              item_chinese: string;
              /** 目标值 */
              target_value: number;
              /** 单位：0 数值、1 百分比 */
              unit_type: any;
              /** 权重, 1-100 */
              weight: number;
        }
        interface StatPointInfo {
              /** 统计日期，格式:"20060102" */
              stat_date: string;
              /** 统计值 */
              value: number;
        }
        interface StatusInfo {
              /** 状态名称 */
              name: string;
              /** 样式 */
              style: string;
        }
        interface SwitchMovieVersionReq {
              /** 成片hash id */
              movie_id: string;
              /** 成片版本hash id */
              version_id: string;
        }
        interface TargetField {
              /** 目标名称 */
              item: string;
              /** 目标中文名称 */
              item_chinese: string;
              /** 单位：0 数值、1 百分比 */
              unit_type: any;
        }
        interface TargetSplitEditDetail {
              /** 查看权限指定部门 */
              assign_department: AssignTargetInfo[];
              /** 查看权限指定团队 */
              assign_team: AssignTargetInfo[];
              /** 查看权限指定个人 */
              assign_user: SimpleUserInfo[];
              /** 负责人 */
              director: any;
              /** 拆解任务hash id */
              id: string;
              /** 项目hash id */
              project_id: string;
              /** 备注 */
              remark: string;
              /** 项目目标列表 */
              targets: TargetInfo[];
        }
        interface TargetTrendInfo {
              /** 目标名称 */
              item: string;
              /** 目标中文名称 */
              item_chinese: string;
              /** 日期点列表 */
              points: DatePointInfo[];
        }
        interface TaskDetail {
              /** 查看权限指定部门 */
              assign_department: AssignTargetInfo[];
              /** 查看权限指定团队 */
              assign_team: AssignTargetInfo[];
              /** 指定用户 */
              assign_user: SimpleUserInfo[];
              /** 内容数量 */
              content_count: number;
              /** 创建时间，unix时间戳秒 */
              create_time: number;
              /** 创建人 */
              creator: any;
              /** 截止时间，unix时间戳秒 */
              deadline: number;
              /** 负责人 */
              director: any;
              /** 出片数量 */
              finish_count: number;
              /** 是否已关注:true 已关注、false 未关注 */
              followed: boolean;
              /** 任务hash id */
              id: string;
              /** 公开日期，unix时间戳秒 */
              open_date: number;
              /** 产品类型名称 */
              product_name: string;
              /** 项目名称 */
              project_title: string;
              /** 参考内容 */
              refrence_contents: RefrenceContent[];
              /** 备注 */
              remark: string;
              /** 脚本类型名称 */
              script_name: string;
              /** 任务状态：1 未开始、2 进行中、3 已完成 */
              status: number;
              /** 项目拆解目标名称 */
              sub_target_title: string;
              /** 任务标题 */
              title: string;
              /** 任务id */
              uid: string;
              /** 画面内容 */
              video_content: string;
              /** 查看权限：open（公开）、assign（指定）、public（公共资源） */
              view_permission: string;
        }
        interface TaskEditDetail {
              /** 查看权限指定部门 */
              assign_department: AssignTargetInfo[];
              /** 查看权限指定项目组 */
              assign_group: AssignTargetInfo[];
              /** 查看权限指定团队 */
              assign_team: AssignTargetInfo[];
              /** 查看权限指定个人 */
              assign_user: SimpleUserInfo[];
              /** 内容数量 */
              content_count: number;
              /** 截止日期，unix时间戳秒 */
              deadline: number;
              /** 负责人hash id */
              director: any;
              /** 任务hash id */
              id: string;
              /** 公开日期，unix时间戳秒 */
              open_date: number;
              /** 产品类型id */
              product_id: number;
              /** 产品类型名称 */
              product_name: string;
              /** 项目hash id */
              project_id: string;
              /** 项目主题 */
              project_title: string;
              /** 参考内容 */
              refrence_contents: RefrenceContent[];
              /** 备注 */
              remark: string;
              /** 脚本类型id */
              script_id: number;
              /** 脚本类型名称 */
              script_name: string;
              /** 项目拆解目标hash id */
              sub_target_id: string;
              /** 项目拆解目标名称 */
              sub_target_title: string;
              /** 标题 */
              title: string;
              /** 画面内容 */
              video_content: string;
              /** 查看权限：open（公开）、assign（指定）、public（公共资源） */
              view_permission: string;
        }
        interface TaskInfo {
              /** 内容数量 */
              content_count: number;
              /** 创建时间，unix时间戳秒 */
              create_time: number;
              /** 创建人 */
              creator: any;
              /** 截止时间，unix时间戳秒 */
              deadline: number;
              /** 负责人 */
              director: any;
              /** 出片数量 */
              finish_count: number;
              /** 是否已关注:true 已关注、false 未关注 */
              followed: boolean;
              /** 关注人 */
              followers: SimpleUserInfo[];
              /** 任务hash id */
              id: string;
              /** 产品类型名称 */
              product_name: string;
              /** 项目名称 */
              project_title: string;
              /** 参考内容 */
              refrence_contents: RefrenceContent[];
              /** 关联内容 */
              relate_contents: SimpleContentInfo[];
              /** 备注 */
              remark: string;
              /** 任务状态：1 未开始、2 进行中、3 已完成 */
              status: number;
              /** 项目拆解目标名称 */
              sub_target_title: string;
              /** 任务标题 */
              title: string;
              /** 任务id */
              uid: string;
              /** 更新时间，unix时间戳秒 */
              update_time: number;
              /** 画面内容 */
              video_content: string;
        }
        interface TaskSummaryDataInfo {
              /** 统计字段 */
              item: string;
              /** 环比 */
              mom_ratio: number;
              /** 上一个周期总量 */
              previous_total: number;
              /** 总量 */
              total: number;
        }
        interface TeamMaterialDetailTotalStat {
              /** 记录数目 */
              count: number;
              /** 记录列表 */
              records: PersonalMaterialDetailTotalStat[];
              /** 汇总统计信息 */
              summary: any;
        }
        interface TeamTotalStat {
              /** 记录数目 */
              count: number;
              /** 记录列表 */
              records: PersonalTotalStat[];
              /** 汇总统计信息 */
              summary: any;
        }
        interface TotalStatInfo {
              /** 统计结束时间，unix时间戳秒 */
              end_time: number;
              /** 统计开始时间，unix时间戳秒 */
              start_time: number;
              /** 统计数据，key 为统计字段，value 为统计值 */
              stats: Record<string, any>;
        }
        interface TranscodeContentReq {
              /** 内容hash id */
              id: string;
        }
        interface TranscodeContentResp {
              request_body: string;
              request_url: string;
        }
        interface UpdateContentPermissionReq {
              /** 内容hash id */
              ids: string[];
              /** 通知内容 */
              notice_info: any;
              /** 查看权限 */
              view_permission: any;
        }
        interface UpdateContentRelationReq {
              /** 内容hash id列表 */
              content_ids: string[];
              /** 任务hash id */
              id: string;
        }
        interface UpdateContentStatusReq {
              /** 内容hash id */
              ids: string[];
              /** 通知内容 */
              notice_info: any;
              /** 内容状态 id */
              status: number;
        }
        interface UpdateContentTitleReq {
              /** 内容hash id */
              ids: string[];
              /** 标题/前缀 */
              keyword: string;
              /** 名称规则：title（标题）、prefix+title（前缀+标题）、title+number（标题+编号） */
              name_regulation: string;
        }
        interface UpdateDocumentTxtContentReq {
              /** 文档内容 */
              content: string;
              /** 文档文件地址 */
              file_url: string;
              /** 文档hash id */
              id: string;
        }
        interface UpdateInnerShareReq {
              /** 分享指定部门，部门id数组 */
              assign_department: string[];
              /** 分享指定项目组，项目组id数组 */
              assign_group: string[];
              /** 分享指定团队，团队id数组 */
              assign_team: string[];
              /** 分享指定个人，用户hash id数组 */
              assign_user: string[];
              /** 过期时间 */
              expires_at: number;
              /** 分享hash id */
              id: string;
              /** 通知内容 */
              notice_message: string;
              /** 分享标题 */
              title: string;
        }
        interface UpdateInventoryReq {
              /** 历史清单hash id */
              id: string;
              /** 删除的素材hash id */
              material_ids: string[];
        }
        interface UpdateOuterShareReq {
              /** 访问次数限制 */
              access_times_limit: number;
              /** 是否可以批注 */
              can_annotation: boolean;
              /** 是否可以下载原视频 */
              can_download_origin: boolean;
              /** 是否可以下载转码后视频 */
              can_download_transcode: boolean;
              /** 是否可以数据复盘 */
              can_review: boolean;
              /** 是否可以更新视频状态 */
              can_update: boolean;
              /** 过期时间 */
              expires_at: number;
              /** 分享hash id */
              id: string;
              /** 分享链接访问码 */
              password: string;
              /** 分享标题 */
              title: string;
        }
        interface UpdateProjectGroupReq {
              /** 项目分组hash id列表 */
              group_ids: string[];
              /** 项目hash id */
              id: string;
        }
        interface UpdateProjectStatusReq {
              /** 项目hash id */
              id: string;
              /** 项目状态：1 暂无、2 正常、3 延期、4 完成、5 风险、6 归档 */
              status: any;
        }
        interface UpdateProjectTargetSplitStatusReq {
              /** 拆解目标hash id */
              id: string;
              /** 拆解目标状态：1 暂无、2 正常、3 延期、4 完成、5 风险、6 归档 */
              status: any;
        }
        interface UpdateProjectUserRoleReq {
              /** 项目hash id */
              project_id: string;
              /** 角色hash id数组 */
              role_ids: string[];
              /** 用户id */
              user_ids: string[];
        }
        interface UpdateTargetSortSettingReq {
              /** 排序配置 */
              settings: SortTargetInfo[];
              /** 项目hash id|拆解记录hash id */
              target_id: string;
        }
        interface UpdateTaskReferenceContentReq {
              /** 任务hash id */
              id: string;
              /** 参考内容 */
              refrence_contents: RefrenceContent[];
        }
        interface UpdateTaskReferenceContentResp {
              /** 参考内容 */
              refrence_contents: RefrenceContent[];
        }
        interface UpdateTempWorkListReq {
              /** 要删除的素材hash id */
              material_ids: string[];
        }
        interface UpdateUserSearchViewReq {
              /** 搜索视图hash id */
              id: string;
              /** 视图元数据 */
              meta: string;
              /** 搜索视图名称 */
              name: string;
        }
        interface UpdateVideoCommentStatusReq {
              /** 批注hash id */
              id: string;
              /** 批注状态：1 未解决、2 已完成 */
              status: any;
        }
        interface UploadDocInfo {
              /** 追评 */
              comment: string;
              /** 追评图片 */
              comment_files: UploadFileInfo[];
              /** 是否上传完成 */
              finished: boolean;
              /** 文案内容 */
              text: string;
              /** 文案图片 */
              text_files: UploadFileInfo[];
        }
        interface UploadFileGroupInfo {
              /** 文件列表 */
              files: UploadFileInfo[];
              /** 是否上传完成 */
              finished: boolean;
              /** 分组名称 */
              name: string;
        }
        interface UserDepartmentInfo {
              id: number;
              name: string;
              path: string[];
        }
        interface UserMaterialDetailTotalStat {
              /** 记录数目 */
              count: number;
              /** 记录列表 */
              records: PersonalMaterialDetailTotalStat[];
        }
        interface UserTotalStat {
              /** 记录数目 */
              count: number;
              /** 记录列表 */
              records: PersonalTotalStat[];
        }
        interface ValueUserInfo {
              /** 用户信息 */
              user: any;
              /** 值 */
              value: number;
        }
        interface VideoCommentInfo {
              /** 批注附件 */
              attachment: any;
              /** 批注内容 */
              content: string;
              /** 创建时间，unix时间戳秒 */
              create_time: number;
              /** 批注结束时间，单位秒 */
              end_second: number;
              /** 批注hash id */
              id: string;
              /** 批注图片元数据 */
              image_meta: string;
              /** 批注标签 */
              label: any;
              /** 提及用户列表 */
              refer_users: SimpleUserInfo[];
              /** 回复列表 */
              replies: VideoCommentInfo[];
              /** 回复数量 */
              reply_count: number;
              /** 批注开始时间，单位秒 */
              start_second: number;
              /** 状态：1 正常、2 删除 */
              status: any;
              /** true 表示要标记的回复 */
              tagged_reply: boolean;
              /** 批注用户信息 */
              user: any;
        }
        interface VideoPkListFlowDataInfo {
              /** 视频名称 */
              alias: string;
              /** 视频hash id */
              hash_id: string;
              /** 各维度数据 */
              item_map: Record<string, any>;
        }
        interface VideoPkListInteractDataInfo {
              /** 视频名称 */
              alias: string;
              /** 复制到剪映人次 */
              copy_jy_count: number;
              /** 复制到剪映人数 */
              copy_jy_member_count: number;
              /** 投送人次 */
              deliver_count: number;
              /** 投送人数 */
              deliver_member_count: number;
              /** 下载人次 */
              download_count: number;
              /** 下载人数 */
              download_member_count: number;
              /** 视频hash id */
              hash_id: string;
              /** 查看人次 */
              view_count: number;
              /** 查看人数 */
              view_member_count: number;
        }
        interface VideoReplayCommentInfo {
              /** 批注内容 */
              content: string;
              /** 创建时间，unix时间戳秒 */
              create_time: number;
              /** 批注结束时间，单位秒 */
              end_second: number;
              /** 批注hash id */
              id: string;
              /** 批注图片元数据 */
              image_meta: string;
              /** 批注标签 */
              label: any;
              /** 批注开始时间，单位秒 */
              start_second: number;
              /** 批注用户信息 */
              user: any;
        }
        interface AdAccountInfo {
              /** 账号ID */
              account_id: number;
              /** 账号名称 */
              account_name: string;
        }
        interface AdMaterialInfo {
              create_time: number;
              material_id: string;
              material_name: string;
        }
        interface AdTemplateAccountInfo {
              /** 账号列表 */
              accounts: AdAccountInfo[];
              /** 模版名称 */
              template_alias: string;
              /** 模版ID */
              template_id: number;
        }
        interface AddMovieRelatedAdMaterialReq {
              /** 成片hash_id */
              id: string;
              /** 关联的广告素材 */
              materials: AddMovieRelatedAdMaterialReqMaterial[];
        }
        interface AddMovieRelatedAdMaterialReqMaterial {
              /** 广告素材 string id */
              ad_material_id: string;
              /** 广告素材名称 */
              ad_material_name: string;
              /** 广告账户id */
              advertiser_id: number;
              /** 流量平台：1 巨量千川 */
              flow_platform: any;
        }
        interface AdvertiserInfo {
              /** 广告账户id */
              advertiser_id: number;
              advertiser_name: string;
              /** 流量平台：1 巨量千川 */
              flow_platform: any;
        }
        interface CancelMovieDeriveReq {
              /** 衍生记录hash id数组 */
              ids: string[];
              /** 成片hash_id */
              movie_id: string;
        }
        interface CheckDeliverVideoInfo {
              /** 错误信息 */
              err_msg: string;
              /** 视频hash id */
              id: string;
              /** 是否错误 */
              is_err: boolean;
              /** 是否平台上传重复 */
              is_platform_upload_repeat: boolean;
              /** 视频类型：true 转码后视频、false 原视频 */
              is_transcode: boolean;
        }
        interface CheckDeliverVideoReq {
              /** 视频类型：true 转码后视频、false 原视频 */
              is_transcode: boolean;
              /** 每个素材id 和 是否转码的配置 */
              materials_config: MaterialTranscodeConfig[];
              /** 默认是千川， 然后巨量广告 其他 广告平台需要传 */
              platform: any;
        }
        interface CheckDeliverVideoResp {
              list: CheckDeliverVideoInfo[];
        }
        interface CreativityGroupInfo {
              /** 创意列表（成片hash id数组） */
              material_ids: string[];
              /** 创意组名称 */
              name: string;
        }
        interface DelMovieRelatedAdMaterialReq {
              /** 关联记录hash id */
              ids: string[];
              /** 成片hash_id */
              movie_id: string;
        }
        interface DeliverAndCreateAdReq {
              /** 创意组信息 */
              creativity_groups: CreativityGroupInfo[];
              /** 投送账户及模版信息 */
              deliver_targets: DeliverTargetInfo[];
              /** 视频类型：true 转码后视频、false 原视频 */
              is_transcode: boolean;
              /** 推送成功后修改视频状态id */
              status_id: number;
              /** 视频名称，动态词包字符串 */
              video_name: string;
        }
        interface DeliverAndCreateAdResp {
              /** 请求接口参数 */
              request_body: string;
              /** 请求终端接口url */
              request_url: string;
              /** 回滚接口参数 */
              rollback_body: string;
              /** 回滚接口url */
              rollback_url: string;
        }
        interface DeliverTargetInfo {
              /** 使用的广告计划模版ID */
              ad_template_id: number;
              /** 广告账户ids */
              advertiser_ids: number[];
        }
        interface DeliverVideoReq {
              /** 广告主ids */
              advertiser_ids: number[];
              /** 衍生配置 */
              derive: any;
              /** 视频类型：true 转码后视频、false 原视频 */
              is_transcode: boolean;
              /** 已选创意（成片/衍生视频hash_id数组） */
              material_ids: string[];
              /** 每个素材id 和 是否转码的配置 */
              materials_config: MaterialTranscodeConfig[];
              /** 默认是千川， 然后巨量广告 其他 广告平台需要传 */
              platform: any;
              /** 推送成功后修改视频状态id */
              status_id: number;
              /** 视频名称模版 */
              video_name: string;
        }
        interface DeriveConfig {
              /** 是否启用衍生配置 */
              enable: boolean;
              /** 衍生配置值 */
              value: number;
        }
        interface DerivedMovieDeliverInfo {
              /** 广告账户id */
              advertiser_id: number;
              /** 广告账户名称 */
              advertiser_name: string;
              /** 创建时间 */
              create_time: number;
              /** 投送id */
              deliver_id: number;
              /** todo 拷贝数据 */
              flow_material_alias: string;
              /** 三方广告平台千川素材id */
              flow_material_id: number;
              /** 流量平台：1 巨量千川、2 小店随心投 */
              flow_platform: any;
              /** 视频id */
              material_uid: string;
              /** 视频名称 */
              movie_alias: string;
              /** 失败信息 */
              msg: string;
              /** 操作人信息 */
              op_user: any;
              /** todo 前端需要更新下字段 */
              qichuan_material_alias: string;
              /** 千川素材id */
              qichuan_material_id: number;
              /** 上传状态："SUCCESS" 成功、"FAIL" 失败、"PROCESSING" 处理中 */
              status: any;
              /** 更新时间 */
              update_time: number;
              /** 推送视频类型：source（原视频）、transcode（转码后视频） */
              url_type: any;
        }
        interface DerivedMovieFlowInfo {
              /** 广告计划id */
              ad_id: number;
              /** 广告计划名称 */
              ad_name: string;
              /** 模版id */
              ad_template_id: number;
              /** 模版名称 */
              ad_template_name: string;
              /** 广告账户id */
              advertiser_id: number;
              /** 广告账户名称 */
              advertiser_name: string;
              /** 创建时间 */
              create_time: number;
              /** 投送id */
              deliver_id: number;
              /** 流量平台：1 巨量千川、2 小店随心投 */
              flow_platform: any;
              /** 营销目标 */
              marketing_goal: any;
              /** 视频id */
              material_uid: string;
              /** 视频名称 */
              movie_alias: string;
              /** 操作人信息 */
              op_user: any;
              /** 失败原因，当状态是失败的时候展示 */
              report_msg: string;
              /** 状态："SUCCESS" 成功、"FAIL" 失败、"PROCESSING" 处理中、"WAITING" 等待中、"COPYING" 复制中 */
              report_status: any;
              /** 更新时间 */
              update_time: number;
              /** 推送视频类型：source（原视频）、transcode（转码后视频） */
              url_type: any;
        }
        interface ExportMovieRelatedAdMaterialStatReq {
              /** 广告计划类型：report（千川标准推广）、uni_promotion（千川全域推广）、xiaodian（小店随心投） */
              ad_catalog: any;
              /** 不传 */
              cid: number;
              /** 不传 */
              company_id: number;
              /** 导出字段 */
              fields: string[];
              /** 成片hash_id */
              id: string;
              /** 营销目标：VIDEO_PROM_GOODS（推商品｜视频）、LIVE_PROM_GOODS（推直播间） */
              marketing_goal: any;
              /** 结束日期 */
              to: number;
              /** 不传 */
              user_id: number;
        }
        interface FileInfo {
              /** 文件hash id */
              id: string;
              /** 名称 */
              name: string;
              /** 封面图 */
              thumb: string;
              /** 转码状态:1 转码中、2 转码成功、3 转码失败 */
              transcode_status: any;
              /** 转码地址 */
              transcode_url: string;
              /** 内容地址 */
              url: string;
        }
        interface GetAdTemplateAccountListReq {
              /** 广告计划模版ID数组 */
              ids: number[];
        }
        interface GetAdTemplateAccountListResp {
              /** 模版记录 */
              records: AdTemplateAccountInfo[];
        }
        interface GetAdVideoListResp {
              count: number;
              records: AdMaterialInfo[];
        }
        interface GetDerivedMovieDeliverRecordsResp {
              count: number;
              /** 投放记录 */
              records: DerivedMovieDeliverInfo[];
        }
        interface GetDerivedMovieFlowRecordsResp {
              count: number;
              /** 投放记录 */
              records: DerivedMovieFlowInfo[];
        }
        interface GetMovieAuditHistoryResp {
              count: number;
              records: MovieAuditHistoryInfo[];
        }
        interface GetMovieDeliverRecordsResp {
              /** 记录总数 */
              count: number;
              /** 投放记录 */
              records: MovieDeliverInfo[];
              /** 状态统计 */
              status_stat: Record<string, any>;
        }
        interface GetMovieDeriveRecordsResp {
              /** 记录总数 */
              count: number;
              /** 衍生记录 */
              records: MovieDeriveInfo[];
        }
        interface GetMovieMonitorAdvertiserResp {
              /** 记录总数 */
              count: number;
              /** 账户列表 */
              records: AdvertiserInfo[];
        }
        interface GetMovieRelatedAdMaterialResp {
              count: number;
              /** 相关联的广告素材 */
              records: RelateAdMaterialInfo[];
        }
        interface GetMovieRelatedAdMaterialStatResp {
              /** 相关联的广告素材统计数据 */
              records: MovieRelatedAdMaterialStatInfo[];
              /** 统计数据 */
              total_stat: Record<string, any>;
        }
        interface GetMovieRelatedAdPlanCountResp {
              /** 成片相关联的广告计划计数数据 */
              records: MovieRelatedAdPlanCountItem[];
        }
        interface GetMovieRelatedAdPlanStatReq {
              /** 广告计划类型：report（千川标准推广）、uni_promotion（千川全域推广）、xiaodian（小店随心投） */
              ad_catalog: any;
              /** 成片hash_id */
              id: string;
              /** 营销目标：VIDEO_PROM_GOODS（推商品｜视频）、LIVE_PROM_GOODS（推直播间） */
              marketing_goal: any;
              /** 结束日期 */
              to: number;
        }
        interface GetMovieRelatedAdPlanStatResp {
              last_update_at: string;
              /** 相关联的广告计划统计数据 */
              records: MovieRelatedAdPlanStatInfo[];
              /** 统计数据 */
              total_stat: Record<string, any>;
        }
        interface GetMovieReplayStatisticResp {
              /** 数据点 */
              points: PointInfo[];
        }
        interface GetVideoPkListLossDataResp {
              count: number;
              /** 视频统计数据 */
              records: VideoPkListLossDataInfo[];
        }
        interface LossPoint {
              /** 秒 */
              h_second: number;
              /** 数值 */
              value: number;
        }
        interface MaterialTranscodeConfig {
              /** 是否需要转码 true/false */
              is_transcode: boolean;
              /** 成片 id */
              material_id: string;
        }
        interface MovieAuditHistoryInfo {
              /** 创意素材id */
              ad_material_id: number;
              /** 广告计划id */
              ad_plan_id: number;
              /** 广告计划名称 */
              ad_plan_name: string;
              /** 广告账户id */
              advertiser_id: number;
              /** 广告账户名称 */
              advertiser_name: string;
              /** 审核时间，unix时间戳秒 */
              audit_time: number;
              /** 流量平台：1 巨量千川、2 小店随心投 */
              flow_platform: any;
              /** 审核记录hash id */
              id: string;
              /** 视频标题 */
              material_alias: string;
              /** 审核失败原因 */
              reject_reason: string;
              /** 审核建议 */
              suggestions: string;
              /** 视频地址类型：source（原地址）、transcode（转码地址） */
              url_type: any;
        }
        interface MovieDeliverInfo {
              /** 广告账户id */
              advertiser_id: number;
              /** 广告账户名称 */
              advertiser_name: string;
              /** 广告平台广告账号的字符串id */
              advertiser_platform_id: string;
              /** 创建时间 */
              create_time: number;
              /** 三方广告平台素材名称 */
              flow_material_alias: string;
              /** 三方广告平台素材id */
              flow_material_id: number;
              /** 记录hash id */
              id: string;
              /** 成片名称 */
              material_alias: string;
              /** 失败信息 */
              msg: string;
              /** 广告平台类型 */
              platform: any;
              /** 广告平台名称 */
              platform_name: string;
              /** 上传状态："SUCCESS" 成功、"FAIL" 失败、"PROCESSING" 处理中 */
              status: any;
        }
        interface MovieDeriveInfo {
              /** 衍生视频名称 */
              alias: string;
              /** 创建时间 */
              create_time: number;
              /** 衍生操作人信息 */
              derive_user: any;
              /** 衍生视频hash id */
              id: string;
              /** 最后操作人信息 */
              last_op_user: any;
              /** 衍生状态：1 排队中、2 进行中、3 失败、4 成功、5 已取消、6 已投送 */
              status: any;
              /** 衍生视频封面 */
              thumb_url: string;
              /** 衍生视频uid */
              uid: string;
              /** 更新时间 */
              update_time: number;
              /** 衍生视频地址 */
              video_url: string;
        }
        interface MovieRelatedAdMaterialStatInfo {
              /** 广告素材id */
              ad_material_id: number;
              /** 广告素材名称 */
              ad_material_name: string;
              /** 广告账户id */
              advertiser_id: number;
              /** 广告账号名称 */
              advertiser_name: string;
              /** 广告账户平台id */
              advertiser_platform_id: string;
              /** 统计数据 */
              stat: Record<string, any>;
        }
        interface MovieRelatedAdPlanStatInfo {
              /** 广告素材id */
              ad_material_id: number;
              /** 广告素材名称 */
              ad_material_name: string;
              /** 广告计划id */
              ad_plan_id: number;
              /** 广告计划名称 */
              ad_plan_name: string;
              /** 广告账户id */
              advertiser_id: number;
              /** 广告账号名称 */
              advertiser_name: string;
              advertiser_platform_id: string;
              /** 统计数据 */
              stat: Record<string, any>;
        }
        interface NoticeInfo {
              /** 部门id */
              department_ids: string[];
              /** 项目组id */
              group_ids: string[];
              /** 通知内容 */
              message: string;
              /** 团队id */
              team_ids: string[];
              /** 用户hash id */
              user_ids: string[];
        }
        interface PermissionInfo {
              /** 查看权限指定部门，部门id数组 */
              assign_department: string[];
              /** 查看权限指定项目组，项目组id数组 */
              assign_group: string[];
              /** 查看权限指定团队，团队id数组 */
              assign_team: string[];
              /** 查看权限指定个人，用户hash id数组 */
              assign_user: string[];
              /** 公开日期，unix时间戳秒 */
              open_date: number;
        }
        interface PointInfo {
              /** 点击数 */
              click_cnt: number;
              /** 评论数 */
              dy_comment: number;
              /** 关注数 */
              dy_follow: number;
              /** 点赞数 */
              dy_like: number;
              /** 时间点，单位：秒 */
              h_sec: number;
              /** 流失数 */
              user_lose_cnt: number;
        }
        interface RedoVideoDeliverReq {
              /** 同步记录hash id */
              id: string;
        }
        interface RelateAdMaterialInfo {
              /** 广告素材id */
              ad_material_id: number;
              /** 广告素材名称 */
              ad_material_name: string;
              /** 广告账户id */
              advertiser_id: number;
              /** 广告账户名称 */
              advertiser_name: string;
              /** 广告账户平台id */
              advertiser_platform_id: string;
              /** 流量平台：1 巨量千川 */
              flow_platform: any;
              /** 流量平台名称 */
              flow_platform_name: string;
              /** 关联记录hash id */
              id: string;
              /** 操作人信息 */
              op_user: any;
              /** 关联方式：1 手动关联、2 自动关联 */
              relate_mode: number;
              /** 关联时间：unix时间戳，秒 */
              related_at: number;
        }
        interface SimpleUserInfo {
              alias: string;
              avatar: string;
              id: string;
        }
        interface UpdateMovieMonitorAdvertiserReq {
              /** 新的广告账户列表 */
              add_targets: AdvertiserInfo[];
              /** 成片hash_id */
              id: string;
        }
        interface VideoPkListLossDataInfo {
              /** 视频名称 */
              alias: string;
              /** 视频hash id */
              hash_id: string;
              /** 各维度流失数据 */
              stat_mp: Record<string, any>;
        }
}