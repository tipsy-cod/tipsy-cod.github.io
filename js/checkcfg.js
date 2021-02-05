var config = [];

function checkCfg()
{
	if (document.getElementById("cfg").value.length === 0)
	{
		document.getElementById("violations").innerHTML = "";
		document.getElementById("violations").style.display = "none"
	}
	else
	{
		var a = "";
		var e, d;
		var c = ["aim.autoaim", "aimbot", "chams", "con_maxfps", "hax_aimbot", "hax_autoshoot", "hax_distesp", "hax_killsounds", "hax_killspam", "hax_nameesp", "hax_radar", "hax_stats", "hax_wallhack", "Mom_aimbot", "Mom_autoshoot", "Mom_distesp", "Mom_killspam", "Mom_nameesp", "Mom_radar", "Mom_stats", "Mom_wallhack", "nameesp", "norecoil", "recoil", "wallhack", "wh", "_aimbot", "_autoshoot", "_crosshair", "_crosshairhealth", "_infoenemy", "_killsounds", "_killspam", "_nameesp", "_radar", "_simpletrace", "_stats", "_wallhack"];
		var f = ["aim", "chams", "esp", "health", "info", "key", "kill", "radar", "recoil", "trace", "tracker", "vstr", "wall", "wait"];
		config = document.getElementById("cfg").value.split(/\r\n|\r|\n/i);
		for (e = 0; e < config.length; e++)
		{
			var b = config[e].match(/^bind .*? (.*)$/i);
			if (b !== null && b.length > 0)
			{
				for (d = 0; d < f.length; d++)
				{
					if (b[b.length - 1].toLowerCase().indexOf(f[d].toLowerCase()) !== -1)
					{
						a += '<li class="orange">Line ' + (e + 1) + ": Disallowed BIND contents <em>" + f[d] + "</em> in <pre>" + config[e] + '</pre> (<a href="#" onclick="removeLine(' + (e + 1) + ');return false;">Remove this line</a>)</li>';
						break
					}
				}
			}
			else
			{
				b = config[e].match(/^seta (.*?) (.*)$/i);
				if (b !== null && b.length > 0)
				{
					for (d = 0; d < c.length; d++)
					{
						if (b[b.length - 2].toLowerCase() === c[d].toLowerCase())
						{
							a += '<li class="red">Line ' + (e + 1) + ": Disallowed DVAR name <em>" + c[d] + '</em> (<a href="#" onclick="removeLine(' + (e + 1) + ');return false;">Remove this line</a>)</li>';
							break
						}
					}
					for (d = 0; d < f.length; d++)
					{
						if (b[b.length - 1].toLowerCase().indexOf(f[d].toLowerCase()) !== -1)
						{
							a += '<li class="orange">Line ' + (e + 1) + ": Disallowed DVAR contents <em>" + f[d] + "</em> in <pre>" + config[e] + '</pre> (<a href="#" onclick="removeLine(' + (e + 1) + ');return false;">Remove this line</a>)</li>';
							break
						}
					}
				}
			}
		}
		if (a === "")
		{
			a = '<li class="green">Your config is clean. Congratulations!</li>'
		}
		document.getElementById("violations").innerHTML = a;
		document.getElementById("violations").style.display = "block"
	}
}

function removeLine(a)
{
	config.splice(parseInt(a) - 1, 1);
	document.getElementById("cfg").value = config.join("\n");
	checkCfg()
};