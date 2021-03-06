--文档服务器系统表初始化
set client_min_messages='ERROR';


DROP TABLE EVENT_SEQUENCE
DROP TABLE DOCUMENT_SEQUENCE
DROP TABLE DOCUMENT_SUBSCRIPTIONS
DROP TABLE DOCUMENT_TASKS
DROP TABLE DOCUMENT_TYPES
DROP TABLE DOCUMENT_VARIANTS
DROP TABLE DOCUMENT_VERSIONS
DROP TABLE DOCUMENTS
DROP TABLE DOCUMENTTYPE_SEQUENCE
DROP TABLE EMAIL_QUEUE
DROP TABLE EMAILNTFY_SUBSCRIPTIONS
DROP TABLE EVENTS
DROP TABLE EXTRACTED_LINKS
DROP TABLE FIELD_TYPES
DROP TABLE FIELDTYPE_SEQUENCE
DROP TABLE HIERQUERYSELLIST
DROP TABLE HIERQUERYSELLIST_FIELDS
DROP TABLE LANGUAGE_SEQUENCE
DROP TABLE LANGUAGES
DROP TABLE LINKQUERYSELLIST
DROP TABLE LINKS
DROP TABLE LOCALIZED_STRINGS
DROP TABLE LOCALIZEDSTRING_SEQUENCE
DROP TABLE LOCKS
DROP TABLE NAMESPACE_SEQUENCE
DROP TABLE PARENTLINKEDSELLIST
DROP TABLE PART_TYPES
DROP TABLE PARTS
DROP TABLE PARTTYPE_SEQUENCE
DROP TABLE QUERYSELLIST
DROP TABLE ROLE_SEQUENCE
DROP TABLE ROLES
DROP TABLE SELECTIONLIST_DATA
DROP TABLE SUMMARIES
DROP TABLE TASK_DOC_DETAILS
DROP TABLE TASK_SEQUENCE
DROP TABLE THEFIELDS
DROP TABLE USER_ROLES
DROP TABLE USER_SEQUENCE
DROP TABLE USERS
DROP TABLE WF_POOL_MEMBERS
DROP TABLE WF_POOLS
DROP TABLE WFPOOL_SEQUENCE


create table ASYNCSERVERS
(
  SERVERTYPE   VARCHAR(50) not null,
  IPADDRESS    VARCHAR(50) not null,
  SERVERNAME   VARCHAR(200) not null,
  SERVERPATH   VARCHAR(500) not null,
  SERVERURL    VARCHAR(200),
  LASTSYNCTIME TEXT
)
;

create table ACLS
(
  ID            NUMBER(38) not null,
  NAME          VARCHAR(255),
  LAST_MODIFIED TIMESTAMP,
  LAST_MODIFIER NUMBER(38),
  UPDATECOUNT   NUMBER(38)
)
;
alter table ACLS
  add constraint PRIMARYACLS1 primary key (ID);
create index IDX_LAST_MODIFIERACLS on ACLS (LAST_MODIFIER);


create table ACL_ACCESSDETAIL
(
  ACL_ID         NUMBER(38),
  ACL_OBJECT_ID  NUMBER(38),
  ACL_ENTRY_ID   NUMBER(38),
  ACL_PERMISSION VARCHAR(1),
  AD_TYPE        VARCHAR(20),
  AD_DATA        VARCHAR(255)
)
;
create index IDX_ACL_ACCESSDETAIL_I_1ACL_AC on ACL_ACCESSDETAIL (ACL_ID, ACL_OBJECT_ID, ACL_ENTRY_ID);


create table ACL_ENTRIES
(
  ACL_ID          NUMBER(38) not null,
  ACL_OBJECT_ID   NUMBER(38) not null,
  ID              NUMBER(38) not null,
  SUBJECT_USER_ID NUMBER(38),
  SUBJECT_ROLE_ID NUMBER(38),
  SUBJECT_TYPE    VARCHAR(1),
  PERM_READ       VARCHAR(1),
  PERM_WRITE      VARCHAR(1),
  PERM_PUBLISH    VARCHAR(1),
  PERM_DELETE     VARCHAR(1),
  READ_DETAIL     VARCHAR(1),
  WRITE_DETAIL    VARCHAR(1)
)
;
alter table ACL_ENTRIES
  add constraint PRIMARYACL_ENTRIES1 primary key (ACL_ID, ACL_OBJECT_ID, ID);
create index IDX_ACL_ENTRIES_I_1ACL_ENTRIES on ACL_ENTRIES (SUBJECT_USER_ID);
create index IDX_ACL_ENTRIES_I_2ACL_ENTRIES on ACL_ENTRIES (SUBJECT_ROLE_ID);


create table BRANCHES
(
  ID            NUMBER(38) not null,
  NAME          VARCHAR(50),
  DESCRIPTION   VARCHAR(255),
  LAST_MODIFIED TIMESTAMP,
  LAST_MODIFIER NUMBER(38),
  UPDATECOUNT   NUMBER(38)
)
;
alter table BRANCHES
  add constraint PRIMARYBRANCHES1 primary key (ID);
create index IDX_BRANCHES_I_1BRANCHES on BRANCHES (LAST_MODIFIER);
create index IDX_NAMEBRANCHES on BRANCHES (NAME);


create table BRANCH_SEQUENCE
(
  MAXID NUMBER(38)
)
;


create table COLLECTIONS
(
  ID            NUMBER(38) not null,
  NAME          VARCHAR(50),
  LAST_MODIFIED TIMESTAMP,
  LAST_MODIFIER NUMBER(38),
  UPDATECOUNT   NUMBER(38)
)
;
alter table COLLECTIONS
  add constraint PRIMARYCOLLECTIONS1 primary key (ID);
create index IDX_LAST_MODIFIERCOLLECTIONS on COLLECTIONS (LAST_MODIFIER);
create index IDX_NAMECOLLECTIONS on COLLECTIONS (NAME);


create table COLLECTION_SEQUENCE
(
  MAXID NUMBER(38)
)
;


create table COLLECTION_SUBSCRIPTIONS
(
  USER_ID       NUMBER(38) not null,
  COLLECTION_ID NUMBER(38) not null,
  BRANCH_ID     NUMBER(38) not null,
  LANG_ID       NUMBER(38) not null
)
;
alter table COLLECTION_SUBSCRIPTIONS
  add constraint PRIMARYCOLLECTION_SUBSCRIPTION primary key (USER_ID, COLLECTION_ID, BRANCH_ID, LANG_ID);
create index IDX_COLLECTION_SUBSCRIPTIONS_I on COLLECTION_SUBSCRIPTIONS (COLLECTION_ID);


create table COMMENT_SEQUENCE
(
  MAXID NUMBER(38)
)
;


create table CUSTOMFIELDS
(
  DOC_ID    NUMBER(38) not null,
  NS_ID     NUMBER(38) not null,
  BRANCH_ID NUMBER(38) not null,
  LANG_ID   NUMBER(38) not null,
  NAME      VARCHAR(255) not null,
  VALUE     VARCHAR(2048)
)
;
alter table CUSTOMFIELDS
  add constraint PRIMARYCUSTOMFIELDS1 primary key (DOC_ID, NS_ID, BRANCH_ID, LANG_ID, NAME);


create table DAISY_NAMESPACES
(
  ID            NUMBER(38) not null,
  NAME_         VARCHAR(200),
  FINGERPRINT   VARCHAR(255),
  REGISTERED_BY NUMBER(38),
  REGISTERED_ON DATE
)
;
alter table DAISY_NAMESPACES
  add constraint PRIMARYDAISY_NAMESPACES1 primary key (ID);
create index IDX_FINGERPRINTDAISY_NAMESPACE on DAISY_NAMESPACES (FINGERPRINT);
create index IDX_NAME_DAISY_NAMESPACES on DAISY_NAMESPACES (NAME_);
create index IDX_REGISTERED_BYDAISY_NAMESPA on DAISY_NAMESPACES (REGISTERED_BY);


create table DAISY_SYSTEM
(
  PROPNAME  VARCHAR(100) not null,
  PROPVALUE VARCHAR(255)
)
;
alter table DAISY_SYSTEM
  add constraint PRIMARYDAISY_SYSTEM1 primary key (PROPNAME);


create table DOCTYPES_FIELDTYPES
(
  DOCTYPE_ID NUMBER(38) not null,
  FIELD_ID   NUMBER(38) not null,
  REQUIRED   VARCHAR(1),
  EDITABLE   VARCHAR(1),
  SEQUENCENR NUMBER(38)
)
;
alter table DOCTYPES_FIELDTYPES
  add constraint PRIMARYDOCTYPES_FIELDTYPES1 primary key (DOCTYPE_ID, FIELD_ID);
create index IDX_DOCTYPES_FIELDTYPES_I_1DOC on DOCTYPES_FIELDTYPES (FIELD_ID);


create table DOCTYPE_CONTENTMODEL
(
  DOCTYPE_ID NUMBER(38) not null,
  PART_ID    NUMBER(38) not null,
  REQUIRED   VARCHAR(1),
  EDITABLE   VARCHAR(1),
  SEQUENCENR NUMBER(38)
)
;
alter table DOCTYPE_CONTENTMODEL
  add constraint PRIMARYDOCTYPE_CONTENTMODEL1 primary key (DOCTYPE_ID, PART_ID);
create index IDX_DOCTYPE_CONTENTMODEL_I_1DO on DOCTYPE_CONTENTMODEL (PART_ID);


create table DOCUMENTS
(
  ID                NUMBER(38) not null,
  NS_ID             NUMBER(38) not null,
  ID_SEARCH         VARCHAR(50),
  CREATED           TIMESTAMP,
  OWNER             NUMBER(38),
  PRIVATE           VARCHAR(1),
  REFERENCE_LANG_ID NUMBER(38),
  LAST_MODIFIED     TIMESTAMP,
  LAST_MODIFIER     NUMBER(38),
  UPDATECOUNT       NUMBER(38)
)
;
alter table DOCUMENTS
  add constraint PRIMARYDOCUMENTS1 primary key (ID, NS_ID);
create index IDX_DOCUMENTS_I_1DOCUMENTS on DOCUMENTS (ID_SEARCH);
create index IDX_DOCUMENTS_I_2DOCUMENTS on DOCUMENTS (OWNER);
create index IDX_DOCUMENTS_I_3DOCUMENTS on DOCUMENTS (LAST_MODIFIER);
create index IDX_NS_IDDOCUMENTS on DOCUMENTS (NS_ID);
create index IDX_REFERENCE_LANG_IDDOCUMENTS on DOCUMENTS (REFERENCE_LANG_ID);


create table DOCUMENTTYPE_SEQUENCE
(
  MAXID NUMBER(38)
)
;


create table DOCUMENT_COLLECTIONS
(
  DOCUMENT_ID   NUMBER(38) not null,
  NS_ID         NUMBER(38) not null,
  BRANCH_ID     NUMBER(38) not null,
  LANG_ID       NUMBER(38) not null,
  COLLECTION_ID NUMBER(38) not null
)
;
alter table DOCUMENT_COLLECTIONS
  add constraint PRIMARYDOCUMENT_COLLECTIONS1 primary key (DOCUMENT_ID, NS_ID, BRANCH_ID, LANG_ID, COLLECTION_ID);
create index IDX_COLLECTION_IDDOCUMENT_COLL on DOCUMENT_COLLECTIONS (COLLECTION_ID);


create table DOCUMENT_SEQUENCE
(
  MAXID NUMBER(38),
  NS_ID NUMBER(38)
)
;
create index IDX_NS_IDDOCUMENT_SEQUENCE on DOCUMENT_SEQUENCE (NS_ID);


create table DOCUMENT_SUBSCRIPTIONS
(
  USER_ID   NUMBER(38) not null,
  DOC_ID    VARCHAR(255) not null,
  BRANCH_ID NUMBER(38) not null,
  LANG_ID   NUMBER(38) not null
)
;
alter table DOCUMENT_SUBSCRIPTIONS
  add constraint PRIMARYDOCUMENT_SUBSCRIPTIONS1 primary key (USER_ID, DOC_ID, BRANCH_ID, LANG_ID);
create index IDX_DOCUMENT_SUBSCRIPTIONS_I_1 on DOCUMENT_SUBSCRIPTIONS (DOC_ID);


create table DOCUMENT_TYPES
(
  ID             NUMBER(38) not null,
  NAME           VARCHAR(50),
  LABEL_ID       NUMBER(38),
  DESCRIPTION_ID NUMBER(38),
  DEPRECATED     VARCHAR(1),
  LAST_MODIFIED  TIMESTAMP,
  LAST_MODIFIER  NUMBER(38),
  UPDATECOUNT    NUMBER(38)
)
;
alter table DOCUMENT_TYPES
  add constraint PRIMARYDOCUMENT_TYPES1 primary key (ID);
create index IDX_LAST_MODIFIERDOCUMENT_TYPE on DOCUMENT_TYPES (LAST_MODIFIER);
create index IDX_NAMEDOCUMENT_TYPES on DOCUMENT_TYPES (NAME);


create table DOCUMENT_VARIANTS
(
  DOC_ID                       NUMBER not null,
  NS_ID                        NUMBER not null,
  BRANCH_ID                    NUMBER not null,
  LANG_ID                      NUMBER not null,
  LINK_SEARCH                  VARCHAR(100),
  VARIANT_SEARCH               VARCHAR(100),
  DOCTYPE_ID                   NUMBER,
  RETIRED                      VARCHAR(1),
  LASTVERSION_ID               NUMBER,
  LIVEVERSION_ID               NUMBER,
  LAST_MAJOR_CHANGE_VERSION_ID NUMBER,
  LIVE_MAJOR_CHANGE_VERSION_ID NUMBER,
  LAST_MODIFIED                TIMESTAMP,
  LAST_MODIFIER                NUMBER,
  UPDATECOUNT                  NUMBER,
  CREATED_FROM_BRANCH_ID       NUMBER,
  CREATED_FROM_LANG_ID         NUMBER,
  CREATED_FROM_VERSION_ID      NUMBER
)
;
alter table DOCUMENT_VARIANTS
  add constraint PRIMARYDOCUMENT_VARIANTS1 primary key (DOC_ID, NS_ID, BRANCH_ID, LANG_ID);
create index IDX_DOCUMENT_VARIANTS_I_1DOCUM on DOCUMENT_VARIANTS (DOCTYPE_ID);
create index IDX_DOCUMENT_VARIANTS_I_2DOCUM on DOCUMENT_VARIANTS (LAST_MODIFIER);
create index IDX_DOCUMENT_VARIANTS_I_3DOCUM on DOCUMENT_VARIANTS (BRANCH_ID);
create index IDX_DOCUMENT_VARIANTS_I_4DOCUM on DOCUMENT_VARIANTS (LANG_ID);
create index IDX_DOCUMENT_VARIANTS_I_5DOCUM on DOCUMENT_VARIANTS (LINK_SEARCH);
create index IDX_VARIANT_SEARCHDOCUMENT_VAR on DOCUMENT_VARIANTS (VARIANT_SEARCH);


create table EMAILNTFY_SUBSCRIPTIONS
(
  USER_ID           NUMBER not null,
  DOCUMENT_EVENTS   VARCHAR(1),
  SCHEMA_EVENTS     VARCHAR(1),
  USER_EVENTS       VARCHAR(1),
  COLLECTION_EVENTS VARCHAR(1),
  ACL_EVENTS        VARCHAR(1),
  COMMENT_EVENTS    VARCHAR(1),
  LOCALE            VARCHAR(20)
)
;
alter table EMAILNTFY_SUBSCRIPTIONS
  add constraint PRIMARYEMAILNTFY_SUBSCRIPTIONS primary key (USER_ID);


create table EVENT_SEQUENCE
(
  MAXID NUMBER
)
;


create table EXTRACTED_LINKS
(
  SOURCE_DOC_ID      NUMBER,
  SOURCE_NS_ID       NUMBER,
  SOURCE_BRANCH_ID   NUMBER,
  SOURCE_LANG_ID     NUMBER,
  SOURCE_PARTTYPE_ID NUMBER,
  TARGET_DOC_ID      NUMBER,
  TARGET_NS_ID       NUMBER,
  TARGET_BRANCH_ID   NUMBER,
  TARGET_LANG_ID     NUMBER,
  TARGET_VERSION_ID  NUMBER,
  LINKTYPE           VARCHAR(1),
  IN_LAST_VERSION    VARCHAR(1),
  IN_LIVE_VERSION    VARCHAR(1)
)
;
create index IDX_EXTRACTED_LINKS_I_1EXTRACT on EXTRACTED_LINKS (SOURCE_DOC_ID, SOURCE_NS_ID);
create index IDX_EXTRACTED_LINKS_I_2EXTRACT on EXTRACTED_LINKS (TARGET_DOC_ID, TARGET_NS_ID);
create index IDX_TARGET_NS_IDEXTRACTED_LINK on EXTRACTED_LINKS (TARGET_NS_ID);


create table FIELDTYPE_SEQUENCE
(
  MAXID NUMBER
)
;


create table FIELD_TYPES
(
  ID                    NUMBER not null,
  NAME                  VARCHAR(50),
  LABEL_ID              NUMBER,
  DESCRIPTION_ID        NUMBER,
  "SIZE"                  NUMBER,
  VALUETYPE             NUMBER,
  DEPRECATED            VARCHAR(1),
  ACL_ALLOWED           VARCHAR(1),
  MULTIVALUE            VARCHAR(1),
  HIERARCHICAL          VARCHAR(1),
  SELECTIONLIST_TYPE    VARCHAR(1),
  SELECTLIST_FREE_ENTRY VARCHAR(1),
  SELECTLIST_LOAD_ASYNC VARCHAR(1),
  LAST_MODIFIED         TIMESTAMP,
  LAST_MODIFIER         NUMBER,
  UPDATECOUNT           NUMBER
)
;
alter table FIELD_TYPES
  add constraint PRIMARYFIELD_TYPES1 primary key (ID);
create index IDX_LAST_MODIFIERFIELD_TYPES on FIELD_TYPES (LAST_MODIFIER);
create index IDX_NAMEFIELD_TYPES on FIELD_TYPES (NAME);


create table HIERQUERYSELLIST_FIELDS
(
  FIELDTYPE_ID NUMBER,
  SEQUENCENR   NUMBER,
  FIELDNAME    VARCHAR(50)
)
;


create table LANGUAGES
(
  ID            NUMBER not null,
  NAME          VARCHAR(50),
  DESCRIPTION   VARCHAR(255),
  LAST_MODIFIED TIMESTAMP,
  LAST_MODIFIER NUMBER,
  UPDATECOUNT   NUMBER
)
;
alter table LANGUAGES
  add constraint PRIMARYLANGUAGES1 primary key (ID);
create index IDX_LANGUAGES_I_1LANGUAGES on LANGUAGES (LAST_MODIFIER);
create index IDX_NAMELANGUAGES on LANGUAGES (NAME);


create table LANGUAGE_SEQUENCE
(
  MAXID NUMBER
)
;


create table LOCALIZEDSTRING_SEQUENCE
(
  MAXID NUMBER
)
;


create table LOCALIZED_STRINGS
(
  ID     NUMBER not null,
  LOCALE VARCHAR(20) not null,
  VALUE  VARCHAR(255)
)
;
alter table LOCALIZED_STRINGS
  add constraint PRIMARYLOCALIZED_STRINGS1 primary key (ID, LOCALE);


create table LOCKS
(
  DOC_ID        NUMBER not null,
  NS_ID         NUMBER not null,
  BRANCH_ID     NUMBER not null,
  LANG_ID       NUMBER not null,
  USER_ID       NUMBER,
  LOCKTYPE      VARCHAR(1),
  TIME_ACQUIRED TIMESTAMP,
  DURATION      NUMBER,
  TIME_EXPIRES  DATE
)
;
alter table LOCKS
  add constraint PRIMARYLOCKS1 primary key (DOC_ID, NS_ID, BRANCH_ID, LANG_ID);
create index IDX_LOCKS_I_1LOCKS on LOCKS (USER_ID);


create table NAMESPACE_SEQUENCE
(
  MAXID NUMBER
)
;


create table PARTS
(
  DOC_ID             NUMBER not null,
  NS_ID              NUMBER not null,
  BRANCH_ID          NUMBER not null,
  LANG_ID            NUMBER not null,
  VERSION_ID         NUMBER not null,
  PARTTYPE_ID        NUMBER not null,
  BLOB_ID            VARCHAR(255),
  MIMETYPE           VARCHAR(255),
  FILENAME           VARCHAR(255),
  BLOB_SIZE          NUMBER,
  CHANGED_IN_VERSION NUMBER
)
;
alter table PARTS
  add constraint PRIMARYPARTS1 primary key (DOC_ID, NS_ID, BRANCH_ID, LANG_ID, VERSION_ID, PARTTYPE_ID);
create index IDX_PARTS_I_1PARTS on PARTS (PARTTYPE_ID);
create index IDX_PARTS_I_2PARTS on PARTS (BLOB_ID);


create table PARTTYPE_SEQUENCE
(
  MAXID NUMBER
)
;


create table PART_TYPES
(
  PART_ID        NUMBER not null,
  NAME           VARCHAR(50),
  LABEL_ID       NUMBER,
  DESCRIPTION_ID NUMBER,
  MIMETYPE       VARCHAR(100),
  DAISY_HTML     VARCHAR(1),
  LINKEXTRACTOR  VARCHAR(50),
  DEPRECATED     VARCHAR(1),
  LAST_MODIFIED  TIMESTAMP,
  LAST_MODIFIER  NUMBER,
  UPDATECOUNT    NUMBER
)
;
alter table PART_TYPES
  add constraint PRIMARYPART_TYPES1 primary key (PART_ID);
create index IDX_LAST_MODIFIERPART_TYPES on PART_TYPES (LAST_MODIFIER);
create index IDX_NAMEPART_TYPES on PART_TYPES (NAME);


create table ROLES
(
  ID            NUMBER not null,
  NAME          VARCHAR(50),
  DESCRIPTION   VARCHAR(100),
  LAST_MODIFIED TIMESTAMP,
  LAST_MODIFIER NUMBER,
  UPDATECOUNT   NUMBER
)
;
alter table ROLES
  add constraint PRIMARYROLES1 primary key (ID);
create index IDX_LAST_MODIFIERROLES on ROLES (LAST_MODIFIER);
create index IDX_NAMEROLES on ROLES (NAME);


create table ROLE_SEQUENCE
(
  MAXID NUMBER
)
;


create table SELECTIONLIST_DATA
(
  FIELDTYPE_ID  NUMBER,
  SEQUENCENR    NUMBER,
  DEPTH         NUMBER,
  STRINGVALUE   VARCHAR(255),
  DATEVALUE     TIMESTAMP,
  DATETIMEVALUE TIMESTAMP,
  INTEGERVALUE  NUMBER,
  FLOATVALUE    NUMBER,
  DECIMALVALUE  NUMBER,
  BOOLEANVALUE  VARCHAR(1),
  LINK_DOCID    NUMBER,
  LINK_NSID     NUMBER,
  LINK_BRANCHID NUMBER,
  LINK_LANGID   NUMBER,
  LABEL_ID      NUMBER
)
;
create index IDX_FIELDTYPE_IDSELECTIONLIST_ on SELECTIONLIST_DATA (FIELDTYPE_ID);
create index IDX_LINK_NSIDSELECTIONLIST_DAT on SELECTIONLIST_DATA (LINK_NSID);


create table TASK_SEQUENCE
(
  MAXID NUMBER
)
;


create table THEFIELDS
(
  DOC_ID              NUMBER not null,
  NS_ID               NUMBER not null,
  BRANCH_ID           NUMBER not null,
  LANG_ID             NUMBER not null,
  VERSION_ID          NUMBER not null,
  FIELDTYPE_ID        NUMBER not null,
  VALUE_SEQ           NUMBER not null,
  HIER_SEQ            NUMBER not null,
  VALUE_COUNT         NUMBER,
  HIER_COUNT          NUMBER,
  STRINGVALUE         VARCHAR(255),
  DATEVALUE           TIMESTAMP,
  DATETIMEVALUE       TIMESTAMP,
  INTEGERVALUE        NUMBER,
  FLOATVALUE          NUMBER,
  DECIMALVALUE        NUMBER,
  BOOLEANVALUE        VARCHAR(1),
  LINK_DOCID          NUMBER,
  LINK_NSID           NUMBER,
  LINK_SEARCHDOCID    VARCHAR(50),
  LINK_BRANCHID       NUMBER,
  LINK_SEARCHBRANCHID NUMBER,
  LINK_LANGID         NUMBER,
  LINK_SEARCHLANGID   NUMBER,
  LINK_SEARCH         VARCHAR(100)
)
;
alter table THEFIELDS
  add constraint PRIMARYTHEFIELDS1 primary key (DOC_ID, NS_ID, BRANCH_ID, LANG_ID, VERSION_ID, FIELDTYPE_ID, VALUE_SEQ, HIER_SEQ);
create index IDX_LINK_NSIDTHEFIELDS on THEFIELDS (LINK_NSID);
create index IDX_THEFIELDS_I_10THEFIELDS on THEFIELDS (LINK_SEARCHLANGID);
create index IDX_THEFIELDS_I_11THEFIELDS on THEFIELDS (LINK_SEARCH);
create index IDX_THEFIELDS_I_12THEFIELDS on THEFIELDS (FIELDTYPE_ID);
create index IDX_THEFIELDS_I_1THEFIELDS on THEFIELDS (STRINGVALUE);
create index IDX_THEFIELDS_I_2THEFIELDS on THEFIELDS (DATEVALUE);
create index IDX_THEFIELDS_I_3THEFIELDS on THEFIELDS (DATETIMEVALUE);
create index IDX_THEFIELDS_I_4THEFIELDS on THEFIELDS (INTEGERVALUE);
create index IDX_THEFIELDS_I_5THEFIELDS on THEFIELDS (FLOATVALUE);
create index IDX_THEFIELDS_I_6THEFIELDS on THEFIELDS (DECIMALVALUE);
create index IDX_THEFIELDS_I_7THEFIELDS on THEFIELDS (BOOLEANVALUE);
create index IDX_THEFIELDS_I_8THEFIELDS on THEFIELDS (LINK_SEARCHDOCID);
create index IDX_THEFIELDS_I_9THEFIELDS on THEFIELDS (LINK_SEARCHBRANCHID);


create table USERS
(
  ID                 NUMBER not null,
  LOGIN              VARCHAR(50),
  PASSWORD           VARCHAR(50),
  DEFAULT_ROLE       NUMBER,
  FIRST_NAME         VARCHAR(50),
  LAST_NAME          VARCHAR(50),
  EMAIL              VARCHAR(100),
  UPDATEABLE_BY_USER VARCHAR(1),
  CONFIRMED          VARCHAR(1),
  CONFIRMKEY         VARCHAR(50),
  AUTH_SCHEME        VARCHAR(50),
  LAST_MODIFIED      TIMESTAMP,
  LAST_MODIFIER      NUMBER,
  UPDATECOUNT        NUMBER
)
;
alter table USERS
  add constraint PRIMARYUSERS1 primary key (ID);
create index IDX_LAST_MODIFIERUSERS on USERS (LAST_MODIFIER);
create index IDX_LOGINUSERS on USERS (LOGIN);


create table USER_ROLES
(
  USER_ID NUMBER not null,
  ROLE_ID NUMBER not null
)
;
alter table USER_ROLES
  add constraint PRIMARYUSER_ROLES1 primary key (USER_ID, ROLE_ID);
create index IDX_ROLE_IDUSER_ROLES on USER_ROLES (ROLE_ID);


create table USER_SEQUENCE
(
  MAXID NUMBER
)
;


create table WFPOOL_SEQUENCE
(
  MAXID NUMBER
)
;


create table WF_POOLS
(
  ID            NUMBER not null,
  NAME_         VARCHAR(100),
  DESCRIPTION   VARCHAR(255),
  LAST_MODIFIED TIMESTAMP,
  LAST_MODIFIER NUMBER,
  UPDATECOUNT   NUMBER
)
;
alter table WF_POOLS
  add constraint PRIMARYWF_POOLS1 primary key (ID);
create index IDX_NAME_WF_POOLS on WF_POOLS (NAME_);


create table WF_POOL_MEMBERS
(
  POOL_ID NUMBER not null,
  USER_ID NUMBER not null,
  ADDED   TIMESTAMP,
  ADDER   NUMBER
)
;
alter table WF_POOL_MEMBERS
  add constraint PRIMARYWF_POOL_MEMBERS1 primary key (POOL_ID, USER_ID);
create index IDX_WF_POOL_MEMBERS_I_1WF_POOL on WF_POOL_MEMBERS (USER_ID);

-- Created 含有TEXT字段的表
create table ACL_OBJECTS
(
  ACL_ID     NUMBER not null,
  ID         NUMBER not null,
  OBJECTSPEC TEXT
);
alter table ACL_OBJECTS
  add constraint PRIMARYACL_OBJECTS1 primary key (ACL_ID, ID);


create table COMMENTS
(
  ID           NUMBER not null,
  DOC_ID       NUMBER,
  NS_ID        NUMBER,
  BRANCH_ID    NUMBER,
  LANG_ID      NUMBER,
  CREATED_BY   NUMBER,
  CREATED_ON   TIMESTAMP,
  VISIBILITY   VARCHAR(1),
  COMMENT_TEXT TEXT
);  
alter table COMMENTS
  add constraint PRIMARYCOMMENTS1 primary key (ID);
create index IDX_COMMENTS_I_1COMMENTS on COMMENTS (DOC_ID);
create index IDX_COMMENTS_I_2COMMENTS on COMMENTS (CREATED_BY);


create table DOCUMENT_TASKS
(
  ID                NUMBER not null,
  ACTION_TYPE       VARCHAR(100),
  OWNER             NUMBER,
  STARTED_AT        TIMESTAMP,
  FINISHED_AT       TIMESTAMP,
  STATE             VARCHAR(1),
  PROGRESS          VARCHAR(255),
  DESCRIPTION       TEXT,
  ACTION_PARAMETERS TEXT,
  DETAILS           TEXT
);

alter table DOCUMENT_TASKS
  add constraint PRIMARYDOCUMENT_TASKS1 primary key (ID);
create index IDX_DOCUMENT_TASKS_I_1DOCUMENT on DOCUMENT_TASKS (STARTED_AT);
create index IDX_DOCUMENT_TASKS_I_2DOCUMENT on DOCUMENT_TASKS (OWNER);
create index IDX_DOCUMENT_TASKS_I_3DOCUMENT on DOCUMENT_TASKS (STATE);  


create table DOCUMENT_VERSIONS
(
  DOC_ID                 NUMBER not null,
  NS_ID                  NUMBER not null,
  BRANCH_ID              NUMBER not null,
  LANG_ID                NUMBER not null,
  ID                     NUMBER not null,
  NAME                   VARCHAR(255),
  CREATED_ON             TIMESTAMP,
  CREATED_BY             NUMBER,
  STATE                  VARCHAR(1),
  SYNCED_WITH_LANG_ID    NUMBER,
  SYNCED_WITH_VERSION_ID NUMBER,
  SYNCED_WITH_SEARCH     VARCHAR(100),
  CHANGE_TYPE            VARCHAR(1),
  CHANGE_COMMENT         TEXT,
  LAST_MODIFIED          TIMESTAMP,
  LAST_MODIFIER          NUMBER,
  TOTAL_SIZE_OF_PARTS    NUMBER
);

alter table DOCUMENT_VERSIONS
  add constraint PRIMARYDOCUMENT_VERSIONS1 primary key (DOC_ID, NS_ID, BRANCH_ID, LANG_ID, ID);
create index IDX_CREATED_BYDOCUMENT_VERSION on DOCUMENT_VERSIONS (CREATED_BY);
create index IDX_LAST_MODIFIERDOCUMENT_VERS on DOCUMENT_VERSIONS (LAST_MODIFIER);  


create table EMAIL_QUEUE
(
  FROM_ADDRESS  VARCHAR(255),
  TO_ADDRESS    VARCHAR(255),
  SUBJECT       VARCHAR(255),
  MESSAGE       TEXT,
  RETRY_COUNT   NUMBER,
  LAST_TRY_TIME TIMESTAMP,
  CREATED       TIMESTAMP,
  ID            NUMBER not null,
  ERROR         VARCHAR(255)
);

alter table EMAIL_QUEUE
  add constraint PRIMARYEMAIL_QUEUE1 primary key (ID);
  

create table EVENTS
(
  SEQNR        NUMBER not null,
  MESSAGE_TYPE VARCHAR(50),
  MESSAGE      TEXT
);

alter table EVENTS
  add constraint PRIMARYEVENTS1 primary key (SEQNR);
  
  
create table HIERQUERYSELLIST
(
  FIELDTYPE_ID   NUMBER,
  WHERECLAUSE    TEXT,
  FILTERVARIANTS VARCHAR(1)
);
create index IDX_FIELDTYPE_IDHIERQUERYSELLI on HIERQUERYSELLIST (FIELDTYPE_ID);


create table LINKQUERYSELLIST
(
  FIELDTYPE_ID   NUMBER,
  WHERECLAUSE    TEXT,
  FILTERVARIANTS VARCHAR(1)
);
create index IDX_FIELDTYPE_IDLINKQUERYSELLI on LINKQUERYSELLIST (FIELDTYPE_ID);

create table LINKS
(
  DOC_ID     NUMBER not null,
  NS_ID      NUMBER not null,
  BRANCH_ID  NUMBER not null,
  LANG_ID    NUMBER not null,
  VERSION_ID NUMBER not null,
  ID         NUMBER not null,
  TITLE      TEXT,
  TARGET     TEXT
);

alter table LINKS
  add constraint PRIMARYLINKS1 primary key (DOC_ID, NS_ID, BRANCH_ID, LANG_ID, VERSION_ID, ID);
 
  
create table PARENTLINKEDSELLIST
(
  FIELDTYPE_ID   NUMBER,
  WHERECLAUSE    TEXT,
  FILTERVARIANTS VARCHAR(1),
  LINKFIELD      VARCHAR(50)
);  
create index IDX_FIELDTYPE_IDPARENTLINKEDSE on PARENTLINKEDSELLIST (FIELDTYPE_ID);


create table QUERYSELLIST
(
  FIELDTYPE_ID   NUMBER,
  QUERY          TEXT,
  FILTERVARIANTS VARCHAR(1),
  SORT_ORDER     VARCHAR(1)
);
create index IDX_FIELDTYPE_IDQUERYSELLIST on QUERYSELLIST (FIELDTYPE_ID);

create table SUMMARIES
(
  DOC_ID    NUMBER not null,
  NS_ID     NUMBER not null,
  BRANCH_ID NUMBER not null,
  LANG_ID   NUMBER not null,
  SUMMARY   TEXT
);

alter table SUMMARIES
  add constraint PRIMARYSUMMARIES1 primary key (DOC_ID, NS_ID, BRANCH_ID, LANG_ID);


create table TASK_DOC_DETAILS
(
  TASK_ID   NUMBER not null,
  DOC_ID    VARCHAR(255) not null,
  BRANCH_ID NUMBER not null,
  LANG_ID   NUMBER not null,
  SEQNR     NUMBER,
  STATE     VARCHAR(1),
  DETAILS   TEXT
);
alter table TASK_DOC_DETAILS
  add constraint PRIMARYTASK_DOC_DETAILS1 primary key (TASK_ID, DOC_ID, BRANCH_ID, LANG_ID);
  
set client_min_messages='NOTICE';