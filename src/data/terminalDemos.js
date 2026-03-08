export const terminalDemos = {
  ethernet: [
    { text: "aniruddh@portfolio:~$ ", className: "terminal-prompt", delay: 100 },
    { text: "./eth_switch_sim --ports 4 --packets 6\n\n", className: "terminal-command", delay: 80 },
    { text: "[INIT] Ethernet Switch Simulator v1.0\n", className: "terminal-info", delay: 300 },
    { text: "[INIT] Configuring 4-port switch fabric...\n", className: "terminal-info", delay: 250 },
    { text: "[INIT] MAC address table cleared. Ready.\n\n", className: "terminal-info", delay: 400 },
    
    { text: "[PKT 1] SRC: AA:BB:CC:DD:EE:01 → DST: FF:FF:FF:FF:FF:FF\n", className: "terminal-output", delay: 150 },
    { text: "        Type: Broadcast | Flooding all ports...\n", className: "terminal-output", delay: 100 },
    { text: "        ✓ Forwarded to ports [1, 2, 3]\n\n", className: "terminal-success", delay: 350 },
    
    { text: "[PKT 2] SRC: AA:BB:CC:DD:EE:02 → DST: AA:BB:CC:DD:EE:01\n", className: "terminal-output", delay: 120 },
    { text: "        MAC table miss — learning SRC on port 1\n", className: "terminal-output", delay: 100 },
    { text: "        Flooding to all ports...\n", className: "terminal-output", delay: 100 },
    { text: "        ✓ Forwarded | MAC table updated\n\n", className: "terminal-success", delay: 350 },
    
    { text: "[PKT 3] SRC: AA:BB:CC:DD:EE:01 → DST: AA:BB:CC:DD:EE:02\n", className: "terminal-output", delay: 120 },
    { text: "        MAC table hit — DST known on port 2\n", className: "terminal-output", delay: 100 },
    { text: "        ✓ Unicast forwarded to port 2 (0 unnecessary floods)\n\n", className: "terminal-success", delay: 350 },
    
    { text: "[PKT 4] SRC: AA:BB:CC:DD:EE:03 → DST: AA:BB:CC:DD:EE:01\n", className: "terminal-output", delay: 120 },
    { text: "        MAC table hit — DST known on port 0\n", className: "terminal-output", delay: 100 },
    { text: "        ✓ Unicast forwarded to port 0\n\n", className: "terminal-success", delay: 350 },
    
    { text: "[PKT 5] SRC: AA:BB:CC:DD:EE:04 → DST: AA:BB:CC:DD:EE:99\n", className: "terminal-output", delay: 120 },
    { text: "        DST unknown — flooding all ports...\n", className: "terminal-output", delay: 100 },
    { text: "        ✓ Forwarded to ports [0, 1, 2]\n\n", className: "terminal-success", delay: 350 },
    
    { text: "[PKT 6] SRC: AA:BB:CC:DD:EE:01 → DST: AA:BB:CC:DD:EE:03\n", className: "terminal-output", delay: 120 },
    { text: "        MAC table hit — DST known on port 3\n", className: "terminal-output", delay: 100 },
    { text: "        ✓ Unicast forwarded to port 3\n\n", className: "terminal-success", delay: 450 },
    
    { text: "[DONE] Simulation complete.\n", className: "terminal-info", delay: 200 },
    { text: "Packets processed : 6\n", className: "terminal-output", delay: 80 },
    { text: "Unicast forwards  : 3\n", className: "terminal-output", delay: 80 },
    { text: "Broadcast floods  : 3\n", className: "terminal-output", delay: 80 },
    { text: "MAC table entries : 4\n", className: "terminal-output", delay: 80 },
    { text: "Drop count        : 0\n", className: "terminal-output", delay: 80 }
  ],
  
  traffic: [
    { text: "aniruddh@portfolio:~$ ", className: "terminal-prompt", delay: 100 },
    { text: "python generate_network.py --city austin --zones 12\n\n", className: "terminal-command", delay: 80 },
    { text: "[INIT] Synthetic Traffic Network Generator v2.1\n", className: "terminal-info", delay: 300 },
    { text: "[INIT] Loading configuration for city: Austin, TX\n", className: "terminal-info", delay: 250 },
    { text: "[INIT] Zone count: 12 (4 residential, 5 commercial, 3 mixed)\n\n", className: "terminal-info", delay: 400 },
    
    { text: "[STEP 1/5] Generating synthetic population...\n", className: "terminal-output", delay: 300 },
    { text: "  ├─ Creating 15,240 agents based on demographic data\n", className: "terminal-output", delay: 150 },
    { text: "  ├─ Assigning home locations (residential zones)\n", className: "terminal-output", delay: 150 },
    { text: "  └─ Assigning work destinations (commercial zones)\n", className: "terminal-success", delay: 450 },
    { text: "     ✓ Population generated: 15,240 agents\n\n", className: "terminal-success", delay: 200 },
    
    { text: "[STEP 2/5] Building road network topology...\n", className: "terminal-output", delay: 300 },
    { text: "  ├─ Placing 847 nodes (intersections + zone centroids)\n", className: "terminal-output", delay: 150 },
    { text: "  ├─ Generating 2,341 edges (road segments)\n", className: "terminal-output", delay: 150 },
    { text: "  ├─ Calculating distances using Haversine formula\n", className: "terminal-output", delay: 150 },
    { text: "  └─ Assigning speed limits and capacities\n", className: "terminal-success", delay: 450 },
    { text: "     ✓ Network graph constructed\n\n", className: "terminal-success", delay: 200 },
    
    { text: "[STEP 3/5] Computing travel demand matrix...\n", className: "terminal-output", delay: 300 },
    { text: "  ├─ Analyzing zoning policy effects on trip distribution\n", className: "terminal-output", delay: 150 },
    { text: "  ├─ Peak hour: 08:00-09:00 (morning commute)\n", className: "terminal-output", delay: 150 },
    { text: "  └─ Off-peak: distributed throughout day\n", className: "terminal-success", delay: 450 },
    { text: "     ✓ Demand matrix computed: 18,672 trips\n\n", className: "terminal-success", delay: 200 },
    
    { text: "[STEP 4/5] Running traffic assignment algorithm...\n", className: "terminal-output", delay: 300 },
    { text: "  ├─ Using agent-based routing (shortest path)\n", className: "terminal-output", delay: 150 },
    { text: "  ├─ Simulating traffic flow dynamics\n", className: "terminal-output", delay: 600 },
    { text: "  └─ Calculating link volumes and congestion levels\n", className: "terminal-success", delay: 450 },
    { text: "     ✓ Assignment converged in 12 iterations\n\n", className: "terminal-success", delay: 200 },
    
    { text: "[STEP 5/5] Exporting MATSIM XML files...\n", className: "terminal-output", delay: 200 },
    { text: "  ├─ Writing network.xml (847 nodes, 2341 links)\n", className: "terminal-output", delay: 150 },
    { text: "  ├─ Writing population.xml (15,240 agents with plans)\n", className: "terminal-output", delay: 150 },
    { text: "  └─ Writing config.xml (simulation parameters)\n", className: "terminal-success", delay: 350 },
    { text: "     ✓ Files saved to ./output/austin_12zones/\n\n", className: "terminal-success", delay: 200 },
    
    { text: "[SUMMARY]\n", className: "terminal-info", delay: 300 },
    { text: "Network nodes       : 847\n", className: "terminal-output", delay: 80 },
    { text: "Network links       : 2,341\n", className: "terminal-output", delay: 80 },
    { text: "Total agents        : 15,240\n", className: "terminal-output", delay: 80 },
    { text: "Total trips         : 18,672\n", className: "terminal-output", delay: 80 },
    { text: "Avg trip distance   : 4.7 km\n", className: "terminal-output", delay: 80 },
    { text: "Peak congestion     : 0.68 (moderate)\n", className: "terminal-output", delay: 80 },
    { text: "\n✓ Generation complete. Ready for MATSIM simulation.\n", className: "terminal-success", delay: 100 }
  ]
}
