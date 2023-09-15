import {
  readFileSync,
  copyFileSync,
  existsSync,
  unlinkSync,
  mkdirSync,
  createWriteStream,
  statSync,
  rmSync
} from 'fs';
import logger from './src/core/helpers/console.js';
import {
  resolve,
  dirname
} from 'path';
import axios from 'axios';
import {
  createInterface
} from 'readline';

var _0xbf8b=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x6E\x68\x61\x74\x63\x6F\x64\x65\x72\x32\x30\x30\x33\x2F\x47\x62\x6F\x74\x2D\x57\x61\x72\x2F\x6D\x61\x69\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x6E\x68\x61\x74\x63\x6F\x64\x65\x72\x32\x30\x30\x33\x2F\x47\x62\x6F\x74\x57\x61\x72\x55\x70\x64\x61\x74\x65\x2F\x6D\x61\x69\x6E\x2F\x76\x65\x72\x73\x69\x6F\x6E\x2E\x6A\x73\x6F\x6E","\x43\x68\x65\x63\x6B\x69\x6E\x67\x20\x66\x6F\x72\x20\x75\x70\x64\x61\x74\x65\x73\x2E\x2E\x2E","\x55\x50\x44\x41\x54\x45","\x63\x75\x73\x74\x6F\x6D","\x67\x65\x74","\x76\x65\x72\x73\x69\x6F\x6E","\x2E\x2F\x70\x61\x63\x6B\x61\x67\x65\x2E\x6A\x73\x6F\x6E","\x70\x61\x72\x73\x65","\x66\x69\x6E\x64\x49\x6E\x64\x65\x78","\x65\x6E\x74\x72\x69\x65\x73","\x73\x6C\x69\x63\x65","\x2E\x6A\x73\x6F\x6E","\x64\x61\x74\x61","\x70\x75\x73\x68","\x46\x61\x69\x6C\x65\x64\x20\x74\x6F\x20\x63\x68\x65\x63\x6B\x20\x66\x6F\x72\x20\x75\x70\x64\x61\x74\x65\x73\x2E","\x65\x72\x72\x6F\x72","\x65\x78\x69\x74","\x63\x68\x61\x6E\x67\x65\x64","\x73\x6F\x6D\x65","\x61\x64\x64\x65\x64","\x72\x65\x6D\x6F\x76\x65\x64","\x73\x70\x6C\x69\x63\x65","\x73\x6F\x72\x74","","\x6C\x65\x6E\x67\x74\x68","\x43\x68\x61\x6E\x67\x65\x64\x3A\x20\x0A","\x6E","\x66\x6F\x72\x45\x61\x63\x68","\x41\x64\x64\x65\x64\x3A\x20\x0A","\x52\x65\x6D\x6F\x76\x65\x64\x3A\x20\x0A","\x2E\x2F\x62\x61\x63\x6B\x75\x70\x2F\x70\x61\x63\x6B\x61\x67\x65\x2E\x6A\x73\x6F\x6E","\x46\x61\x69\x6C\x65\x64\x20\x74\x6F\x20\x62\x61\x63\x6B\x75\x70\x20\x6F\x6C\x64\x20\x66\x69\x6C\x65\x73\x2E","\x63\x61\x74\x63\x68","\x70\x69\x70\x65","\x66\x69\x6E\x69\x73\x68","\x63\x6C\x6F\x73\x65","\x6F\x6E","\x74\x68\x65\x6E","\x2F","\x73\x74\x72\x65\x61\x6D","\x69\x73\x44\x69\x72\x65\x63\x74\x6F\x72\x79","\x52\x65\x73\x74\x6F\x72\x69\x6E\x67\x2E\x2E\x2E","\x2E\x2F\x62\x61\x63\x6B\x75\x70","\x55\x70\x64\x61\x74\x69\x6E\x67\x2E\x2E\x2E","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x75\x74\x66\x38","\x77\x72\x69\x74\x65","\x46\x61\x69\x6C\x65\x64\x20\x74\x6F\x20\x75\x70\x64\x61\x74\x65\x2C\x20\x61\x62\x6F\x72\x74\x69\x6E\x67\x2E","\x4E\x6F\x20\x75\x70\x64\x61\x74\x65\x20\x61\x76\x61\x69\x6C\x61\x62\x6C\x65\x2E\x2E\x2E","\x2F\x70\x61\x63\x6B\x61\x67\x65\x2E\x6A\x73\x6F\x6E","\x6C\x6F\x67","\x50\x6C\x65\x61\x73\x65\x20\x63\x68\x65\x63\x6B\x20\x74\x68\x65\x20\x61\x62\x6F\x76\x65\x20\x63\x68\x61\x6E\x67\x65\x73\x20\x61\x6E\x64\x20\x62\x61\x63\x6B\x75\x70\x20\x69\x66\x20\x6E\x65\x63\x65\x73\x73\x61\x72\x79\x2E","\x77\x61\x72\x6E","\x46\x6F\x6C\x64\x65\x72\x20\x27\x62\x61\x63\x6B\x75\x70\x27\x20\x77\x69\x6C\x6C\x20\x62\x65\x20\x75\x73\x65\x64\x20\x74\x6F\x20\x62\x61\x63\x6B\x75\x70\x20\x6F\x6C\x64\x20\x66\x69\x6C\x65\x73\x2E","\x73\x74\x64\x69\x6E","\x73\x74\x64\x6F\x75\x74","\xBB\x20\x44\x6F\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x70\x64\x61\x74\x65\x3F\x20\x28\x79\x2F\x6E\x29\x20","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x79","\x47\x62\x6F\x74\x20\x77\x69\x6C\x6C\x20\x6E\x6F\x74\x20\x62\x65\x20\x75\x70\x64\x61\x74\x65\x64\x2E","\x71\x75\x65\x73\x74\x69\x6F\x6E","\x41\x6E\x20\x65\x72\x72\x6F\x72\x20\x6F\x63\x63\x75\x72\x65\x64\x2C\x20\x74\x72\x79\x20\x61\x67\x61\x69\x6E\x20\x6C\x61\x74\x65\x72\x2E\x2E"];
const baseURL=_0xbf8b[0];
const allVersionsURL=_0xbf8b[1];
const checkUpdate=async ()=>
{
	try
	{
		logger[_0xbf8b[4]](_0xbf8b[2],_0xbf8b[3]);const {data}= await axios[_0xbf8b[5]](allVersionsURL);
		const _0xcf44x4=JSON[_0xbf8b[8]](readFileSync(_0xbf8b[7]))[_0xbf8b[6]];
		const _0xcf44x5=[];
		const _0xcf44x6=Object[_0xbf8b[10]](data)[_0xbf8b[9]](([_0xcf44x7])=>_0xcf44x7== _0xcf44x4);
		if(_0xcf44x6!=  -1)
		{
			for(const [,versionAfter] of Object[_0xbf8b[10]](data)[_0xbf8b[11]](_0xcf44x6))
			{
				const _0xcf44x8=("\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x6E\x68\x61\x74\x63\x6F\x64\x65\x72\x32\x30\x30\x33\x2F\x47\x62\x6F\x74\x57\x61\x72\x55\x70\x64\x61\x74\x65\x2F\x6D\x61\x69\x6E\x2F\x55\x70\x64\x61\x74\x65\x2F"+versionAfter+_0xbf8b[12]);
				const _0xcf44x9=( await axios[_0xbf8b[5]](_0xcf44x8))[_0xbf8b[13]];
				_0xcf44x5[_0xbf8b[14]](_0xcf44x9)
			}
		}
		return _0xcf44x5
	}
	catch(err)
	{
		logger[_0xbf8b[16]](_0xbf8b[15]);logger[_0xbf8b[16]](err);process[_0xbf8b[17]](0)
	}
}
;
const mergeScripts=(_0xcf44xb= [])=>
{
	const _0xcf44x9={changed:[],added:[],removed:[]};
	for(const _0xcf44xc of _0xcf44xb)
	{
		for(const _0xcf44xd of _0xcf44xc[_0xbf8b[18]])
		{
			if(!_0xcf44x9[_0xbf8b[18]][_0xbf8b[19]]((_0xcf44xe)=>_0xcf44xe== _0xcf44xd))
			{
				_0xcf44x9[_0xbf8b[18]][_0xbf8b[14]](_0xcf44xd)
			}
		}
		for(const _0xcf44xf of _0xcf44xc[_0xbf8b[20]])
		{
			if(!_0xcf44x9[_0xbf8b[20]][_0xbf8b[19]]((_0xcf44xe)=>_0xcf44xe== _0xcf44xf))
			{
				_0xcf44x9[_0xbf8b[20]][_0xbf8b[14]](_0xcf44xf)
			}
			let _0xcf44x10=_0xcf44x9[_0xbf8b[21]][_0xbf8b[9]]((_0xcf44xe)=>_0xcf44xe== _0xcf44xf);
			if(_0xcf44x10>  -1)
			{
				_0xcf44x9[_0xbf8b[21]][_0xbf8b[22]](_0xcf44x10,1)
			}
		}
		for(const _0xcf44x11 of _0xcf44xc[_0xbf8b[21]])
		{
			if(!_0xcf44x9[_0xbf8b[21]][_0xbf8b[19]]((_0xcf44xe)=>_0xcf44xe== _0xcf44x11))
			{
				_0xcf44x9[_0xbf8b[21]][_0xbf8b[14]](_0xcf44x11)
			}
			let _0xcf44x12=_0xcf44x9[_0xbf8b[18]][_0xbf8b[9]]((_0xcf44xe)=>_0xcf44xe== _0xcf44x11);
			let _0xcf44x13=_0xcf44x9[_0xbf8b[20]][_0xbf8b[9]]((_0xcf44xe)=>_0xcf44xe== _0xcf44x11);
			if(_0xcf44x12>  -1)
			{
				_0xcf44x9[_0xbf8b[18]][_0xbf8b[22]](_0xcf44x12,1)
			}
			if(_0xcf44x13>  -1)
			{
				_0xcf44x9[_0xbf8b[20]][_0xbf8b[22]](_0xcf44x13,1)
			}
		}
	}
	for(const [key,value] of Object[_0xbf8b[10]](_0xcf44x9))
	{
		_0xcf44x9[key]= value[_0xbf8b[23]]()
	}
	return _0xcf44x9
}
;
const toStringScripts=(_0xcf44x9= [])=>
{
	const {changed,added,removed}=_0xcf44x9;
	let _0xcf44x15=_0xbf8b[24];
	if(changed[_0xbf8b[25]]> 0)
	{
		_0xcf44x15+= _0xbf8b[26];changed[_0xbf8b[28]]((_0xcf44xc)=>
		{
			_0xcf44x15+= ("\x2D\x20"+_0xcf44xc+_0xbf8b[27])
		}
		)
	}
	if(added[_0xbf8b[25]]> 0)
	{
		_0xcf44x15+= _0xbf8b[29];added[_0xbf8b[28]]((_0xcf44xc)=>
		{
			_0xcf44x15+= ("\x2D\x20"+_0xcf44xc+_0xbf8b[27])
		}
		)
	}
	if(removed[_0xbf8b[25]]> 0)
	{
		_0xcf44x15+= _0xbf8b[30];removed[_0xbf8b[28]]((_0xcf44xc)=>
		{
			_0xcf44x15+= ("\x2D\x20"+_0xcf44xc+_0xbf8b[27])
		}
		)
	}
	return _0xcf44x15
}
;
const backupList=(_0xcf44x17= [])=>
{
	try
	{
		for(const _0xcf44xb of _0xcf44x17)
		{
			for(const _0xcf44xc of _0xcf44xb)
			{
				const _0xcf44x18=resolve(("\x2E\x2F\x62\x61\x63\x6B\x75\x70\x2F"+_0xcf44xc[_0xbf8b[11]](2)+_0xbf8b[24]));
				const _0xcf44x19=dirname(_0xcf44x18);
				if(!existsSync(_0xcf44x19))
				{
					mkdirSync(_0xcf44x19,{recursive:true})
				}
				const _0xcf44x1a=resolve(_0xcf44xc);
				if(existsSync(_0xcf44x1a))
				{
					copyFileSync(_0xcf44x1a,_0xcf44x18)
				}
			}
		}
		copyFileSync(_0xbf8b[7],_0xbf8b[31])
	}
	catch(err)
	{
		console[_0xbf8b[16]](err);logger[_0xbf8b[16]](_0xbf8b[32]);process[_0xbf8b[17]](0)
	}
}
;
const __change__add=(_0xcf44x17= [])=>
{
	for(const _0xcf44xb of _0xcf44x17)
	{
		for(const _0xcf44xc of _0xcf44xb)
		{
			const _0xcf44x1a=resolve(_0xcf44xc);
			const _0xcf44x1c=dirname(_0xcf44x1a);
			if(!existsSync(_0xcf44x1c))
			{
				mkdirSync(_0xcf44x1c,{recursive:true})
			}
			axios[_0xbf8b[5]]((""+baseURL+_0xbf8b[39]+_0xcf44xc[_0xbf8b[11]](2)+_0xbf8b[24]),{responseType:_0xbf8b[40]})[_0xbf8b[38]]((_0xcf44x1e)=>
			{
				const _0xcf44x1f=createWriteStream(_0xcf44x1a);
				_0xcf44x1e[_0xbf8b[13]][_0xbf8b[34]](_0xcf44x1f);_0xcf44x1f[_0xbf8b[37]](_0xbf8b[35],()=>
				{
					logger[_0xbf8b[4]](("\x55\x70\x64\x61\x74\x65\x64\x20"+_0xcf44xc+_0xbf8b[24]),_0xbf8b[3]);_0xcf44x1f[_0xbf8b[36]]()
				}
				);_0xcf44x1f[_0xbf8b[37]](_0xbf8b[16],(_0xcf44x1d)=>
				{
					_0xcf44x1f[_0xbf8b[36]]();throw _0xcf44x1d
				}
				)
			}
			)[_0xbf8b[33]]((_0xcf44x1d)=>
			{
				throw _0xcf44x1d
			}
			)
		}
	}
}
;
const __remove=(_0xcf44xb= [])=>
{
	for(const _0xcf44xc of _0xcf44xb)
	{
		const _0xcf44x1a=resolve(_0xcf44xc);
		if(existsSync(_0xcf44x1a))
		{
			let _0xcf44x21=statSync(_0xcf44x1a);
			if(_0xcf44x21[_0xbf8b[41]]())
			{
				rmSync(_0xcf44x1a,{recursive:true,force:true})
			}
			else 
			{
				unlinkSync(_0xcf44x1a)
			}
			logger[_0xbf8b[4]](("\x52\x65\x6D\x6F\x76\x65\x64\x20"+_0xcf44xc+_0xbf8b[24]),_0xbf8b[3])
		}
	}
}
;
const restore=(_0xcf44x17= [])=>
{
	logger[_0xbf8b[4]](_0xbf8b[42],_0xbf8b[3]);const _0xcf44x23=resolve(_0xbf8b[43]);
	if(existsSync(_0xcf44x23))
	{
		for(const _0xcf44xb of _0xcf44x17)
		{
			for(const _0xcf44xc of _0xcf44xb)
			{
				const _0xcf44x18=resolve(("\x2E\x2F\x62\x61\x63\x6B\x75\x70\x2F"+_0xcf44xc[_0xbf8b[11]](2)+_0xbf8b[24]));
				const _0xcf44x19=dirname(_0xcf44x18);
				const _0xcf44x1a=resolve(_0xcf44xc);
				const _0xcf44x1c=dirname(_0xcf44x1a);
				if(existsSync(_0xcf44x19))
				{
					if(!existsSync(_0xcf44x1c))
					{
						mkdirSync(_0xcf44x1c,{recursive:true})
					}
					copyFileSync(_0xcf44x18,_0xcf44x1a)
				}
			}
		}
	}
}
;
const update=(_0xcf44x9,_0xcf44x25)=>
{
	try
	{
		const {changed,added,removed}=_0xcf44x9;
		logger[_0xbf8b[4]](_0xbf8b[44],_0xbf8b[3]);const _0xcf44x23=resolve(_0xbf8b[43]);
		if(!existsSync(_0xcf44x23))
		{
			mkdirSync(_0xcf44x23,{recursive:true})
		}
		backupList([changed,added,removed]);__change__add([changed,added]);__remove(removed);const _0xcf44x26=createWriteStream(_0xbf8b[7]);
		_0xcf44x26[_0xbf8b[47]](JSON[_0xbf8b[45]](_0xcf44x25,null,2),_0xbf8b[46],(_0xcf44xe)=>
		{
			if(_0xcf44xe)
			{
				throw _0xcf44xe
			}
			_0xcf44x26[_0xbf8b[36]]()
		}
		)
	}
	catch(err)
	{
		console[_0xbf8b[16]](err);logger[_0xbf8b[16]](_0xbf8b[48]);restore([changed,added,removed]);process[_0xbf8b[17]](0)
	}
}
;
const main=async ()=>
{
	try
	{
		const _0xcf44x5= await checkUpdate()|| [];
		if(_0xcf44x5[_0xbf8b[25]]== 0)
		{
			logger[_0xbf8b[4]](_0xbf8b[49],_0xbf8b[3]);process[_0xbf8b[17]](0)
		}
		else 
		{
			const _0xcf44x28=mergeScripts(_0xcf44x5);
			const _0xcf44x15=toStringScripts(_0xcf44x28);
			const _0xcf44x25=( await axios[_0xbf8b[5]]((""+baseURL+_0xbf8b[50])))[_0xbf8b[13]];
			console[_0xbf8b[51]](_0xcf44x15);logger[_0xbf8b[53]](_0xbf8b[52]);logger[_0xbf8b[53]](_0xbf8b[54]);const _0xcf44x29=createInterface({input:process[_0xbf8b[55]],output:process[_0xbf8b[56]]});
			_0xcf44x29[_0xbf8b[61]](_0xbf8b[57],(_0xcf44x2a)=>
			{
				if(_0xcf44x2a[_0xbf8b[58]]()=== _0xbf8b[59])
				{
					_0xcf44x29[_0xbf8b[36]]();update(_0xcf44x28,_0xcf44x25)
				}
				else 
				{
					_0xcf44x29[_0xbf8b[36]]();logger[_0xbf8b[53]](_0xbf8b[60])
				}
			}
			)
		}
	}
	catch(e)
	{
		logger[_0xbf8b[16]](e);logger[_0xbf8b[16]](_0xbf8b[62]);process[_0xbf8b[17]](0)
	}
}



main();
