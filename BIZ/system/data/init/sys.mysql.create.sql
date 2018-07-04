insert into SA_OPorg ($clientName, sID, sName, sCode, sLongName, sFName, sFCode, sFID, sorgKindID, sSequence, sValidState, sParent, sLevel, sPhone, sFax, sAddress, sZip, sDescription, version)
values ($clientValue, 'initorg', '初始部门', 'initorg', '初始部门', '/初始部门', '/initorg', '/initorg.ogn', 'ogn', '/000', 1, null, 1, '', '', '', '', '', 0);
insert into SA_OPPerson ($clientName, sID, sName, sCode, sNumb, sLoginName, sPassword, sMainorgID, sSafeLevelID, sSequence, sValidState, sDescription, sSex, sBirthday, sJoinDate, sHomePlace, sDegree, sGraduateSchool, sSpeciality, sSchoolLength, sTitle, sMarriage, sCardNO, sCardKind, sFamilyAddress, sZip, sMsn, sQQ, sMail, sMobilePhone, sFamilyPhone, sOfficePhone, version, sPhoto)
values ($clientValue, 'init', 'init', 'init', 1, 'init', 'E10ADC3949BA59ABBE56E057F20F883E', 'initorg', null, 1, 1, null, '男', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null);
insert into SA_OPorg ($clientName, sID, sName, sCode, sLongName, sFName, sFCode, sFID, sorgKindID, sSequence, sValidState, sParent, sLevel, sPhone, sFax, sAddress, sZip, sDescription, sPersonID, version, sNodeKind)
values ($clientValue, 'init@initorg', 'init', 'init', null, '/初始部门/init', '/initorg/init', '/initorg.ogn/initorg@initorg.psm', 'psm', '/000/000', 1, 'initorg', 1, null, null, null, null, null, 'init', 0, 'nkLeaf');
